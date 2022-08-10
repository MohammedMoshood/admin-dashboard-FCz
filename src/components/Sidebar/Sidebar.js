import React from "react";
import { SideBarData } from "./SidebarData";
import MenuItem from "./MenuItem";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SideBarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SideBarWrapper>
          <Icon>
            <CloseIcon onClick={toggle} />
          </Icon>

          {SideBarData.map((item, index) => {
            return <MenuItem toggle={toggle} item={item} key={index} />;
          })}
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
