import React from "react";
import CountUp from "react-countup";

const Counter = ({ counter, suffix, title }) => {
  return (
    <div className="py-6 sm:py-8 md:py-10 bg-white/5 rounded-lg inline-flex flex-col justify-start items-center">
      <CountUp
        end={counter}
        duration={3.75}
        suffix={suffix}
        className="text-branding-success text-4xl sm:text-5xl md:text-6xl font-light leading-tight sm:leading-normal md:leading-[67.20px]"
      />
      <p className="text-white text-center text-base sm:text-lg leading-relaxed sm:mt-3">
        {title}
      </p>
    </div>
  );
};

export default Counter;
