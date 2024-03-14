import React from "react";
import PageTitleImage from "../components/PageTitleImage";
import ChefChris from "../components/ChefChris";
import placeholderImg from "../assets/photos/img-placeholder.png";

const About = () => {
  return (
    <div className="page">
      <PageTitleImage
        asset={placeholderImg}
        altText={"place holder image"}
        title={"Christopher Smith"}
        subTitle={""}
      />
      <div className="about-chef-chris">
        <ChefChris />
        <hr />
        <h2>Meet Chef Chris</h2>
        <p>
          Having been born in Providence, Rhode Island in 1991, I often found
          myself drawn to the bustling local fish and meat markets on Federal
          Hill. The enticing aroma of fresh meats and seafood mingled with the
          lively atmosphere of people bustling about in search of the finest
          produce never failed to capture my attention. As a naturally curious
          child, I eagerly asked questions and absorbed knowledge about the
          various offerings, from branzino and trout to salmon and beyond.
        </p>
        <p>
          During my upbringing, I stood out as the sole cook in my family,
          igniting my passion for culinary arts out of necessity. At the age of
          15, our planned relocation to Phoenix, Arizona turned out to be a
          pivotal decision. Enrolling in high school brought me to the East
          Valley Institute of Technology, where I delved into culinary and
          baking arts classes. Under the guidance of Chef Michael Turcotte, I
          immersed myself in the culinary world, honing skills that I aspired to
          bring back to enrich the dining experiences in homes across the
          valley.
        </p>
        <p>
          And that's how we arrived here. Now, my aim is to leverage these
          skills and experiences to bring the comfort of fine dining right to
          your doorstep. It's true that not all meals are created equal. Yet,
          you don't have to venture to a fancy hotel or restaurant to savor a
          gourmet meal bursting with incredible flavors and flair. Let PCNM
          alleviate the hassle of cooking from your dinner parties, date nights,
          or even everyday meals. With my services, I guarantee that quality and
          standards will be maintained, allowing you to relish your precious
          leisure time with guests and cherished family members.
        </p>
        <hr />
      </div>
    </div>
  );
};

export default About;
