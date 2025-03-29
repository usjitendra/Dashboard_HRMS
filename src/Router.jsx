import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import {
  Dashboard,
  Login,
  EmployeeAdd,
  TableData,
  Attendance,
  EmployeeView
} from "./scenes";
import AuthContent from "./auth/AuthContent";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthContent/>}>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<TableData />} />
            <Route path="/employee" element={<EmployeeAdd />} />
            <Route path='/attendence' element={<Attendance/>}></Route>
            <Route path='/view/employee' element={<EmployeeView/>}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
