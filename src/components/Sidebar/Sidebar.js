import React from "react";
import { SideBarData } from "./SidebarData";
import MenuItem from "./MenuItem";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SideBarWrapper,
  SideBarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>{SideBarData.map((item , index)=> {
            return <MenuItem item={item} key={index} />;
          })}</SideBarMenu>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
