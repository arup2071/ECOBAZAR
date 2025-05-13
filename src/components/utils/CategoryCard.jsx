import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, url = "" }) => {
  return (
    <div className="bg-white pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-5 md:pb-6 text-center w-full sm:max-w-[180px] md:max-w-[200px] rounded-md border border-gray-300 hover:border-branding-success-dark hover:border-3 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] block transition-all">
      <Link>
        <img
          src="/images/CategoryIcon1.png"
          alt=""
          className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />
        <h4 className="mt-3 sm:mt-4 md:mt-5 mb-1 sm:mb-1.5 text-center text-branding-success-dark text-sm sm:text-[15px] md:text-[16px] font-medium leading-relaxed">
          {title}
        </h4>
        <p className="text-gray-500 text-xs sm:text-sm leading-tight">
          165 Products
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
