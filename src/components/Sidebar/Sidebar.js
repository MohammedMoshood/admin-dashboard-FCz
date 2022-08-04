import React  from 'react'
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SidebarElements";

const Sidebar = ({isOpen , toggle}) => {
  return (
    <>
      <SidebarContainer  isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to="overview">Overview</SideBarLink>
            <SideBarLink to="transactions">Transactions</SideBarLink>
            <SideBarLink to="loans">Loans</SideBarLink>
            <SideBarLink to="savings">Savings</SideBarLink>
            <SideBarLink to="investments">Investments</SideBarLink>
            <SideBarLink to="accounts">Accounts</SideBarLink>
            <SideBarLink to="campaigns">Campaigns</SideBarLink>
            <SideBarLink to="utility">Utility</SideBarLink>
            <SideBarLink to="billings">Billings</SideBarLink>
            <SideBarLink to="wallet">Wallet</SideBarLink>
            <SideBarLink to="setings">Settings</SideBarLink>
          </SideBarMenu>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar