import React from "react";
import { Link } from "react-router-dom";
import "../styles/dropDownNav.css";

const DropDownNav = ({ linkObjectsArray, active, clickHandler }) => {
  return (
    <div className={`drop-down-nav ${active ? "active" : "inactive"}`}>
      <ul>
        {linkObjectsArray.map((linkObj) => {
          return (
            <li>
              <Link
                to={`${linkObj.route}`}
                onClick={clickHandler}
              >{`${linkObj.btnName}`}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDownNav;
