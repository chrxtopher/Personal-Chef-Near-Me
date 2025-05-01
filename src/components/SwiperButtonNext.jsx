import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ btnTitle = "Next" }) => {
  const swiper = useSwiper();

  return (
    <button
      className="swiper-btn"
      type="button"
      onClick={() => swiper.slideNext()}
    >
      {btnTitle}
    </button>
  );
};

export default SwiperButtonNext;
