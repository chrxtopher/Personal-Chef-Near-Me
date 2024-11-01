import React from "react";
import "../styles/pageTitle.css";

const PageTitleVideo = ({ asset, title, subTitle }) => {
  return (
    <section className="title-section">
      <video src={asset} autoPlay playsInline loop muted />
      <div className="title-cover"></div>
      <div className="title-content">
        <div>
          <h1>{title}</h1>
          <h2>{"Personal Chef"}</h2>
        </div>
        <hr />
        <p>{subTitle}</p>
      </div>
    </section>
  );
};

export default PageTitleVideo;
