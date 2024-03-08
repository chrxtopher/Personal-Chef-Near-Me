import React from "react";
import PageTitleVideo from "../components/PageTitleVideo";
import videoBg from "../assets/videos/cooking-bg.mp4";

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
    </div>
  );
};

export default Home;
