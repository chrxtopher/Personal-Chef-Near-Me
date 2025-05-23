import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonPrev = ({ btnTitle = "Previous", handler = () => {} }) => {
  const swiper = useSwiper();

  return (
    <button
      className="swiper-btn prev-btn"
      type="button"
      onClick={() => {
        handler();
        swiper.slidePrev();
      }}
    >
      {btnTitle}
    </button>
  );
};

export default SwiperButtonPrev;
