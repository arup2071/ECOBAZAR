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
    const value = e.target.value;
    setSearch(value);

    if (value.length > 2) {
      fetch(`https://dummyjson.com/products/search?q=${value}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchResult(data);
        });
    } else {
      setSearchResult(null);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearch("");
    setSearchResult(null);
  };

  return (
    <>
      <Link onClick={() => setIsOpen(true)} className="cursor-pointer">
        <LuSearch />
      </Link>

      <div
        className={`searchBox fixed inset-0 bg-white/60 backdrop-blur-[20px] z-10 p-5 lg:p-20 transition-all duration-300 ${
          !isOpen
            ? "translate-y-full opacity-0 invisible"
            : "translate-y-0 opacity-100 visible"
        }`}
      >
        <Link
          onClick={handleClose}
          className="absolute top-5 right-10 cursor-pointer text-2xl"
        >
          <IoClose />
        </Link>

        <div className="searchArea mb-5">
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            className="w-full border-b pb-3 text-lg border-gray-400 focus:border-green-600 outline-none bg-transparent"
            placeholder="Search..."
          />
        </div>

        {search.length > 2 && (
          <div className="results max-h-[70vh] overflow-y-auto pr-2 grid lg:grid-cols-3 gap-4">
            {searchResult?.products.length > 0 ? (
              searchResult.products.map((product) => (
                <SearchProductCard
                  key={product.id}
                  product={product}
                  onSelect={handleClose}
                />
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
