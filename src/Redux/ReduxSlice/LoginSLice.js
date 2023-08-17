import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loginInfo: {
        token: null,
        loginDetl: {},
        message: "",
        lodingStatus: false,
    }
};

export const loginFuntion = createSlice({
    name: "LoginInf",
    initialState,
    reducers: {
        loggedInfomration: (state, { payload }) => {
            state.loginInfo = {
                ...state.loginInfo,
                token: payload.token,
                loginDetl: payload,
                message: payload.message,
                loadingStatus: payload.loadingStatus,
            }
        },
        clearLoggedInformation: (state) => {
            state.loginInfo = {
                token: null,
                loginDetl: {},
                message: "",
                lodingStatus: false,
            }
        },
    }
})

export const selectLoginInform = (state) => state.loginFuntion.loginInfo.loginDetl;

export const { loggedInfomration, clearLoggedInformation } = loginFuntion.actions;

export default loginFuntion.reducer;