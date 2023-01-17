//import liraries
import { FlashList } from '@shopify/flash-list';
import React, { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Button } from 'react-native-paper';
import _ from 'underscore';
import HearderSecondary from '../../../Components/HearderSecondary';
import { axiosApi } from '../../../config/Axiox';
import { bgColor, fontColor } from '../../../Constant/Colors';
import { windowHeight, windowWidth } from '../../../utils/Dimentions';
import { DATA, getNotAssinedTicket } from './func/compRegisterFun';
import { useSelector, useDispatch } from 'react-redux'
import CustomActivityIndicator from '../../../Components/CustomActivityIndicator';
import { ActionType } from '../../../Redux/Constants/action.type';
import { getAssignedTicketList, getAssistTicketList, getNotAssignedComplaintList } from '../../../Redux/Actions/complaintMagmt.action';

const DashCountTile = lazy(() => import('./DashCountTile'))
const NotAssignedCard = lazy(() => import('./Components/NotAssignedCard'))
const FlashListNotAssign = lazy(() => import('./Components/FlashListNotAssign'))
const DashBoardView = lazy(() => import('./DashBoardView'))

// create a component
const ComplaintRegister = ({ navigation }) => {

    const dispatch = useDispatch();

    const loggedEmpDetl = useSelector((state) => state.loginFuntion.loginDetl, _.isEqual);
    const notAssinedTickets = useSelector((state) => state.getNotAssignedCompList.notAssignedList, _.isEqual);

    const notAssinedTicket = useMemo(() => notAssinedTickets, [notAssinedTickets]);
    const loggedDetl = useMemo(() => loggedEmpDetl, [loggedEmpDetl]);
    const { emp_id, emp_no, emp_dept } = loggedDetl;

    const [refresh, setRefresh] = useState(false)
    const [count, setCount] = useState(0)

    //not asssigned list from database
    useEffect(() => {
        dispatch(getNotAssignedComplaintList(emp_dept));
        dispatch(getAssignedTicketList(emp_id));
        dispatch(getAssistTicketList(emp_id));
    }, [emp_dept, count, emp_id, dispatch])

    return (
        <SafeAreaView style={styles.container} >
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
                        height: windowHeight >= 1200 ? windowHeight - 280 : windowHeight - 220
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
                        minHeight: 20
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
        minHeight: 30,
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
export default ComplaintRegister;
