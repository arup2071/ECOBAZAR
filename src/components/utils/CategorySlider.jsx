import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";
const CategorySlider = () => {
  const category = useSelector((state) => state.category);
  console.log(category);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {category?.map((item, index) => (
        <SwiperSlide>
          <CategoryCard url={item.slug} title={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
