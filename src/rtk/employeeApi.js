import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const employeeDetailApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery,
    tagTypes: ["employee"], // ✅ Ensure it matches invalidatesTags

    endpoints: (builder) => ({
        getAllEmployee: builder.query({
            query: () => ({
                url: "/employee/all/employee",
                method: "GET",
            }),
            providesTags: ["employee"], 
        }), 


        addTeam: builder.mutation({
            query: (formData) => {
                return {
                    url: "/doctor",
                    method: "POST",
                    data: formData, // ✅ Change from `body` to `data`
                    formData: true, // ✅ Ensure FormData is properly handled
                };
            },
            invalidatesTags: ["team"],
        }),
        
        
        

        // ✅ EDIT Test (PUT)
        editTeam: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/doctor/${id}`,
                method: "PUT",
                data: formData, // ✅ Change from `body` to `data`
                formData: true, // ✅ Ensure FormData is properly handled
            }),
            invalidatesTags: ["team"], // ✅ Cache Refresh
        }),

        // ✅ DELETE Banner (DELETE)
        deleteDoctor: builder.mutation({
            query: (id) => ({
                url: `/doctor/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["team"], // ✅ Cache Refresh
        }),



    }),
});

export const {
    useGetAllEmployeeQuery

} = employeeDetailApi;
