import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./imageslider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function ImageSlider({ imgs }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imgs.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={d} alt="img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
