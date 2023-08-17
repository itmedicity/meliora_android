//import liraries
import React, { memo, useMemo } from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'underscore';
import { forVerifyLists, getAssignedTicketList, getAssistTicketList, onHoldCOunts, onProgressLists, totalVerifyCOunts } from '../../../../Redux/ReduxSlice/complaintMagmntSlice';
import { assignedOnluyCount, assignedListOnly, ohHoldLists } from '../../../../Redux/ReduxSlice/complaintMagmntSlice';
import { getComDetlcountEmp, getTicketCount } from '../../../../Redux/ReduxSlice/ticketMagmntSlice';

// create a component
const ApiGetFun = ({ count }) => {
    const dispatch = useDispatch();

    //logged employee details
    const loggedEmpDetl = useSelector((state) => state.loginFuntion.loginInfo.loginDetl, _.isEqual);
    const loggedDetl = useMemo(() => loggedEmpDetl, [loggedEmpDetl]);
    const { emp_id } = loggedDetl;

    // //user wise assigned list total complaints
    // const assignedList = useSelector((state) => state.complaint.AssignedListUserWise.AssignedList, _.isEqual);
    // const assigenedListTotal = useMemo(() => assignedList, [assignedList]);

    useEffect(() => {
        // dispatch(getAssignedTicketList(emp_id))
        // dispatch(getAssistTicketList(emp_id))
        dispatch(getComDetlcountEmp(emp_id))
    }, [emp_id, count])


    const tickectCount = useSelector(getTicketCount)

    console.log(tickectCount)

    // useEffect(() => {
    //     // console.log(Object.keys(assigenedListTotal).length)
    //     // cm_rectify_status -> R - RECTIFIED / O - ON HOLD / P - ON PROGRESS
    //     //Total Assigned list not included the reactified list
    //     const assignedListOnlys = assigenedListTotal?.filter((val) => val.compalint_status === 1 && val.cm_rectify_status === null);
    //     const assignedOnluyCounts = Object.keys(assignedListOnly).length;
    //     assignedOnluyCount(assignedOnluyCounts)
    //     assignedListOnly(assignedListOnlys)
    //     // for verify lisy - rectified list for verify
    //     const forVerifyList = assigenedListTotal?.filter((val) => val.compalint_status === 2);
    //     const totalVerifyCOunt = Object.keys(forVerifyList).length
    //     forVerifyLists(forVerifyList)
    //     totalVerifyCOunts(totalVerifyCOunt)
    //     //on hold list 
    //     const ohHoldList = assigenedListTotal?.filter((val) => val.cm_rectify_status === 'O');
    //     const onHoldCOunt = Object.keys(ohHoldList).length
    //     ohHoldLists(ohHoldList)
    //     onHoldCOunts(onHoldCOunt)
    //     // onprogree list / pending list
    //     const onProgressList = assigenedListTotal?.filter((val) => val.cm_rectify_status === 'P');
    //     const onProgressTotal = Object.keys(onProgressList).length
    //     onProgressLists(onProgressList)
    // }, [assigenedListTotal])


    return (
        <View></View>
    );
};

//make this component available to the app
export default memo(ApiGetFun);
