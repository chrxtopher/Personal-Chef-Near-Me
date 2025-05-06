import React, { useState } from "react";
import { Link } from "react-router-dom";
import pcnmLogo from "../assets/photos/PCNM_LOGO.png";
import "../styles/navbar.css";
import DropDownNav from "./DropDownNav";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navLinkObjects = [
    { route: "/privateevents", btnName: "PRIVATE EVENTS" },
    { route: "/mealprep", btnName: "MEAL PREP" },
  ];

  const handleDropDownNav = () => {
    setOpen(!open);
  };

  const handleCloseDropDown = () => {
    setOpen(false);
  };

  return (
    <nav>
      <div className="nav-logo">
        <img src={pcnmLogo} alt="personal chef near me logo" />
        <Link to={"/"}>
          <h1>Personal Chef Near Me</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to={"/"} onClick={handleCloseDropDown}>
            HOME
          </Link>
        </li>
        <li>
          <Link to={"/about"} onClick={handleCloseDropDown}>
            CHEF
          </Link>
        </li>
        <li>
          <button className="nav-btn" onClick={handleDropDownNav}>
            SERVICES
          </button>
        </li>
      </ul>
      <DropDownNav
        linkObjectsArray={navLinkObjects}
        active={open}
        clickHandler={handleCloseDropDown}
      />
    </nav>
  );
};

export default NavBar;
