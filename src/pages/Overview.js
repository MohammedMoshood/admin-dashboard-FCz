import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { HomeWrapper } from "../components/1 StaticHomeComponents/StaticHomeElements";
import OverViewText from "../components/1 StaticHomeComponents/OverViewText";
import StatusSection from "../components/Overview/StatusSection/StatusSection";

const Overview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <HomeWrapper>
        <Navbar toggle={toggle}></Navbar>
        <OverViewText  />
        <StatusSection></StatusSection>
      </HomeWrapper>
    </>
  );
};

export default Overview;
