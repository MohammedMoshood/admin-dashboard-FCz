import "./App.css";
import React from "react";
import Overview from "../src/pages/Overview";
import {  Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

import Transactions from "../src/pages/Transactions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path="/overview" element={<Overview />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
