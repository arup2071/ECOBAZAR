import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  return (
    <div className=" lg:h-[640px] bannerBg bg-gren-gray-scale-50 lg:mb-10 mb-8 ">
      <div className="container grid lg:grid-cols-2 h-full items-center lg:gap-[43px]">
        <div className="bannerImg">
          <img
            src="/public/images/bannerImg.png"
            className="w-full "
            alt=""
          />
        </div>
        <div className="bannerCnt px-3 lg:px-0">
          <h4 className="font-medium text-sm leading-full tracking-[0.02em] uppercase text-branding-success ">
            Welcome to shopery
          </h4>
          <h2 className="font-semibold text-4xl lg:text-[72px] leading-[120%] text-gray-900 lg:mt-2 lg:mb-7">
            Fresh & Healthy Organic Food
          </h2>
          <h3 className="font-normal text-[32px] leading-[120%] text-gray-900 lg:mb-3 mb-2">
            Sale up to{" "}
            <span className="discount font-semibold text-branding-warning">
              30% OFF
            </span>
          </h3>
          <p className="text-sm leading-[150%] text-gray-500 lg:mb-[30px] mb-[10px]">
            Free Shipping on all your order. we deliver, you enjoy
          </p>
          <Link className="btn lg:mt-8 lg:mb-0 mb-8 lg:gap-2 gap-1 flex place-items-center" to="/">
            Shop Now <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
