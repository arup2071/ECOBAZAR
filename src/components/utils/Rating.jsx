import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ count }) => {
   
  return (
    <div className="rating flex text-xs text-gray-200">
      {[...Array(Math.round(count))].map((hellow, i) => (
        <span key={i} className="text-branding-error">
            <FaStar />
        </span>
      ))}
      {[...Array(5 - Math.round(count) )].map((hellow, i) => (
        <span key={i}>
            <FaStar />
        </span>
      ))}
    </div>
  );
};

export default Rating;
