import React from "react";
import "../styles/duoImage.css";

const DuoImage = ({ asset1, asset2 }) => {
  return (
    <section className="duo-image">
      <img src={asset1} alt="asset 1" />
      <img src={asset2} alt="asset 2" />
    </section>
  );
};

export default DuoImage;
