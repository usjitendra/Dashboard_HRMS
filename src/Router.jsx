import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import {
  Dashboard,
  Team,
  Invoices,
  Contacts,
  Form,
  Bar,
  Line,
  Pie,
  FAQ,
  Geography,
  Calendar,
  Stream,
  Login,
  EmployeeAdd,
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
            <Route path="/team" element={<Team />} />
            {/* <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/geography" element={<Geography />}/>
          
          {/* Login */}
            <Route path="/employee" element={<EmployeeAdd />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
