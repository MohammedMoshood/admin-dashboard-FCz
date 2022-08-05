import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideIcon,
  SideText,
} from "./SidebarElements";
import { FaChartPie } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to="overview">
              <SideIcon>
                <FaChartPie />
              </SideIcon>
              <SideText>Overview</SideText>
            </SideBarLink>
            <SideBarLink to="transactions">
              <SideIcon>
                <FaMoneyBill />
              </SideIcon>
              <SideText> Transactions</SideText>
            </SideBarLink>
            <SideBarLink to="loans">
              <SideIcon>
                <FaLightbulb />
              </SideIcon>
              <SideText>Loans</SideText>
            </SideBarLink>
            <SideBarLink to="savings">
              <SideIcon>
                <FaCreditCard />
              </SideIcon>
              <SideText>Savings</SideText>
            </SideBarLink>
            <SideBarLink to="investments">
              <SideIcon>
                <AiOutlineLineChart />
              </SideIcon>{" "}
              <SideText> Investments</SideText>
            </SideBarLink>
            <SideBarLink to="accounts">
              <SideIcon>
                <FaUsers />
              </SideIcon>
              <SideText> Accounts</SideText>
            </SideBarLink>
            <SideBarLink to="campaigns">
              <SideIcon>
                <BiEnvelope />
              </SideIcon>{" "}
              <SideText>Campaigns</SideText>
            </SideBarLink>
            <SideBarLink to="utility">
              <SideIcon>
                <BiBarChartSquare />
              </SideIcon>
              <SideText>Utility</SideText>
            </SideBarLink>
            <SideBarLink to="billings">
              <SideIcon>
                <RiBarChartHorizontalFill />
              </SideIcon>
              <SideText>Billings</SideText>
            </SideBarLink>
            <SideBarLink to="wallet">
              <SideIcon>
                <FaWallet />
              </SideIcon>
              <SideText> Wallet</SideText>
            </SideBarLink>
            <SideBarLink to="setings">
              <SideIcon>
                <IoSettingsSharp />
              </SideIcon>
              <SideText> Settings</SideText>
            </SideBarLink>
          </SideBarMenu>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
