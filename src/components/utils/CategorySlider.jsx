import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const CategorySlider = () => {
  const category = useSelector((state) => state.category);
  console.log(category);

  return (
    
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        // when window width is >= 1280px
        1280: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
      className="w-full"
    >
     
      {category?.map((item, index) => (
        <SwiperSlide key={item.slug}>
          <CategoryCard url={item.slug} title={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
