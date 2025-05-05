import React from "react";
import PageTitleImage from "../components/PageTitleImage";
import DuoImage from "../components/DuoImage";
import HowItWorks from "../components/HowItWorks";
import mealPrep1 from "../assets/photos/mealPrep_1.png";
import mealPrep2 from "../assets/photos/mealPrep_2.png";
import mealPrep3 from "../assets/photos/mealPrep_3.png";
import mealPrep4 from "../assets/photos/mealPrep_4.png";
import MEAL_PREP_MENU from "../assets/photos/MEAL_PREP_MENU.png";
import NavButton from "../components/NavButton";

const MealPrep = () => {
  return (
    <div className="page">
      <PageTitleImage
        asset={mealPrep4}
        altText={"meal prep"}
        title={"Meal Prep"}
        subTitle={
          "Say goodbye to the hassle of planning, shopping, and cooking – I'm here to handle it all for you."
        }
      />
      <section className="page-info">
        <h2>Convenience At Its Finest</h2>
        <p>
          Experience the convenience of having healthy, gourmet meals prepared
          and delivered directly to your doorstep. With our meal prep service,
          you'll save time, eat well, and enjoy the peace of mind that comes
          with knowing your meals are expertly crafted with your health and
          satisfaction in mind.
        </p>
        <p>
          Say goodbye to the hassle of planning, shopping, and cooking - I'm
          here to handle it all for you. Take the first step towards simplifying
          your life and enjoying delicious, chef-prepared meals every day. Reach
          out today to learn more about my meal prep options and start your
          journey towards a healthier, more convenient lifestyle.
        </p>
        <NavButton route={"/booking"} title={"Get Started"} />
      </section>
      <DuoImage asset1={mealPrep1} asset2={mealPrep4} />
      <section className="page-info">
        <h2>Components of Your Experience</h2>
        <p>
          There are some things to consider that will be important for your meal
          prep.
        </p>
        <div className="dining-components">
          <div>
            <h3>1. Meals Per Week</h3>
            <p>I will create the number of meals desired per week.</p>
          </div>
          <div>
            <h3>2. Calories & Macros</h3>
            <p>
              I can follow any diet or particular macro count. This will need to
              be provided by you in advance.
            </p>
          </div>
          <div>
            <h3>3. Allergy Concerns</h3>
            <p>
              Allergies and ingredient specifications will always be taken into
              consideration.
            </p>
          </div>
        </div>
        <hr />
      </section>
      <section className="page-info menu">
        <h2>Choosing Your Menu</h2>
        <p>
          My goal is to craft a diverse array of meals that continuously please
          your palate. I am equipped to accommodate any dietary preferences or
          restrictions you may have. If you have specific calorie and/or
          macronutrient targets you're aiming for, please share those details
          with me when booking your service.
        </p>
        <p>
          Below is a menu I have curated from experience and previous clients.
          You can choose meals directly from here, make adjustments, or
          disregard it entirely. The choice is completely up to you.
        </p>
        <img
          src={MEAL_PREP_MENU}
          alt="Personal Chef Near Me base meal prep menu."
          className="meal-prep-menu"
        />
        <hr />
      </section>
      <HowItWorks />
      <DuoImage asset1={mealPrep2} asset2={mealPrep3} />
    </div>
  );
};

export default MealPrep;
