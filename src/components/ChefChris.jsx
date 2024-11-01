import React from "react";
import "../styles/chefChris.css";
import headshot from "../assets/photos/chris_headshot.png";

const ChefChris = () => {
  return (
    <div className="chef-chris">
      <img src={headshot} alt="Chef Chris smiling, wearing clear glasses." />
      <div>
        <h2>Chef Chris</h2>
        <p>
          "Cooking is all about people. Food is maybe the only universal thing
          that really has the power to bring everyone together. No matter what
          culture, everywhere around the world, people get together to eat." -
          Guy Fieri
        </p>
      </div>
    </div>
  );
};

export default ChefChris;
