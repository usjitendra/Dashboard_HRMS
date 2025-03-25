import { configureStore } from "@reduxjs/toolkit";
import { employeeDetailApi } from "./employeeApi";
import {logiDetail} from "./login"

export const store = configureStore({
    reducer: {
        [employeeDetailApi.reducerPath]: employeeDetailApi.reducer,
        [logiDetail.reducerPath]:logiDetail.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(employeeDetailApi.middleware,logiDetail.middleware),
        
});
