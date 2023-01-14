import { ActionType } from "../Constants/action.type";

const {
  FETCH_LOGIN_INFORMATION,
  FETCH_PUSH_TOKEN,
  FETCH_NEW_TICKET_COUNT,
  FETCH_ASSIGNED_COUNT,
  FETCH_ASSIST_COUNT,
  FETCH_ONHOLD_COUNT,
  FTECH_VERIFY_FOR_COUNT,
  FETCH_TODAY_COMPLETED_COUNT,
  GET_DASHBOARD_ACTION
} = ActionType;

const initialLoginState = {
  token: null,
  loginDetl: {},
  message: "",
  lodingStatus: false,
};

export const loginFuntion = (state = initialLoginState, { type, payload }) => {
  switch (type) {
    case FETCH_LOGIN_INFORMATION:
      return {
        ...state,
        token: payload.token,
        loginDetl: payload.data,
        message: payload.message,
        loadingStatus: payload.loadingStatus,
      };
    default:
      return state;
  }
};

const pushToken = {}

export const expoPushToken = (state = pushToken, { type, payload }) => {
  switch (type) {
    case FETCH_PUSH_TOKEN:
      return { ...state, payload };
    default:
      return state;
  }
}


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
      return { ...state, newTicketCount: payload.newTicketCount };
    case FETCH_ASSIGNED_COUNT:
      return { ...state, assignedTickectCount: payload.assignedTickectCount };
    case FETCH_ASSIST_COUNT:
      return { ...state, assistTicketCount: payload.assistTicketCount };
    case FETCH_ONHOLD_COUNT:
      return { ...state, onHoldTicketCount: payload.onHoldTicketCount };
    case FTECH_VERIFY_FOR_COUNT:
      return { ...state, forVerifyTicketCount: payload.forVerifyTicketCount };
    case FETCH_TODAY_COMPLETED_COUNT:
      return { ...state, todayCompletedCount: payload.todayCompletedCount };
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