import React from "react";
import "../styles/iconCard.css";

const IconCard = ({ icon, title }) => {
  return (
    <div className="icon-card">
      <h3>{icon}</h3>
      <p>{title}</p>
    </div>
  );
};

export default IconCard;
