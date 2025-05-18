import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from '../components/utils/CategoryCard'
import Breadcrum from '../components/utils/Breadcrum'

const Shop = () => {
  const categories = useSelector((state) => state.category);

  return (
    <div>
      <Breadcrum url="/shop" title="Shop" />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-snug text-gray-900 font-semibold mb-8">
          All Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {categories?.map((category) => (
            <CategoryCard 
              key={category.slug} 
              title={category.name} 
              url={category.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop
