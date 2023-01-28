//import liraries
import React, { lazy, memo, Suspense, useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import _ from 'underscore';
import HearderSecondary from '../../../Components/HearderSecondary';
import { bgColor, fontColor } from '../../../Constant/Colors';
import { windowHeight, windowWidth } from '../../../utils/Dimentions';
import { useSelector, useDispatch } from 'react-redux'
import { getAssignedTicketList, getAssistTicketList, getNotAssignedComplaintList } from '../../../Redux/Actions/complaintMagmt.action';
import { getEmployeeDetlLoggedDeptWise } from '../../../Redux/Actions/common.action';
import ApiGetFun from './func/ApiGetFun';

const FlashListNotAssign = lazy(() => import('./Components/FlashListNotAssign'))
const DashBoardView = lazy(() => import('./DashBoardView'))

// create a component
const ComplaintRegister = ({ navigation }) => {

    const dispatch = useDispatch();
    const loggedEmpDetl = useSelector((state) => state.loginFuntion.loginDetl, _.isEqual);
    const notAssinedTickets = useSelector((state) => state.getNotAssignedCompList.notAssignedList, _.isEqual);

    const notAssinedTicket = useMemo(() => notAssinedTickets, [notAssinedTickets]);
    const loggedDetl = useMemo(() => loggedEmpDetl, [loggedEmpDetl]);
    const { emp_id, emp_dept } = loggedDetl;

    const [refresh, setRefresh] = useState(false)
    const [count, setCount] = useState(0)

    const [customHeight, setCustomHeight] = useState(0)
    //not asssigned list from database
    useEffect(() => {
        dispatch(getEmployeeDetlLoggedDeptWise(emp_dept));
        dispatch(getNotAssignedComplaintList(emp_dept));
        dispatch(getAssignedTicketList(emp_id)); // assigned list includeded the rectified list
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

    return (
        <SafeAreaView style={styles.container} >
            <ApiGetFun />
            {/* Header Component */}
            <HearderSecondary navigation={navigation} name="Complaint Register" goBackButton={true} />
            <ScrollView style={styles.scrollView} >
                <View style={styles.dashBord} >
                    <Suspense fallback={<ActivityIndicator />} >
                        <DashBoardView navigation={navigation} />
                    </Suspense>
                </View>
                <View style={styles.card} >
                    <View style={styles.cardHeader} >
                        <Text style={styles.cardTitle} >Tickets</Text>
                        <View>
                            <Text
                                style={styles.cardTitle}
                            // onPress={() => { alert('hai') }}
                            >Add New Tickets</Text>
                        </View>
                    </View>
                    <View style={{
                        maxWidth: windowWidth,
                        height: customHeight
                    }} >
                        <Suspense fallback={<ActivityIndicator />} >
                            <FlashListNotAssign
                                notAssigned={notAssinedTicket}
                                setCount={setCount}
                                refresh={refresh}
                                count={count}
                            />
                        </Suspense>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: bgColor.cardBg,
                        height: 20
                    }} >
                        <Text style={{
                            ...styles.cardTitle,
                            fontFamily: 'Roboto_100Thin',
                            fontSize: 10,
                        }} >Pull Down To Refresh</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColor.mainBgColor,
        flex: 1,
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
        backgroundColor: '#fffdff',
        borderRadius: 5,
        overflow: 'hidden'
    },
    cardHeader: {
        backgroundColor: bgColor.cardBg,
        // backgroundColor: "powderblue",
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row',
        overflow: 'hidden',
        borderTopLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    cardTitle: {
        fontFamily: 'Roboto_500Medium',
        fontSize: windowWidth > 400 ? 14 : 12,
        paddingHorizontal: 5,
        overflow: 'hidden',
        color: fontColor.inActiveFont
    }
});

//make this component available to the app
export default memo(ComplaintRegister);
