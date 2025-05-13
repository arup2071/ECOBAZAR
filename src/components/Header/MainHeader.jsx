import React, { useState } from "react";

import PrimaryMenu from "../utils/PrimaryMenu";
import { Link } from "react-router-dom";
import { PiPhoneCallLight } from "react-icons/pi";
import { HiMenuAlt3, HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";

import Search from "../utils/Search";
import Sidebar from "../utils/Sidebar";
import Cart from "../utils/Cart";

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const showMobileNav = () => {
    setShowMenu(true);
  };

  const hideMobileNav = () => {
    setShowMenu(false);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav>
      <div className="container grid grid-cols-5 py-5 items-center px-5 lg:px-0">
        <div className="menus lg:col-span-2 col-span-1 ">
          <div className="hidden lg:block">
            <PrimaryMenu />
          </div>
          <div className="lg:hidden text-2xl">
            <Link onClick={showMobileNav}>
              <HiMenuAlt3 />
            </Link>

            <Sidebar
              position="right"
              hideSidebar={hideMobileNav}
              showSidebar={showMenu}
              heading="Shopping Card "
            >
              <PrimaryMenu />
            </Sidebar>
          </div>
        </div>
        <div className="logos col-span-3 lg:col-span-1">
          <Link to="/">
            <img src="/images/Logo.png" className="m-auto" alt="" />
          </Link>
        </div>
        <div className="quickLinks col-span-1 lg:col-span-2 flex justify-end place-items-center gap-10">
          <a
            href="tel:(219) 555-0114"
            className="lg:flex gap-2 place-items-center hidden"
          >
            <span className="text-3xl">
              <PiPhoneCallLight />
            </span>
            (219) 555-0114
          </a>

          <ul className="flex gap-5 lg:text-3xl text-2xl">
            <li>
              <Search />
            </li>
            <li className="hidden lg:inline-block">
              <Link>
                <FaRegHeart />
              </Link>
            </li>
            <li className="relative">
              <Link onClick={toggleCart}>
                <HiOutlineShoppingBag />
                <div className="cartCounter top-0 right-[-3px] border border-white absolute rounded-full lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] bg-branding-success-dark text-[10px] text-white text-center leading-[15px] lg:leading-[18px] ">
                  2
                </div>
              </Link>
            </li>
            <li className="hidden lg:inline-block">
              <Link>
                <FaRegUser />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Cart open={showCart} onClose={() => setShowCart(false)} />
    </nav>
  );
};

export default MainHeader;
