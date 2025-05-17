import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaShoppingBag,
} from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Rating from "../components/utils/Rating";
import { SlHandbag } from "react-icons/sl";

const SingleProduct = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 mt-8">
        <div className="productSlider grid lg:grid-cols-5 gap-3">
          <div className="lg:col-span-1 col-span-5 max-w-[100vw] thumbnailSlider order-2 lg:order-1">
            <Swiper
              style={{ height: "400px" }}
              direction={"vertical"}
              breakpoints={{
                0: { direction: "horizontal" },
                768: { direction: "vertical" },
                1024: { slidesPerView: 5, spaceBetween: 50 },
              }}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {product?.images.map((thumb) => (
                <SwiperSlide key={thumb} className="p-2">
                  <img
                    className="max-w-[85px] rounded-sm opacity-70 block ms-auto"
                    src={thumb}
                    alt="product thumbnail"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lg:col-span-4 max-w-[100vw] order-1 lg:order-2">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                height: "500px",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {product?.images.map((main) => (
                <SwiperSlide key={main}>
                  <img src={main} alt="product" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="productInfo flex flex-col justify-between p-8 sm:p-4 px-2 w-full">
          {/* Title and Stock */}
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h2 className="text-3xl sm:text-2xl font-extrabold text-gray-900">{product?.title}</h2>
            <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-semibold whitespace-nowrap">{product?.availabilityStatus}</span>
          </div>
          {/* Rating, Review, SKU */}
          <div className="flex flex-wrap items-center gap-2 mb-4 text-base sm:text-sm">
            {product?.rating && <Rating count={product?.rating} />}
            <span className="text-yellow-600 font-semibold">{product?.rating}</span>
            <span className="text-gray-400 text-sm ml-2">{product?.reviews?.length || 0} Reviews</span>
            <span className="text-gray-300 mx-2 hidden sm:inline">|</span>
            <span className="text-gray-400 text-sm">SKU: {product?.sku}</span>
          </div>
          {/* Price */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-lg sm:text-base">
            <del className="text-neutral-400">${product?.price}</del>
            <span className="text-3xl sm:text-2xl font-bold text-green-700">
              ${(
                product?.price -
                Math.round(product?.price * (product?.discountPercentage / 100))
              ).toFixed(2)}
            </span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded text-xs font-semibold ml-2">
              {product?.discountPercentage}% Off
            </span>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* Brand and Share */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2 sm:gap-0">
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <span className="font-medium text-gray-700">Brand:</span>
              {product?.brand && (
                <span className="text-gray-700">{product?.brand}</span>
              )}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-500 mr-2 text-base">Share item:</span>
              {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-green-600 hover:text-white transition"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>
          <p className="text-gray-600 mb-4 text-base sm:text-sm leading-relaxed">
            {product?.description ||
              "Class aptent taciti sociosqu ad litora torquent per conubia nostra..."}
          </p>
          <hr className="my-4 border-gray-200" />
          {/* Quantity, Add to Cart, Wishlist */}
          <div className="flex items-center gap-4 sm:gap-2 mb-6 w-full flex-nowrap">
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-2 py-1">
              <Link
                onClick={handleDecrement}
                className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-2xl sm:text-base text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                -
              </Link>
              <span className="w-10 sm:w-8 text-center text-lg sm:text-base font-bold text-gray-900 select-none">
                {quantity}
              </span>
              <Link
                onClick={handleIncrement}
                className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-2xl sm:text-base text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                +
              </Link>
            </div>
            <Link className="w-auto lg:flex-1 bg-branding-success hover:bg-green-700 text-white px-8 sm:px-2 py-4 sm:py-2 rounded-full flex place-items-center justify-center gap-3 text-lg sm:text-base font-semibold transition min-w-0">
              Add to Cart <SlHandbag />
            </Link>
            <Link
              onClick={toggleFavorite}
              className={`ml-0 sm:ml-2 w-12 h-12 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-gray-200 bg-green-600/10 shadow-sm text-2xl sm:text-base transition hover:bg-green-600/10 ${
                isFavorited ? "text-red-500" : "text-green-600"
              }`}
              aria-label="Add to Wishlist"
            >
              {isFavorited ? <AiFillHeart /> : <AiOutlineHeart />}
            </Link>
          </div>
          <hr className="my-4 border-gray-200" />
          <div className="mb-2 text-base sm:text-sm">
            <span className="font-medium">Category:</span>{" "}
            {product?.category || "Vegetables"}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-base sm:text-sm">
            <span className="font-medium">Tags:</span>
            {product?.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
