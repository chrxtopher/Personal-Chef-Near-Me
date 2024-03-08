import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import pcnmLogo from "../assets/photos/PCNM_LOGO.png";
import "../styles/navbar.css";
import DropDownNav from "./DropDownNav";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navLinkObjects = [
    { route: "/privateevents", btnName: "PRIVATE EVENTS" },
    { route: "/mealprep", btnName: "MEAL PREP" },
    { route: "/dinnerfortwo", btnName: "INTIMATE DINNERS" },
  ];

  const handleDropDownNav = () => {
    setOpen(!open);
  };

  const handleCloseDropDown = () => {
    setOpen(false);
  };

  return (
    <>
      <nav>
        <div className="nav-logo">
          <img src={pcnmLogo} alt="personal chef near me logo" />
          <h1>Personal Chef Near Me</h1>
        </div>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            <button className="nav-btn" onClick={handleDropDownNav}>
              SERVICES
            </button>
          </li>
        </ul>
        <DropDownNav linkObjectsArray={navLinkObjects} active={open} />
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
