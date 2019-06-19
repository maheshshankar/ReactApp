import React from "react";
import { NavLink, withRouter } from "react-router-dom";

//withRouter is a higher order component which is a wrapper around to provide route details to a component outside route.
const NavBar = props => {
  //   console.log(props);
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
