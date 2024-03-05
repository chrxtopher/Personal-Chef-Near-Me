import React from "react";
import "../styles/pageTitle.css";

const PageTitleImage = ({ asset, altText, title, subTitle }) => {
  return (
    <section className="title-section">
      <img src={asset} alt={altText} />
      <div className="title-cover"></div>
      <div className="title-content">
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </section>
  );
};

export default PageTitleImage;
