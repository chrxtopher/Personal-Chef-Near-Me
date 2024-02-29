import React from "react";
import { Link, Outlet } from "react-router-dom";
import pcnmLogo from "../resources/PCNM_LOGO.png";
import "../styles/navbar.css";

const NavBar = () => {
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
            <Link to={"/privateevents"}>SERVICES</Link>
          </li>
          <li>
            <Link to={"/faq"}>FAQ</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
