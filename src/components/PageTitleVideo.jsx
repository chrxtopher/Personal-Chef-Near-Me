import React from "react";
import "../styles/pageTitle.css";

const PageTitleVideo = ({ asset, title, description }) => {
  return (
    <section className="title-section">
      <video src={asset} autoPlay loop muted />
      <div className="title-cover"></div>
      <div className="title-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default PageTitleVideo;
