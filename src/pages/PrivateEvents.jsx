import React from "react";
import PageTitleImage from "../components/PageTitleImage";
import DuoImage from "../components/DuoImage";
import HowItWorks from "../components/HowItWorks";
import entree1 from "../assets/photos/entree_1.png";
import entree2 from "../assets/photos/entree_2.jpeg";
import entree3 from "../assets/photos/entree_3.jpeg";
import entree4 from "../assets/photos/entree_4.jpeg";
import PCNM_MENU from "../assets/photos/PCNM_Menu.png";
import NavButton from "../components/NavButton";

const PrivateEvents = () => {
  return (
    <div className="page">
      <PageTitleImage
        asset={entree1}
        altText={"entree"}
        title={"Private Events"}
        subTitle={"Date Nights, Family Gatherings, And Business Meetings"}
      />
      <section className="page-info">
        <h2>Exquisite Dining Experiences</h2>
        <p>
          Indulge in an exclusive culinary journey tailored just for you.
          Elevate your dining experience with a private dining event, where
          every detail is meticulously crafted to exceed your expectations.
        </p>
        <p>
          From romantic date nights to important business gatherings, my private
          dining events offer the perfect setting for creating unforgettable
          memories. Relax and enjoy the company of your guests while I take care
          of every culinary detail, ensuring an unforgettable dining experience
          from start to finish.
        </p>
        <NavButton route={"/booking"} title={"Book A Dining Event"} />
      </section>
      <DuoImage asset1={entree1} asset2={entree3} />
      <section className="page-info">
        <h2>Components of Your Experience</h2>
        <p>
          There are some things to consider that will be important for your
          dining experience.
        </p>
        <div className="dining-components">
          <div>
            <h3>1. Party Size</h3>
            <p>
              The amount of guests will directly effect the cost of groceries.
            </p>
          </div>
          <div>
            <h3>2. Menu Items</h3>
            <p>
              Number of courses and dish complexity will largely determine the
              price and length of your event.
            </p>
          </div>
          <div>
            <h3>3. Allergy Concerns</h3>
            <p>
              Allergies and ingredient specifications need to be allocated for
              each guest.
            </p>
          </div>
        </div>
        <hr />
      </section>
      <section className="page-info menu">
        <h2>Choosing Your Menu</h2>
        <p>
          I want to make the night magical, so your menu can be completely
          customized during your phone meeting and consultation. Pricing will be
          based on how many courses are served, complexity of each plate, as
          well as the number of guests.
        </p>
        <p>
          Below is a menu I have curated from experience and past events. We can
          follow this menu precisely, make adjustments, or disregard it
          entirely. The choice is completely up to you.
        </p>
        <img src={PCNM_MENU} alt="Personal Chef Near Me base menu." />
      </section>
      <HowItWorks />
      <DuoImage asset1={entree2} asset2={entree4} />
    </div>
  );
};

export default PrivateEvents;
