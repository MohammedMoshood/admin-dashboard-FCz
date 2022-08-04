import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  top: 0;
  position: relative;
  top: 0;
  z-index: 1;
  background: #fafeff;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  width: 100%;
  padding: 24px 24px;
  max-width: 1920px;
`;
export const MenuIcon = styled.div`
  align-items: center;
  width: 24px;
  color: lightgrey;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  height: 24px;

  &:hover {
    transition: 0.2s all ease-in-out;
    color: #65bf76;
  }
`;
export const NavMenu = styled.div`
width: 17%;
display: flex;
align-items: center;
`;
export const NavItem = styled.div`
display: flex;
font-size: 2rem;
height:60px ;
align-items: center;
width: 120px;
`;
export const NavIcons = styled.div`
  color: lightgrey;
  padding-left: 18px;
  cursor: pointer;
  &:hover {
    transition: 0.2s all ease-in-out;
    color: #65bf76;
  }
`;
export const Item = styled.div`
width: 100%;
padding-left:20px;
align-items: center;
justify-content: center;

`;
export const Profilename = styled.h6`
font-weight: 100;
`;
export const ProfileIcon = styled.div`
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

`;
