import { combineReducers } from "redux";

import {
  loginFuntion,
  expoPushToken,

} from "../Reducer/LoginFn.reducer";

import {
  getTicketCount,
  getDashCountVariable,
  getNotAssignedCompList,
  getAssignedListUserWise,
  getAssitanceListUserWise,
  getTodayCompletedList,
  getOnholdComplaintList,
  getTotalPendingVerify
} from "../Reducer/complaintMagmnt.reducer"


const reducer = combineReducers({
  loginFuntion,
  expoPushToken,
  getTicketCount,
  getDashCountVariable,
  getNotAssignedCompList,
  getAssignedListUserWise,
  getAssitanceListUserWise,
  getTodayCompletedList,
  getOnholdComplaintList,
  getTotalPendingVerify
});

export default reducer;
