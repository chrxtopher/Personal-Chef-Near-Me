import React from "react";
import videoBg from "../resources/videos/cooking-bg.mp4";

const Home = () => {
  return (
    <div className="page">
      <section className="title-section">
        <video src={videoBg} autoPlay loop muted />
        <div className="title-cover"></div>
        <div className="title-content">
          <h1>Your Personal Chef of Phoenix, AZ</h1>
          <p>Bringing the delicacies of the kitchen to your home and table</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
