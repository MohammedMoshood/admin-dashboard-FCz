import React from "react";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import {BsCircle} from "react-icons/bs"
import {
  MenuIcon,
  Nav,
  NavIcons,
  NavigationContainer,
  NavItem,
  NavMenu,
  ProfileIcon,
  Profilename,
 Item
} from "./NavbarElements";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavigationContainer>
          <MenuIcon>
            <FaBars onClick={toggle}/>
          </MenuIcon>
          <NavMenu>
            <NavItem style={{ borderRight: "4px solid lightgrey" , justifyContent: "flex-start" , paddingRight:20 }}>
              <NavIcons>
                <BiSearch />
              </NavIcons>
              <NavIcons>
                <IoMdNotifications />
              </NavIcons>
            </NavItem>
            <NavItem style={{width:300  , height : 100}}>
              <Item>
                <Profilename> @{"Mmoshood"}</Profilename>
              </Item>
              <Item style={{color:"lightgrey", fontSize:"4rem" , paddingTop:10 }}>
                <ProfileIcon>
                  <BsCircle/>
                </ProfileIcon>
              </Item>
            </NavItem>
          </NavMenu>
        </NavigationContainer>
      </Nav>
    </>
  );
};

export default Navbar;
