import React from "react";
import "../styles/chefChris.css";
import headshot from "../assets/photos/chris_headshot.png";

const ChefChris = () => {
  return (
    <div className="chef-chris">
      <div className="headshot">
        <img src={headshot} alt="Chef Chris smiling, wearing clear glasses." />
        <div>
          <h2>Chef Chris</h2>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos
            illum vero autem laboriosam, facere perferendis odit dignissimos,
            dolor itaque architecto quod suscipit voluptatibus reprehenderit,
            aperiam consequatur perspiciatis ab et."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefChris;
