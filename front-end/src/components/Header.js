import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1A2130;  // Dark Background
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #83B4FF;  // Primary Color
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #FDFFE2;  // Light Background Color
  text-decoration: none;
  font-size: 1em;
  &:hover {
    color: #83B4FF;  // Primary Color
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Card Collection</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        <NavLink to="/collection">My Collection</NavLink>
        <NavLink to="/games">Games</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;