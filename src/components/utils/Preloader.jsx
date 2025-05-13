import React from "react";
import Lottie from "lottie-react";
import Animation from "../utils/Animation - 1746691913329.json";
const Preloader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bannerBg m-auto">
      <div className="w-48 h-48">
        <Lottie animationData={Animation} loop={true} />
       <img src="/public/images/Logo.png" className="text-center w-full bg-no-repeat" alt="" />
      </div>
    </div>
  );
};

export default Preloader;
