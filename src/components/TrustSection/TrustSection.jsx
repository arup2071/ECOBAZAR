import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const TrustSection = () => {
  return (
    <section className="w-full py-10 md:py-20 bg-[url('/images/trustbg.png')] bg-cover bg-no-repeat">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4">
        <div className="flex flex-row gap-4 md:gap-6 w-full md:w-auto md:basis-1/2 justify-center">
          <img
            src="/images/TrustPhoto1.png"
            alt="Farmer with apples"
            className="w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-48 lg:w-50 lg:h-70"
          />
          <img
            src="/images/TrustPhoto2.png"
            alt="Man picking fruit"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-100 lg:h-100"
          />
        </div>
        <div className="flex-1 max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            100% Trusted <br /> Organic Food Store
          </h2>
          <div className="flex items-start gap-3 mb-4">
            <span className="mt-1 text-green-500 bg-green-100 rounded-full p-1">
              <FiCheckCircle size={22} />
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Healthy & natural food for lovers of healthy food.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Ut quis tempus erat. Phasellus euismod bibendum magna non
                tristique. Pellentesque semper vestibulum elit sed condimentum.
                Nunc pretium fermentum interdum.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-6">
            <span className="mt-1 text-green-500 bg-green-100 rounded-full p-1">
              <FiCheckCircle size={22} />
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Every day fresh and quality products for you.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
                posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus
                lobortis felis. Sed vestibulum nisl sit amet sapien.
              </p>
            </div>
          </div>
          <Link className="btn">Shop Now &rarr;</Link>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
