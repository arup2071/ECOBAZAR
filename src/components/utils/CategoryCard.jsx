import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({title,url = ''}) => {
  return (
    <div className="bg-white pt-8 pb-6 text-center max-w-[200px] rounded-md border border-gray-300 hover:border-branding-success-dark hover:border-3 hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] block  transition-all">
      <Link>
        <img
          src="/images/CategoryIcon1.png"
          alt=""
          className="mx-auto"
        />
        <h4 className="mt-5 mb-1.5 text-center  text-branding-success-dark text-[16px] font-medium leading-relaxed">
          {title}
        </h4>
        <p className=" text-gray-500 text-sm leading-tight">
          165 Products
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
