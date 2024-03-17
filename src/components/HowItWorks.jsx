import React from "react";
import IconCard from "./IconCard";
import NavButton from "./NavButton";
import { GrDocumentText } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { PiHandshakeFill, PiCookingPotBold } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <ul>
        <li>
          <IconCard
            icon={<GrDocumentText />}
            title={"Step 1 - Complete & Submit Form"}
          />
        </li>
        <li>
          <IconCard
            icon={<FiPhoneCall />}
            title={"Step 2 - Phone Appointment With Chef"}
          />
        </li>
        <li>
          <IconCard
            icon={<PiHandshakeFill />}
            title={"Step 3 - Personal Consultation With Chef"}
          />
        </li>
        <li>
          <IconCard
            icon={<AiOutlineDollar />}
            title={"Step 4 - Pay Deposit To Lock It In"}
          />
        </li>
        <li>
          <IconCard
            icon={<RiShoppingBasket2Line />}
            title={"Step 5 - Chef Goes Shopping"}
          />
        </li>
        <li>
          <IconCard
            icon={<PiCookingPotBold />}
            title={"Step 6 - Chef Cooks & Cleans"}
          />
        </li>
        <li>
          <IconCard
            icon={<GiForkKnifeSpoon />}
            title={"Step 7 - Enjoy Your Meal"}
          />
        </li>
        <li>
          <IconCard
            icon={<AiOutlineDollar />}
            title={"Step 8 - Pay Remaining Balance"}
          />
        </li>
      </ul>
      <NavButton route={"/booking"} title={"Get Started"} />
    </section>
  );
};

export default HowItWorks;
