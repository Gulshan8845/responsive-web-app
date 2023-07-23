
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333; 
  color: #fff; 
`;

const Logo = styled.img`
  width: 100px;
  height: 50px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const NavLink = styled.li`
  margin-left: 1rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <Logo src="/logo.png" alt="Logo" />
      </Link>
      <NavLinks>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/about">About</Link>
        </NavLink>
        <NavLink>
          <Link to="/contact">Contact</Link>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
