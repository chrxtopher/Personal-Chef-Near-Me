import React from "react";
import PageTitleImage from "../components/PageTitleImage";
import DuoImage from "../components/DuoImage";
import HowItWorks from "../components/HowItWorks";
import entree1 from "../assets/photos/entree_1.png";
import entree2 from "../assets/photos/entree_2.jpeg";
import entree3 from "../assets/photos/entree_3.jpeg";
import entree4 from "../assets/photos/entree_4.jpeg";
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
        <h2>Date Nights, Family Gatherings, And Business Meetings</h2>
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
      <HowItWorks />
      <section className="page-info menu">
        <hr />
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
      <DuoImage asset1={entree2} asset2={entree4} />
      <section className="page-info pricing">
        <h2>Pricing</h2>
        <p>
          A high-level desription of pricing is below. Consultation fee is $150,
          this acts as your deposit for the event. Each event has a minimum $200
          overall price. All prices will be discussed thoroughly and agreed upon
          during your phone appointment and consultation, as well as a preferred
          payment method.
        </p>
        <p>
          USD is the only accepted currency. Cash or personal checks not
          accepted.
        </p>
        <div>
          <h3>Courses:</h3>
          <p>
            Each plate for each course will determine the cost of goods. Quality
            of ingredients, preparation, and desired cooking method will set
            each plate into a complexity tier:
          </p>
          <p>Basic: $65 - $90 per plate</p>
          <p>Elevated: $100 - $130 per plate</p>
          <p>Exclusive: $130 - $165 per plate</p>
          <p>
            For example, an exclusive steak dish would be a higher quality cut,
            marinated for 24 hours ahead of time, smoked and reverse seared to
            perfection, then sliced table side with specially prepared sides.
          </p>
        </div>
        <div>
          <h3>Guests:</h3>
          <p>
            The price of each plate will be multiplied by the total number of
            guests.
          </p>
          <p>
            My events can accomodate a minimum of 2 guests and a maximum of 6.
            Please note that I will be working alone and any event that has more
            than 6 guests will require an extra chef which will result in an
            increase of $75 per hour.
          </p>
        </div>
        <div>
          <h3>Time:</h3>
          <p>
            The price of all plates and consultation fee will cover an event of
            2 hours. Events longer than 2 hours will be charged an additional
            $75 an hour.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivateEvents;
