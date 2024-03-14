import React from "react";
import PageTitleImage from "../components/PageTitleImage";
import DuoImage from "../components/DuoImage";
import HowItWorks from "../components/HowItWorks";
import entree1 from "../assets/photos/entree_1.png";
import entree3 from "../assets/photos/entree_3.jpeg";
import PCNM_MENU from "../assets/photos/PCNM_Menu.png";

const PrivateEvents = () => {
  return (
    <div className="page">
      <PageTitleImage
        asset={entree1}
        altText={"entree"}
        title={"Dining Events"}
        subTitle={""}
      />
      <section className="page-info">
        <h2>Dining Events With Your Friends, Family, & Co-workers</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptatem omnis atque inventore, commodi nesciunt a rem id et
          eligendi ipsum molestias! Aspernatur ratione id soluta molestiae harum
          libero beatae! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Dicta ut omnis quidem quis dolor, accusamus eligendi esse, nam
          cumque numquam incidunt animi doloremque nesciunt nostrum, magnam
          distinctio laborum rerum officiis!
        </p>
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
              Number of courses and protein choices will largely determine the
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
      <HowItWorks />
      <section className="page-info menu">
        <hr />
        <h2>Choosing Your Menu</h2>
        <p>
          I want to make the night magical, so your menu can be completely
          customized during your phone meeting and consultation. Pricing will be
          based how many courses are served, ingredients of each plate, as well
          as the number of guests.
        </p>
        <p>
          Below is a menu I have curated from experience and past events. We can
          follow this menu precisely, make adjustments, or disregard it
          entirely. The choice is completely up to you.
        </p>
        <img src={PCNM_MENU} alt="Personal Chef Near Me base menu." />
        <hr />
      </section>
    </div>
  );
};

export default PrivateEvents;
