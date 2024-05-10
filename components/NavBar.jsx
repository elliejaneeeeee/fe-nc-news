import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul aria-label="navigation menu" className="nav-bar">
      <li>
        <NavLink to="/"><img alt="The HiveMind Hub logo" src='public/Logo.png' /></NavLink>
      </li>
      <li>
        <NavLink to="/sign-in" className='nav-sign-in'>Sign In</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
