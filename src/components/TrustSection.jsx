import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const TrustSection = () => {
  return (
    <section className="w-full trustbg py-10 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4">
        {/* Images */}
        <div className="relative flex flex-col items-center w-full md:w-auto md:basis-1/2 mb-8 md:mb-0">
          {/* Bottom (large) image */}
          <img
            src="/images/TrustPhoto2.png"
            alt="Man picking fruit"
            className="rounded-xl w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover shadow-md z-10"
          />
          {/* Top (small, overlapping) image */}
          <img
            src="/images/TrustPhoto1.png"
            alt="Farmer with apples"
            className="rounded-xl w-24 h-24 sm:w-32 sm:h-32 object-cover shadow-lg border-4 border-white absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 z-20 md:left-[-40px] md:top-[-40px] md:translate-x-0 md:translate-y-0"
          />
        </div>
        {/* Content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            100% Trusted <br /> Organic Food Store
          </h2>
          <div className="flex items-start gap-3 mb-4 justify-center md:justify-start">
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
          <div className="flex items-start gap-3 mb-6 justify-center md:justify-start">
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
          <Link
            className="btn w-full md:w-auto inline-block text-center"
            to="/shop"
          >
            Shop Now &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustSection; 