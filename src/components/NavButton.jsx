import React from "react";
import { Link } from "react-router-dom";
import "../styles/navButton.css";

const NavButton = ({ route, title }) => {
  return (
    <Link to={route}>
      <button type="button" className="nav-button">
        {title}
      </button>
    </Link>
  );
};

export default NavButton;
