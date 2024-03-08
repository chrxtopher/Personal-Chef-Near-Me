import React from "react";
import PageTitleVideo from "../components/PageTitleVideo";
import videoBg from "../assets/videos/cooking-bg.mp4";
import IconCard from "../components/IconCard";
import ChefChris from "../components/ChefChris";
import { GrDocumentText } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { PiHandshakeFill, PiCookingPotBold } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";

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
      <section className="page-info">
        <h2>Placeholder Title</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptatem omnis atque inventore, commodi nesciunt a rem id et
          eligendi ipsum molestias! Aspernatur ratione id soluta molestiae harum
          libero beatae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ut
          omnis quidem quis dolor, accusamus eligendi esse, nam cumque numquam
          incidunt animi doloremque nesciunt nostrum, magnam distinctio laborum
          rerum officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis
          nisi odio excepturi ipsa ducimus dicta voluptatem commodi! Doloremque
          maiores eaque quidem dignissimos in iure ex exercitationem distinctio,
          eos mollitia.
        </p>
        <hr />
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ul>
          <li>
            <IconCard
              icon={<GrDocumentText />}
              title={"Step 1 - Complete Form For Requested Service"}
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
              title={"Step 3 - Confirm Date & Customize Menu"}
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic et
          rerum, perspiciatis, tempore laboriosam, nostrum nisi rem non iste ex
          quisquam. Necessitatibus magnam labore voluptate assumenda officiis
          impedit atque. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.
        </p>
      </section>
      <section className="page-info">
        <hr />
        <ChefChris />
        <hr />
      </section>
    </div>
  );
};

export default Home;
