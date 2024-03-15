import React from "react";
import PageTitleVideo from "../components/PageTitleVideo";
import videoBg from "../assets/videos/cooking-bg.mp4";
import HowItWorks from "../components/HowItWorks";
import ChefChris from "../components/ChefChris";
import DuoImage from "../components/DuoImage";
import entree1 from "../assets/photos/entree_1.png";
import entree3 from "../assets/photos/entree_3.jpeg";
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
      </section>
      <DuoImage asset1={entree1} asset2={entree3} />
      <HowItWorks />
      <section className="page-info">
        <hr />
        <ChefChris />
      </section>
    </div>
  );
};

export default Home;
