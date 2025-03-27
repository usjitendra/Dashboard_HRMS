import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const employeeDetailApi = createApi({
    reducerPath: "employee",
    baseQuery: axiosBaseQuery,
    tagTypes: ["employee"], 

    endpoints: (builder) => ({
        getAllEmployee: builder.query({
            query: () => ({
                url: "/employee/all",
                method: "GET",
            }),
            providesTags: ["employee"], 
        }), 

        addEmployee:builder.mutation({
            query:(formData)=>({
                url:"employee/add",
                method:"POST",
                data:formData,

            }),
            invalidatesTags:["employee"],
        }),
        deleteEmployee:builder.mutation({
            query:(id)=>({
               url:`employee/delete/${id}`,
               method:"DELETE",
            }),
            invalidatesTags:["employee"],
         }) ,
          employeeEdit:builder.mutation({
            query:({id,data})=>({
                url:`employee/update/${id}`,
                method:"PUT",
                data
            }),
            invalidatesTags:["employee"],
        }),
          
    }),
});

export const {useGetAllEmployeeQuery,useAddEmployeeMutation,useDeleteEmployeeMutation,useEmployeeEditMutation} = employeeDetailApi;
