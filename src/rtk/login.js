import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const logiDetail = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery,
    tagTypes: ["babu"], 

    endpoints: (builder) => ({
        loginApi: builder.mutation({
            query: (data) => ({
                url: "/employee/login",
                method: "POST",
                data,
                credentials: "include",
            }),
            // invalidatesTags: ["userLogin"], 

        }), 

        isLogin: builder.query({
            query: () => ({
                url: "/employee/isLogin",
                method: "GET",
                credentials: "include",
            }),
            // providesTags: ["userLogin"],
        }),
        isLogout:builder.mutation({
            query:()=>({
                url:"/employee/logout",
                method:"POST",
                credentials:"include",
            })  
        })
    }),
    
});

export const {useLoginApiMutation,useIsLoginQuery,useIsLogoutMutation} = logiDetail;

