import React from "react";
import { FaShippingFast, FaHeadset } from "react-icons/fa";
import FeatureCard from "../utils/FeatureCard"; 
import { BsBagCheck, BsFillBoxSeamFill } from "react-icons/bs";

const FeaturesSection = () => {
  const features = [
    {
      icon: FaShippingFast,
      title: "Free Shipping",
      description: "Free shipping with discount",
    },
    {
      icon: FaHeadset,
      title: "Great Support 24/7",
      description: "Instant access to Contact",
    },
    {
      icon: BsBagCheck,
      title: "100% Secure Payment",
      description: "We ensure your money is save",
    },
    {
      icon: BsFillBoxSeamFill,
      title: "Money-Back Guarantee",
      description: "30 days money-back",
    },
  ];

  return (
    <section className= "bg-white pb-20">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
