import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const attendanceDetailApi = createApi({
  reducerPath: "attendance",
  baseQuery: axiosBaseQuery,
  tagTypes: ["attendance"],

  endpoints: (builder) => ({
    employeeCheckIn: builder.mutation({
      query: (id) => ({
        url: `employee/attendance/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["attendance"],
    }),
    employeeChekOut: builder.mutation({
      query: (id) => ({
        url: `employee/attendance/logout/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["attendance"],
    }),
  }),
});

export const { useEmployeeCheckInMutation, useEmployeeChekOutMutation } =
  attendanceDetailApi;
