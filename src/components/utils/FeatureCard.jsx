import React from "react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,

}) => {
  return (
    <div className="text-center border-b-4 border-transparent transition-all duration-300 group hover:shadow-[inset_0px_-4px_0px_0px_rgba(0,178,7,1.00)] shadow-[inset_0px_-0.5px_0px_0px_rgba(204,204,204,1.00)] gap-6 z-0">
      <div className="relative flex items-center justify-center w-18 h-18 mx-auto mt-10 mb-4 transition-all duration-300 p-4">
        <img
          src="/public/images/featureIconBg.png"
          className="absolute opacity-30 w-full h-full transition-colors duration-300 group-hover:opacity-100"
          alt=""
        />
        <Icon
          className="relative z-10 text-green-600 transition-colors duration-300 group-hover:text-white"
          size={28}
        />
      </div>

      <h3 className="font-semibold text-lg leading-[150%] text-center text-gray-900 pb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm pb-10 ">{description}</p>
    </div>
  );
};

export default FeatureCard;
