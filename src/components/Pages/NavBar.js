import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id='navbar'>
      <img id='logo' src='https://www.liblogo.com/img-logo/ac1897m493-acme-logo-museum-ticketing-software-acme-ticketing.png'/>
      <h3>ACME Schools</h3>
      <NavLink to={'/'} style={{textDecoration: 'none'}}>
        <span class='linkName'>Home Page</span>
      </NavLink>
      <NavLink to={'/campuses'} style={{textDecoration: 'none'}}>
        <span class='linkName'>All Campuses</span>
      </NavLink>
      <NavLink to={'/students'} style={{textDecoration: 'none'}}>
        <span class='linkName'>All Students</span>
      </NavLink>
    </nav>
  );
};

export default NavBar;
