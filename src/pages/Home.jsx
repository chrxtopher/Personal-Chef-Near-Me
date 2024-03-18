import React from "react";
import PageTitleVideo from "../components/PageTitleVideo";
import videoBg from "../assets/videos/cooking-bg.mp4";
import HowItWorks from "../components/HowItWorks";
import ChefChris from "../components/ChefChris";
import DuoImage from "../components/DuoImage";
import NavButton from "../components/NavButton";
import entree1 from "../assets/photos/entree_1.png";
import entree2 from "../assets/photos/entree_2.jpeg";
import entree3 from "../assets/photos/entree_3.jpeg";
import entree4 from "../assets/photos/entree_4.jpeg";

const Home = () => {
  return (
    <div className="page">
      <PageTitleVideo
        asset={videoBg}
        title={"Christopher Smith"}
        subTitle={
          "An accomplished and fervent chef, proudly rooted in Arizona, dedicated to delivering culinary excellence straight to your home and table."
        }
      />
      <section className="page-info">
        <h2>Private Chef Services In Phoenix, AZ</h2>
        <hr />
        <p>
          Embark on a culinary adventure with an exclusive private dining event.
          Whether you're planning an intimate date night for two or a
          sophisticated business dinner, I am dedicated to crafting a menu that
          exceeds your expectations. Immerse yourself in an atmosphere of
          elegance as you savor each dish, knowing that every element has been
          thoughtfully curated to ensure an exceptional dining experience.
        </p>
        <NavButton
          route={"/privateevents"}
          title={"Discover Your Next Dining Event"}
        />
        <p>
          Experience the ultimate solution to busy schedules and hectic
          lifestyles with my convenient meal prep service. Say goodbye to the
          stress of meal planning, grocery shopping, and cooking, and hello to
          delicious, chef-crafted meals. Whether you're a health-conscious
          individual, a busy professional, or simply seeking convenience without
          sacrificing taste, I can deliver a wide variety of nutritious and
          flavorful options to suit your needs. From wholesome breakfasts to
          satisfying lunches and delectable dinners, each meal is expertly
          prepared.
        </p>
        <NavButton route={"/mealprep"} title={"Learn More About Meal Prep"} />
      </section>
      <DuoImage asset1={entree1} asset2={entree3} />
      <DuoImage asset1={entree2} asset2={entree4} />
      <HowItWorks />
      <section className="page-info">
        <hr />
        <ChefChris />
      </section>
    </div>
  );
};

export default Home;
