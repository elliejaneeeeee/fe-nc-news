import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Logo Here</NavLink>
      </li>
      <li>
        <NavLink to="/">Sign In</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
