import { ActionType } from "../Constants/action.type";

const {
    FETCH_NEW_TICKET_COUNT,
    FETCH_ASSIGNED_COUNT,
    FETCH_ASSIST_COUNT,
    FETCH_ONHOLD_COUNT,
    FTECH_VERIFY_FOR_COUNT,
    FETCH_TODAY_COMPLETED_COUNT,
    GET_DASHBOARD_ACTION,
    FETCH_NOT_ASSIGNED_COMP_LIST_DEPT,
    FETCH_ASSIGNED_COMP_USER,
    FETCH_ASSIT_COMP_USER,
    FETCH_ALL_COMPLAINT_TODAY,
    FETCH_ONHOLD_COMPLAINT,
    FETCH_FOR_VERIFY_COMP,
} = ActionType;

const ticketCount = {
    newTicketCount: 0,
    assignedTickectCount: 0,
    assistTicketCount: 0,
    onHoldTicketCount: 0,
    forVerifyTicketCount: 0,
    todayCompletedCount: 0
}

export const getTicketCount = (state = ticketCount, { type, payload }) => {
    switch (type) {
        case FETCH_NEW_TICKET_COUNT:
            return { ...state, newTicketCount: payload };
        case FETCH_ASSIGNED_COUNT:
            return { ...state, assignedTickectCount: payload };
        case FETCH_ASSIST_COUNT:
            return { ...state, assistTicketCount: payload };
        case FETCH_ONHOLD_COUNT:
            return { ...state, onHoldTicketCount: payload };
        case FTECH_VERIFY_FOR_COUNT:
            return { ...state, forVerifyTicketCount: payload };
        case FETCH_TODAY_COMPLETED_COUNT:
            return { ...state, todayCompletedCount: payload };
        default:
            return state;
    }
}

const dashCountVariable = {
    dashCount: 0
}

export const getDashCountVariable = (state = dashCountVariable, { type, payload }) => {
    switch (type) {
        case GET_DASHBOARD_ACTION:
            return { ...state, dashCount: payload };
        default:
            return state;
    }
}

//get the not assigned list employee department wise
const notAssignedList = {
    notAssignedList: []
}

export const getNotAssignedCompList = (state = notAssignedList, { type, payload }) => {
    switch (type) {
        case FETCH_NOT_ASSIGNED_COMP_LIST_DEPT:
            return { ...state, notAssignedList: payload };
        default:
            return state;
    }
}

// for get the assingned complaint list 

const AssignedListUserWise = {
    AssignedList: []
}

export const getAssignedListUserWise = (state = AssignedListUserWise, { type, payload }) => {
    switch (type) {
        case FETCH_ASSIGNED_COMP_USER:
            return { ...state, AssignedList: payload };
        default:
            return state;
    }
}

// for getting the complaint list for loggin employee with assistance status

const AssitanceListUserWise = {
    assistanceList: []
}

export const getAssitanceListUserWise = (state = AssitanceListUserWise, { type, payload }) => {
    switch (type) {
        case FETCH_ASSIT_COMP_USER:
            return { ...state, assistanceList: payload };
        default:
            return state;
    }
}


//for getting the today total complaint with completed status
const totdayCompletedTicket = {
    completedTicket: []
}

export const getTodayCompletedList = (state = totdayCompletedTicket, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_COMPLAINT_TODAY:
            return { ...state, completedTicket: payload };
        default:
            return state;
    }
}


//for getting the onhold list 
const totalOnholdTicketList = {
    onHoldTicked: []
}

export const getOnholdComplaintList = (state = totalOnholdTicketList, { type, payload }) => {
    switch (type) {
        case FETCH_ONHOLD_COMPLAINT:
            return { ...state, onHoldTicked: payload };
        default:
            return state;
    }
}

//for getting the total pending verify list
const verifyPending = {
    verifyPending: []
}

export const getTotalPendingVerify = (state = verifyPending, { type, payload }) => {
    switch (type) {
        case FETCH_FOR_VERIFY_COMP:
            return { ...state, verifyPending: payload };
        default:
            return state;
    }
}