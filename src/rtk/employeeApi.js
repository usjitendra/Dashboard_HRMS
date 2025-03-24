import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const employeeDetailApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery,
    tagTypes: ["employee"], 

    endpoints: (builder) => ({
        getAllEmployee: builder.query({
            query: () => ({
                url: "/employee/all/employee",
                method: "GET",
            }),
            providesTags: ["employee"], 
        }), 

        addEmployee:builder.mutation({
            query:(formData)=>({
                url:"employee/employee/registration",
                method:"POST",
                data:formData,

            }),
            invalidatesTags:["employee"],
        }),
    
    }),
});

export const {useGetAllEmployeeQuery,useAddEmployeeMutation} = employeeDetailApi;
