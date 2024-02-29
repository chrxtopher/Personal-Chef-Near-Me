import React from "react";
import videoBg from "../resources/videos/cooking-bg.mp4";

const Home = () => {
  return (
    <div className="page">
      <section className="title-section">
        <video src={videoBg} autoPlay loop muted />
        <div className="title-cover"></div>
        <div className="title-content">
          <h1>Christopher Smith - Personal Chef</h1>
          <p>
            An accomplished and fervent chef, proudly rooted in Phoenix, AZ,
            dedicated to delivering culinary excellence straight to your home
            and table.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
