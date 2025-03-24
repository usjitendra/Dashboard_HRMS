import { configureStore } from "@reduxjs/toolkit";
import { employeeDetailApi } from "./employeeApi";


export const store = configureStore({
    reducer: {
        [employeeDetailApi.reducerPath]: employeeDetailApi.reducer,
       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(employeeDetailApi.middleware),
});
