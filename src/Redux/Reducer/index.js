import { combineReducers } from "redux";

import {
  loginFuntion,
  expoPushToken,
  getTicketCount,
  getDashCountVariable
} from "../Reducer/LoginFn.reducer";


const reducer = combineReducers({
  loginFuntion,
  expoPushToken,
  getTicketCount,
  getDashCountVariable
});

export default reducer;
