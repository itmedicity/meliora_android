//import liraries
import React, { memo, useMemo } from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'underscore';
import { getAssignedTicketList, getAssistTicketList } from '../../../../Redux/Actions/complaintMagmt.action';
import { ActionType } from '../../../../Redux/Constants/action.type';

// create a component
const ApiGetFun = ({ count }) => {
    const dispatch = useDispatch();
    const {
        FETCH_ASSIGNED_COUNT,
        GET_ASSIGNED_LIST_ONLY,
        GET_ASSIGNED_FOR_VERIFY_LIST,
        FTECH_VERIFY_FOR_COUNT,
        FETCH_ONHOLD_COMPLAINT,
        FETCH_ONHOLD_COUNT,
        FETCH_ON_PROGRESS_TICKET,
        FETCH_TODAY_COMPLETED_COUNT
    } = ActionType;

    //logged employee details
    const loggedEmpDetl = useSelector((state) => state.loginFuntion.loginDetl, _.isEqual);
    const loggedDetl = useMemo(() => loggedEmpDetl, [loggedEmpDetl]);
    const { emp_id, emp_no, emp_dept } = loggedDetl;

    //user wise assigned list total complaints
    const assignedList = useSelector((state) => state.getAssignedListUserWise.AssignedList, _.isEqual);
    const assigenedListTotal = useMemo(() => assignedList, [assignedList]);

    //     dispatch({ type: FETCH_ASSIGNED_COUNT, payload: count })
    //     dispatch({ type: GET_ASSIGNED_LIST_ONLY, payload: data, status: true })

    // console.log(assignedList)

    useEffect(() => {
        dispatch(getAssignedTicketList(emp_id))
        dispatch(getAssistTicketList(emp_id))
    }, [emp_id, count])

    useEffect(() => {
        // console.log(Object.keys(assigenedListTotal).length)
        // cm_rectify_status -> R - RECTIFIED / O - ON HOLD / P - ON PROGRESS

        //Total Assigned list not included the reactified list
        const assignedListOnly = assigenedListTotal?.filter((val) => val.compalint_status === 1 && val.cm_rectify_status === null);
        const assignedOnluyCount = Object.keys(assignedListOnly).length
        dispatch({ type: FETCH_ASSIGNED_COUNT, payload: assignedOnluyCount })
        dispatch({ type: GET_ASSIGNED_LIST_ONLY, payload: assignedListOnly, status: true })
        // console.log(assignedListOnly)

        // for verify lisy - rectified list for verify
        const forVerifyList = assigenedListTotal?.filter((val) => val.compalint_status === 2);
        const totalVerifyCOunt = Object.keys(forVerifyList).length
        dispatch({ type: GET_ASSIGNED_FOR_VERIFY_LIST, payload: forVerifyList, status: true })
        dispatch({ type: FTECH_VERIFY_FOR_COUNT, payload: totalVerifyCOunt, status: true })

        //on hold list 
        const ohHoldList = assigenedListTotal?.filter((val) => val.cm_rectify_status === 'O');
        const onHoldCOunt = Object.keys(ohHoldList).length
        dispatch({ type: FETCH_ONHOLD_COMPLAINT, payload: ohHoldList, status: true })
        dispatch({ type: FETCH_ONHOLD_COUNT, payload: onHoldCOunt, status: true })

        // onprogree list / pending list
        const onProgressList = assigenedListTotal?.filter((val) => val.cm_rectify_status === 'P');
        const onProgressTotal = Object.keys(onProgressList).length
        dispatch({ type: FETCH_ON_PROGRESS_TICKET, payload: onProgressList, status: true })
        dispatch({ type: FETCH_TODAY_COMPLETED_COUNT, payload: onProgressTotal, status: true })

        // assistanse list total

    }, [assigenedListTotal])


    return (
        <View></View>
    );
};

//make this component available to the app
export default memo(ApiGetFun);
