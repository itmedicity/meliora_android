import { axiosApi } from "../../config/Axiox";
import { ActionType } from "../Constants/action.type";

const {
    FETCH_NOT_ASSIGNED_COMP_LIST_DEPT,
    FETCH_ASSIGNED_COMP_USER,
    FETCH_ASSIT_COMP_USER,
    FETCH_ALL_COMPLAINT_TODAY,
    FETCH_ONHOLD_COMPLAINT,
    FETCH_FOR_VERIFY_COMP,

    FETCH_NEW_TICKET_COUNT,
    FETCH_ASSIGNED_COUNT,
    FETCH_ASSIST_COUNT,
    FETCH_ONHOLD_COUNT,
    FTECH_VERIFY_FOR_COUNT,
    FETCH_TODAY_COMPLETED_COUNT

} = ActionType;

// for get the not assigned complaint list department wise { pass employee department}
export const getNotAssignedComplaintList = (id) => async (dispatch) => {
    const result = await axiosApi.get(`/complaintassign/${id}`);
    const { success, data, message } = result.data;
    if (success === 1) {
        const count = Object.keys(data).length
        dispatch({ type: FETCH_NEW_TICKET_COUNT, payload: count })
        dispatch({ type: FETCH_NOT_ASSIGNED_COMP_LIST_DEPT, payload: data })
    } else {
        dispatch({ type: FETCH_NEW_TICKET_COUNT, payload: 0 })
        dispatch({ type: FETCH_NOT_ASSIGNED_COMP_LIST_DEPT, payload: [] })
    }
}

//for assigned complaint {user id as input}
export const getAssignedTicketList = (id) => async (dispatch) => {
    const result = await axiosApi.get(`/complaintassign/user/${id}`);
    const { success, data, message } = result.data;
    if (success === 1) {
        const count = Object.keys(data).length
        dispatch({ type: FETCH_ASSIGNED_COUNT, payload: count })
        dispatch({ type: FETCH_ASSIGNED_COMP_USER, payload: data })
    } else {
        dispatch({ type: FETCH_ASSIGNED_COUNT, payload: 0 })
        dispatch({ type: FETCH_ASSIGNED_COMP_USER, payload: [] })
    }
}

// for assist { user id as input}
export const getAssistTicketList = (id) => async (dispatch) => {
    const result = await axiosApi.get(`/complaintassign/individual/assist/${id}`);
    const { success, data, message } = result.data;
    if (success === 1) {
        const count = Object.keys(data).length
        dispatch({ type: FETCH_ASSIST_COUNT, payload: count })
        dispatch({ type: FETCH_ASSIT_COMP_USER, payload: data })
    } else {
        dispatch({ type: FETCH_ASSIST_COUNT, payload: 0 })
        dispatch({ type: FETCH_ASSIT_COMP_USER, payload: [] })
    }
}
