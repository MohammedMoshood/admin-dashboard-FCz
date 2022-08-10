import "./App.css";
import React from "react";
import Overview from "../src/pages/Overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";


import Transactions from "../src/pages/Transactions";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
