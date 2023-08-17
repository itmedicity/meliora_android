import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './ReduxSlice/commonSlice';
import complaintMagmntSlice from './ReduxSlice/complaintMagmntSlice';
import LoginSLice from './ReduxSlice/LoginSLice';
import tokenSlice from './ReduxSlice/pushTokenSlice';
import ticketMagmentDeptSlice from './ReduxSlice/ticketMagmentDeptSlice';
import ticketMagmntSlice from './ReduxSlice/ticketMagmntSlice';

export const store = configureStore({
    reducer: {
        loginFuntion: LoginSLice,
        expoPushToken: tokenSlice,
        commonFun: commonSlice,
        complaint: complaintMagmntSlice,
        ticketUser: ticketMagmntSlice,
        ticketDept: ticketMagmentDeptSlice
    }
})
