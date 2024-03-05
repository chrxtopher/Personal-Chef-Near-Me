import React from "react";
import PageTitleImage from "../components/PageTitleImage";
import placeholderImg from "../assets/photos/img-placeholder.png";

const About = () => {
  return (
    <div className="page">
      <PageTitleImage
        asset={placeholderImg}
        altText={"place holder image"}
        title={"title"}
        subTitle={"this is a placeholder subTitle"}
      />
    </div>
  );
};

export default About;
