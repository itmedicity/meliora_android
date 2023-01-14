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

const DashCountTile = lazy(() => import('./DashCountTile'))
const NotAssignedCard = lazy(() => import('./NotAssignedCard'))
const FlashListNotAssign = lazy(() => import('./FlashListNotAssign'))

// create a component
const ComplaintRegister = ({ navigation }) => {

    const {
        FETCH_NEW_TICKET_COUNT,
        FETCH_ASSIGNED_COUNT,
        FETCH_ASSIST_COUNT,
        FETCH_ONHOLD_COUNT,
        FTECH_VERIFY_FOR_COUNT,
        FETCH_TODAY_COMPLETED_COUNT
    } = ActionType;

    const dispatch = useDispatch();

    const loggedEmpDetl = useSelector((state) => state.loginFuntion.loginDetl, _.isEqual);

    const loggedDetl = useMemo(() => loggedEmpDetl, [loggedEmpDetl]);
    const { emp_id, emp_no, emp_dept } = loggedDetl;


    const [refresh, setRefresh] = useState(false)
    const [count, setCount] = useState(0)

    // dash board count useStates
    const [newTicket, setNewTicket] = useState(0);
    const [assigned, setAssigned] = useState(0)
    const [assit, setAssist] = useState(0)
    const [onHold, setOnHold] = useState(0)
    const [forVerify, setForVerify] = useState(0)
    const [completed, setCompleted] = useState(0)
    const [notAssignedList, setNotAssignedList] = useState([]);

    const notAssigned = useMemo(() => notAssignedList, [notAssignedList]);

    useEffect(() => {
        //not asssigned list from database
        getNotAssinedTicket(emp_dept).then((value) => {
            const { data, message } = value;
            if (message === 1) {
                let totalNotAssignCount = Object.keys(data).length
                let countData = { newTicket: totalNotAssignCount }
                const notAssinTiketCount = dispatch({ type: FETCH_NEW_TICKET_COUNT, payload: countData })
                setNotAssignedList(data)
                setNewTicket(totalNotAssignCount)
            }
        })
    }, [emp_dept, count])

    return (
        <SafeAreaView style={styles.container} >
            {/* Header Component */}
            <HearderSecondary navigation={navigation} name="Complaint Register" goBackButton={true} />
            <ScrollView style={styles.scrollView} >
                <View style={styles.dashBord} >
                    <Suspense fallback={<ActivityIndicator />} >
                        <ScrollView
                            horizontal={true}
                            fadingEdgeLength={10}
                            showsHorizontalScrollIndicator={false}
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                maxWidth: windowWidth,
                            }}
                        >
                            <DashCountTile navigation={navigation} id={1} name='New Ticket' count={newTicket} />
                            <DashCountTile navigation={navigation} id={2} name='Assigned' count={assigned} />
                            <DashCountTile navigation={navigation} id={3} name='Assistance' count={assit} />
                            <DashCountTile navigation={navigation} id={4} name='OnHold' count={onHold} />
                            <DashCountTile navigation={navigation} id={5} name='For Verify' count={forVerify} />
                            <DashCountTile navigation={navigation} id={6} name='Completed' count={completed} />
                        </ScrollView>
                    </Suspense>
                </View>
                <View style={styles.card} >
                    <View style={styles.cardHeader} >
                        <Text style={styles.cardTitle} >Tickets</Text>
                        <View>
                            <Text
                                style={styles.cardTitle}
                                onPress={() => { alert('hai') }}
                            >Add New Tickets</Text>
                        </View>
                    </View>
                    <View style={{
                        maxWidth: windowWidth,
                        height: windowHeight >= 1200 ? windowHeight - 280 : windowHeight - 220
                    }} >
                        <Suspense fallback={<ActivityIndicator />} >
                            <FlashListNotAssign
                                notAssigned={notAssigned}
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
        backgroundColor: 'powderblue',
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
