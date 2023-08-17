//import liraries
import React, { lazy, memo, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import _ from 'underscore';
import HearderSecondary from '../../../Components/HearderSecondary';
import { bgColor, colorTheme, fontColor } from '../../../Constant/Colors';
import { windowHeight, windowWidth } from '../../../utils/Dimentions';
import { useSelector, useDispatch } from 'react-redux'
// import { getAssignedTicketList, getAssistTicketList, getNotAssignedComplaintList } from '../../../Redux/Actions/complaintMagmt.action';
// import { getEmployeeDetlLoggedDeptWise } from '../../../Redux/Actions/common.action';
import ApiGetFun from './func/ApiGetFun';

const FlashListNotAssign = lazy(() => import('./Components/FlashListNotAssign'))
const DashBoardView = lazy(() => import('./DashBoardView'))
const MyTicketDash = lazy(() => import('./Components/MyTicketDash'))

import BottomSheet, {
    BottomSheetModal,
    BottomSheetModalProvider,
    // useBottomSheetModal
} from '@gorhom/bottom-sheet'
import { XCircleIcon } from "react-native-heroicons/solid"
import { getEmployeeDetlLoggedDeptWise } from '../../../Redux/ReduxSlice/commonSlice';
import { getAssignedTicketList, getAssistTicketList, getNotAssignedComplaintList } from '../../../Redux/ReduxSlice/complaintMagmntSlice';

// create a component
const ComplaintRegister = ({ navigation }) => {

    const dispatch = useDispatch();
    // const loggedEmpDetl = useSelector((state) => state.loginFuntion.loginDetl, _.isEqual);
    // const notAssinedTickets = useSelector((state) => state.getNotAssignedCompList.notAssignedList, _.isEqual);

    const loggedEmpDetl = useSelector((state) => state.loginFuntion.loginInfo.loginDetl, _.isEqual);
    const notAssinedTickets = useSelector((state) => state);

    // console.log(loggedEmpDetl)


    const notAssinedTicket = useMemo(() => notAssinedTickets, [notAssinedTickets]);
    const loggedDetl = useMemo(() => loggedEmpDetl, [loggedEmpDetl]);
    const { emp_id, emp_dept } = loggedDetl;

    const [refresh, setRefresh] = useState(false);
    const [count, setCount] = useState(0);

    // const { dismiss, dismissAll } = useBottomSheetModal();

    const [customHeight, setCustomHeight] = useState(0)
    //not asssigned list from database
    useEffect(() => {
        dispatch(getEmployeeDetlLoggedDeptWise(emp_dept));
        dispatch(getNotAssignedComplaintList(emp_dept));
        dispatch(getAssignedTicketList(emp_id));
        // assigned list includeded the rectified list
        // dispatch(getTheAssignedListOnly(emp_id)); // assigened list only assigned list
        // dispatch(getTheAssignedListForVerify(emp_id)) // rectified list only for verification list
        dispatch(getAssistTicketList(emp_id));
    }, [emp_dept, count, emp_id, dispatch])

    useEffect(() => {
        if (windowHeight > 750) {
            setCustomHeight(windowHeight - 280)
        } else if (windowHeight < 737 && windowHeight > 724) {
            setCustomHeight(windowHeight - 240)
        } else if (windowHeight < 738) {
            setCustomHeight(windowHeight - 250)
        }
    }, [windowHeight])


    //MODAL CODING START HERE
    const bottomSheetModalRef = useRef(< BottomSheetModal />);

    // variables
    const snapPoints = useMemo(() => ['80%', '80%'], []);

    // callbacks
    const handlePresentModalPress = useCallback((data) => {
        bottomSheetModalRef.current?.present();
        // console.log(data)
    }, []);
    const handleSheetChanges = useCallback((index) => {
        // console.log('handleSheetChanges', index);
        bottomSheetModalRef.current?.dismiss()
    }, []);

    //MODAL CODING END HERE


    // DASH BOARD ARRAY

    const myTicketsInfo = [
        {}
    ]

    return (
        <SafeAreaView style={styles.container} >
            <BottomSheetModalProvider>
                <ApiGetFun />
                {/* Header Component */}
                <HearderSecondary navigation={navigation} name="Ticket Management" goBackButton={true} />
                <ScrollView style={styles.scrollView} >
                    {/* Dash Bord Veiw Start */}
                    <View style={styles.dashBord} >
                        <Suspense fallback={<ActivityIndicator />} >
                            <DashBoardView navigation={navigation} />
                        </Suspense>
                    </View>
                    {/* Dash Bord View End  */}
                    <View style={styles.card} >
                        <View style={styles.cardHeader} >
                            <Text style={styles.cardTitle} >My Ticket's Status</Text>
                        </View>
                        <Suspense fallback={<ActivityIndicator />} >
                            <MyTicketDash />
                            <MyTicketDash />
                        </Suspense>

                        {/* <View style={{
                            maxWidth: windowWidth,
                            height: (windowHeight * 70.5 / 100)
                        }} >
                            <Suspense fallback={<ActivityIndicator />} >
                                <FlashListNotAssign
                                    notAssigned={notAssinedTicket}
                                    setCount={setCount}
                                    refresh={refresh}
                                    count={count}
                                    modalOpenFun={handlePresentModalPress}
                                />
                            </Suspense>
                        </View> */}
                        {/* Pull Down Refredh Components start */}
                        {/* <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: bgColor.cardBg,
                            height: (windowHeight * 5 / 100)
                        }} >
                            <Text style={{
                                ...styles.cardTitle,
                                fontFamily: 'Roboto_100Thin',
                                fontSize: 10,
                            }} >Pull Down To Refresh</Text>
                        </View> */}
                        {/* Pull Down Refredh Components Ends */}
                    </View>
                </ScrollView>


                {/* Bottom Sheet modal start here */}
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    // onChange={handleSheetChanges}
                    style={{ flex: 1, borderRadius: 10 }}
                    backgroundStyle={{ backgroundColor: 'white', }}
                >
                    <View className='flex-1 bg-gray-100'>
                        <View className="p-2 border-b border-[#00CCBB] bg-white shadow-xs" >
                            <View>
                                <Text className='text-lg text-center' style={{ fontFamily: 'Roboto_500Medium' }} >Ticket's Assign</Text>
                                <Text className='text-center text-gray-400 text-sm font-bold' style={{ fontFamily: 'Roboto_100Thin' }}  >
                                    Detailed Job Assignment
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={handleSheetChanges}
                                className='rounded-full bg-gray-100 absolute top-3 right-5'
                            >
                                <XCircleIcon color='#00CCBB' height={35} width={35} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView className='flex-1 bg-red-100 ' >
                            <View className="h-10 bg-blue-100 p-1 border-b border-zinc-300">
                                <View className="flex-1 flex-row" >
                                    <Text className="text-gray-500" >Ticket Number :</Text>
                                    <Text className="text-gray-700">19</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </BottomSheetModal>
                {/* Bottom sheet modal ends here */}


            </BottomSheetModalProvider>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: colorTheme.mainBgColor,
        height: windowHeight,
    },
    scrollView: {
        padding: 8,
    },
    dashBord: {
        // flex: 1,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        backgroundColor: colorTheme.mainBgColor,
    },
    cardHeader: {
        backgroundColor: colorTheme.mainBgColor,
        // backgroundColor: "powderblue",
        height: (windowHeight * 4 / 100),
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row',
        overflow: 'hidden',
        borderTopLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    cardTitle: {
        fontFamily: 'Roboto_500Medium',
        fontSize: windowWidth > 400 ? 14 : 12,
        paddingHorizontal: 5,
        overflow: 'hidden',
        color: colorTheme.mainColor
    }
});

//make this component available to the app
export default memo(ComplaintRegister);
