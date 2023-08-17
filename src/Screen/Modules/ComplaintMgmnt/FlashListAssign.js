//import liraries
import React, { memo, Suspense, useEffect, useMemo, useState, lazy } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import HearderSecondary from '../../../Components/HearderSecondary';
import { bgColor, fontColor } from '../../../Constant/Colors';
import { getTheAssignedListOnly } from '../../../Redux/Actions/complaintMagmt.action';
import { windowHeight, windowWidth } from '../../../utils/Dimentions';
import { useDispatch, useSelector } from 'react-redux'
import _ from 'underscore';
import FlashListCmp from './Components/FlashListCmp';
import ApiGetFun from './func/ApiGetFun';

const AssignedListCmp = lazy(() => import('./Components/AssignedListCmp'))

// create a component
const FlashListAssign = ({ navigation }) => {

    const dispatch = useDispatch();
    // user logged information
    const loggedEmpDetl = useSelector((state) => state.loginFuntion.loginInfo.loginDetl, _.isEqual);
    const loggedDetl = useMemo(() => loggedEmpDetl, [loggedEmpDetl]);
    const { emp_id, emp_no, emp_dept } = loggedDetl;

    // get the assinned ticket list
    // const assignedList = useSelector((state) => state.getAssignedListUserWise.AssignedList, _.isEqual);

    const assignedList = useSelector((state) => state.complaint.AssignedListUserWise.AssignedList, _.isEqual);
    // console.log(assignedList)

    const [count, setCount] = useState(0)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        // dispatch(getAssignedTicketList(emp_id));
        dispatch(getTheAssignedListOnly(emp_id))
    }, [emp_dept, count, emp_id, dispatch])

    return (
        <SafeAreaView style={styles.container}>
            <ApiGetFun />
            {/* Header  */}
            <HearderSecondary
                navigation={navigation}
                name="Assigned List"
                goBackButton={false}
            />
            <View style={styles.card} >
                <View style={styles.cardHeader} >
                    <Text style={styles.cardTitle} >Assigned Tickets</Text>
                </View>
                <View style={{
                    flex: 1,
                    maxWidth: windowWidth,
                    height: (windowHeight * 70 / 100)
                }} >
                    <Suspense fallback={<ActivityIndicator />} >
                        <FlashListCmp
                            FlashRenderCmp={AssignedListCmp}
                            Assigned={assignedList}
                            setCount={setCount}
                            refresh={refresh}
                            count={count}
                        />
                    </Suspense>
                </View>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: bgColor.cardBg,
                minHeight: (windowHeight * 5 / 100)
            }} >
                <Text style={{
                    ...styles.cardTitle,
                    fontFamily: 'Roboto_100Thin',
                    fontSize: 10,
                }} >Pull Down To Refresh</Text>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColor.cardBg,
        height: windowHeight
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
        minHeight: (windowHeight * 3 / 100),
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
export default memo(FlashListAssign);
