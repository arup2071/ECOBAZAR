import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const TrustSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4">
        {/* Images */}
        <div className="relative flex w-full md:w-auto md:basis-1/2 justify-center min-h-[180px] md:min-h-[260px] lg:min-h-[320px]">
          {/* Bottom (large) image */}
          <img
            src="/images/trust-img-2.jpg"
            alt="Man picking fruit"
            className="rounded-xl w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover shadow-md z-10"
          />
          {/* Top (small, overlapping) image */}
          <img
            src="/images/trust-img-1.jpg"
            alt="Farmer with apples"
            className="rounded-xl w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover shadow-lg absolute left-[-20px] top-[-30px] md:left-[-40px] md:top-[-40px] z-20 border-4 border-white"
          />
        </div>
        {/* Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            100% Trusted <br /> Organic Food Store
          </h2>
          <div className="flex items-start gap-3 mb-4">
            <span className="mt-1 text-green-500 bg-green-100 rounded-full p-1">
              <FiCheckCircle size={22} />
            </span>
            <div>
              <p className="font-semibold text-gray-900">Healthy & natural food for lovers of healthy food.</p>
              <p className="text-gray-500 text-sm mt-1">Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-6">
            <span className="mt-1 text-green-500 bg-green-100 rounded-full p-1">
              <FiCheckCircle size={22} />
            </span>
            <div>
              <p className="font-semibold text-gray-900">Every day fresh and quality products for you.</p>
              <p className="text-gray-500 text-sm mt-1">Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.</p>
            </div>
          </div>
          <button className="bg-branding-success hover:bg-green-600 text-white font-semibold rounded-full px-8 py-3 transition-colors text-base shadow-md">
            Shop Now &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection; 