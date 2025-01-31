import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="fixed bg-white w-full z-50 flex items-center justify-between px-4 md:px-20 py-4">
        <div className="md:hidden">
          <img src={logo} alt="Logo" className="w-[60] h-[80%]" />
        </div>

        {/* Hamburger Menu Icon (Visible on Mobile) */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? (
            // X Icon (Close)
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon (Menu)
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
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links (Visible on Desktop) */}
        <ul className="hidden md:flex space-x-8 text-[#667085]">
          <li className="hover:bg-blue-100 transition duration-300">
            <a href="#home" className="hover:text-[#2E6F40]">
              Home
            </a>
          </li>
          <li className="hover:bg-blue-100 transition duration-300">
            <a href="#what-we-offer" className="hover:text-[#2E6F40]">
              What we Offer
            </a>
          </li>
          <li className="hover:bg-blue-100 transition duration-300">
            <a href="#who-we-serve" className="hover:text-[#2E6F40]">
              Who we Serve
            </a>
          </li>
          <li className="hover:bg-blue-100 transition duration-300">
            <a href="#features" className="hover:text-[#2E6F40]">
              Features
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      {/* Full-Screen Dropdown Menu (Mobile) */}
      <div
        className={`${
          isMenuOpen ? "fixed inset-0 bg-white z-40" : "hidden"
        } md:hidden`}
        style={{ top: "64px" }} // Adjust this value to match the height of your header
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="text-[#667085] text-center text-4xl space-y-8">
            <li className="hover:bg-blue-100 transition duration-300 p-4 ">
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-[#2E6F40]"
              >
                Home
              </a>
            </li>
            <li className="hover:bg-blue-100 transition duration-300 p-4">
              <a
                href="#what-we-offer"
                onClick={closeMenu}
                className="hover:text-[#2E6F40]"
              >
                What we Offer
              </a>
            </li>
            <li className="hover:bg-blue-100 transition duration-300 p-4">
              <a
                href="#who-we-serve"
                onClick={closeMenu}
                className="hover:text-[#2E6F40]"
              >
                Who we Serve
              </a>
            </li>
            <li className="hover:bg-blue-100 transition duration-300 p-4">
              <a
                href="#features"
                onClick={closeMenu}
                className="hover:text-[#2E6F40]"
              >
                Features
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
