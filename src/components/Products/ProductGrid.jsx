import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductGrid = ({limit = 1}) => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=25`)
      .then((res) => res.json())
      .then(data=>{
        setProducts(data.products);
      });
  }, []);
  return (
    <section id="featuredProduct" className="lg:py-20 py-10">
      <div className="container flex justify-between mb-10 place-items-center">
        <h2 className="text-[40px] leading-[120%] text-gray-900 font-semibold">
          Featured Products
        </h2>
        <Link className="font-medium text-[16px] leading-[150%] text-branding-success flex gap-2 place-items-center">
        View All <FaArrowRightLong />
        </Link>
      </div>
      <div className="container grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
