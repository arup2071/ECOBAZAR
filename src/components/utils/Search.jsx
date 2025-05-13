import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import SearchProductCard from "./SearchProductCard";
import { IoClose } from "react-icons/io5";

const Search = () => {
  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (search.length > 2) {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchResult(data);
        });
    }
  };

  const handleCLose = (e) => {
    setIsOpen(false);
    setSearch("");
    setSearchResult(null);
  };

  return (
    <>
      <Link onClick={()=> setIsOpen(true)} className="cursor-pointer">
        <LuSearch />
      </Link>

      <div
        className={`searchBox fixed inset-0 bg-whitte/60 backdrop-blur-[20px] z-10 lg:p-20 transition-all duration-300 ${!isOpen ? "translate-y-[100%] opacity-0 invisible" : "translate-y-0 opacity-100 visible"}`}
      >
        <Link
          onClick={(e) => handleCLose(e)}
          className="absolute top-5 right-10 cursor-pointer"
        >
          <IoClose />
        </Link>
        <div className="searchArea">
          <input
          value={search}
            onChange={(e) => handleSearch(e)}
            type="search"
            className="w-full border-b pb-5 border-gray-400 focus:border-branding-success outline-0 "
            placeholder="Search..."
          />
        </div>

        {search.length > 2 && (
          <div className="results grid lg:grid-cols-3">
            {searchResult?.products.length > 0
              ? searchResult.products.map((product) => (
                  <SearchProductCard key={product.id} product={product} />
                ))
              : "No results found"}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
