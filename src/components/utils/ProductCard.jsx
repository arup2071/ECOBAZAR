import React from "react";
import { FiShoppingBag, FiHeart, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard group border border-gray-200 hover:border-green-500 rounded-lg overflow-hidden transition-all duration-300 relative  hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] bg-white">
      <div className="productThumb relative">
        <Link>
          <p className="bg-branding-error text-white py-[3px] px-2 inline-block rounded-sm top-4 left-4 absolute text-sm">
            Save {product.discountPercentage}%
          </p>
          <img
            src={product.thumbnail}
            className="max-w-full mx-auto bg-white"
            alt={product.title}
          />
        </Link>

        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <button className="translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-100 bg-white p-2 rounded-full shadow hover:bg-green-100">
            <FiHeart className="text-gray-700" />
          </button>
          <button className="translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-200 bg-white p-2 rounded-full shadow hover:bg-green-100">
            <FiEye className="text-gray-700" />
          </button>
        </div>
      </div>

      <div className="productCnt p-4 relative">
        <Link className="text-neutral-600 text-sm leading-tight block mb-1">
          {product.title}
        </Link>
        <p className="text-zinc-900 text-base font-medium leading-normal">
          {(
            product.price -
            Math.round(product.price * (product.discountPercentage / 100))
          ).toFixed(2)}
          $
          <del className="text-neutral-400 text-base ml-2">
            {product.price}$
          </del>
        </p>
        <Rating count={product.rating} />
        <Link className="absolute top-1/2 right-5 transform -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full transition bg-gray-100 group-hover:bg-green-500 text-gray-700 group-hover:text-white duration-300 ease-in-out">
          <FiShoppingBag />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
