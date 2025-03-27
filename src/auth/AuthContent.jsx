import React from 'react'
import { Navigate, Outlet, useLoaderData } from 'react-router-dom';
import { useIsLoginQuery } from '../rtk/login';
import { useGetAllEmployeeQuery } from '../rtk/employeeApi';
let isLogin=false;
export default function AuthContent() {
     const {data,isLoading,error}=useIsLoginQuery()

    //  console.log("jitendra+++",data);

   return data?<Outlet/>:<Navigate to="/login"/>

}
