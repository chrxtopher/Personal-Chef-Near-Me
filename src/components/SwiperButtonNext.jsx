import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ btnTitle = "Next", handler = () => {} }) => {
  const swiper = useSwiper();

  return (
    <button
      className="swiper-btn nxt-btn"
      type="button"
      onClick={() => {
        handler();
        swiper.slideNext();
      }}
    >
      {btnTitle}
    </button>
  );
};

export default SwiperButtonNext;
