import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  return (
    <ul aria-label="navigation menu" className="nav-bar">
      <li>
        <NavLink to="/">
          <img alt="The HiveMind Hub logo" src="Logo.png" />
        </NavLink>
      </li>
      {currentUser === "" ? (
        <li>
          <NavLink to="/sign-in" className="nav-sign-in">
            Sign In
          </NavLink>
        </li>
      ) : null}
      {currentUser !== "" ? <img src="https://i.pravatar.cc/48" /> : null}
    </ul>
  );
};

export default NavBar;
