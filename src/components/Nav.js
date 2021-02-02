import React from "react";
import {Navbar, NavbarBrand} from 'react-bootstrap'
import './Nav.css'

const Nav = () => {
  return (
    <>
      <Navbar bg="dark">
        <NavbarBrand href="#home">
          <img className='tools-icon' src={'https://cdn.onlinewebfonts.com/svg/img_400713.png'}/>
          <span className='header-title'>Comtools Store</span>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default Nav;
