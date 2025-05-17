import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchProductCard = ({ product, onSelect }) => {
  return (
    <div className="productCard">
      <Link
        to={`/product/${product.id}`}
        onClick={onSelect}
        className="grid lg:grid-cols-2 place-items-center gap-5 bg-white shadow p-4 rounded hover:shadow-md transition"
      >
        <div className="productImage lg:col-span-1">
          <img
            className="w-full rounded"
            src={product?.images[0]}
            alt={product.title}
          />
        </div>
        <div className="productDetails lg:col-span-3">
          <h4 className="text-lg font-semibold">{product.title}</h4>
          <p className="text-sm text-gray-700">${product.price}</p>
          <p className="text-sm flex items-center gap-2 text-yellow-600">
            <FaStar /> {product.rating}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SearchProductCard;
