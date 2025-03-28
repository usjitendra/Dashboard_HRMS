import { configureStore } from "@reduxjs/toolkit";
import { employeeDetailApi } from "./employeeApi";
import {logiDetail} from "./login"
import { attendanceDetailApi } from "./attendance";

export const store = configureStore({
    reducer: {
        [employeeDetailApi.reducerPath]: employeeDetailApi.reducer,
        [logiDetail.reducerPath]:logiDetail.reducer,
        [attendanceDetailApi.reducerPath]:attendanceDetailApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(employeeDetailApi.middleware,logiDetail.middleware,attendanceDetailApi.middleware),
        
});
