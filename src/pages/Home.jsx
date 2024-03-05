import React from "react";
import PageTitleVideo from "../components/PageTitleVideo";
import videoBg from "../assets/videos/cooking-bg.mp4";

const Home = () => {
  return (
    <div className="page">
      <PageTitleVideo
        asset={videoBg}
        title={"Christopher Smith - Personal Chef"}
        subTitle={
          "An accomplished and fervent chef, proudly rooted in Phoenix, AZ, dedicated to delivering culinary excellence straight to your home and table."
        }
      />
    </div>
  );
};

export default Home;
