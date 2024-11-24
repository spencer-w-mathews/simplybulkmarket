import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import NavName from "../NavName.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <img src={NavName} alt="simply bulk market" height={30}/>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem href="#/home" onClick={toggleMenu}>Home</MenuItem>
        <MenuItem href="#/location" onClick={toggleMenu}> Location</MenuItem>
        <MenuItem href="#/about" onClick={toggleMenu}>About Us</MenuItem>
        <MenuItem href="#/faq" onClick={toggleMenu}>FAQ</MenuItem>
        <MenuItem href="#/tour" onClick={toggleMenu}> Tour</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 0rem;
  background: #f4f4f4;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 92%;
    background: #f4f4f4;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const MenuItem = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: #2a6f42;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    text-align: center;
  }
`;
