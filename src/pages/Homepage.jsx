import React from 'react'
import Banner from '../components/Banner/Banner'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturesSection from '../components/Feature/FeatureSection'
import CategorySlider from '../components/utils/CategorySlider'
import CounterCard from '../components/Counter/CounterCard'
import TrustSection from '../components/TrustSection/TrustSection'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6'

const Homepage = () => {
  return (
    <>
      <Banner />
      <FeaturesSection />
      <ProductGrid limit={4} />

      <section id="topCategory" className="py-[80px] bg-gray-100 categorybg">
         <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-snug text-gray-900 font-semibold">
            Shop by Top Categories
          </h2>
          <Link className="font-medium text-base sm:text-[16px] leading-[150%] text-branding-success flex gap-2 items-center">
            View All <FaArrowRightLong />
          </Link>
        </div>


        <div className="container">
          <CategorySlider />
        </div>
      </section>
      <TrustSection />
      <CounterCard />
    </>
  );
}

export default Homepage
