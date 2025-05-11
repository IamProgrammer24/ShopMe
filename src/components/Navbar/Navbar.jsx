import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
        {/* upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            {/* Logo */}
            <div>
              <a href="#" className="font-bold text-xl items-center flex gap-1">
                <FiShoppingBag size="30" />
                ShopMe
              </a>
            </div>

            {/* Right Side */}
            <div className="flex justify-between items-center gap-4">
              {/* Search Bar */}
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
                    text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800"
                />
                <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>

              {/* Order Button */}
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>

              {/* Hamburger menu (sm only) */}
              <div className="sm:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-2xl text-primary focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        mobileMenuOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* lower Navbar (Desktop Only) */}
        <div data-aos="zoom-in" className="sm:flex hidden justify-center">
          <ul className="flex items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Trending Products
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-3/4 h-full bg-white dark:bg-slate-800 z-50 transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg`}
        >
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-600">
            <a href="#" className="font-bold text-xl flex items-center gap-1">
              <FiShoppingBag size="24" />
              ShopMe
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-primary"
            >
              ✕
            </button>
          </div>
          <ul className="p-4 flex flex-col gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-primary"
                >
                  {data.name}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t dark:border-gray-600">
              <p className="font-medium mb-2">Trending Products</p>
              <ul className="pl-2 space-y-2">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block hover:text-primary"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
