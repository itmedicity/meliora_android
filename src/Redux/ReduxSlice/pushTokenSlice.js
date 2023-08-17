import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pushToken: {}
};

export const tokenSlice = createSlice({
    name: "pushToknSlice",
    initialState,
    reducers: {
        expoPushToken: (state, { payload }) => {
            state.pushToken = {
                ...state.pushToken,
                ...payload
            }
        }
    }
})

export const { expoPushToken } = tokenSlice.actions;

export default tokenSlice.reducer