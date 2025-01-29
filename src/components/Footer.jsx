import React from "react";
import logo from "../assets/logo.svg";
import x from "../assets/x.svg";
import insocial from "../assets/in.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";

const Footer = () => {
  return (
    <div className="bg-[#F8FCF9] border border-[#6DC783] mt-8 font-['Inter']">
      <div className="flex flex-col md:flex-row  md:items-center justify-between p-4 md:p-14">
        <div className="space-y-4 md:space-y-8  md:text-left items-start">
          <img src={logo} alt="Logo" className=" items-start   md:mx-0" />
          <ul className="flex flex-col md:flex-row  flex-wrap justify-center md:justify-center space-x-4 md:space-x-8 text-[#667085]">
            <li className="hover:bg-blue-100 transition duration-300 p-2">
              <a href="#home" className="hover:text-[#2E6F40]">
                Home
              </a>
            </li>
            <li className="hover:bg-blue-100 transition duration-300 p-2">
              <a href="#what-we-offer" className="hover:text-[#2E6F40]">
                What we Offer
              </a>
            </li>
            <li className="hover:bg-blue-100 transition duration-300 p-2">
              <a href="#who-we-serve" className="hover:text-[#2E6F40]">
                Who we Serve
              </a>
            </li>
            <li className="hover:bg-blue-100 transition duration-300 p-2">
              <a href="#features" className="hover:text-[#2E6F40]">
                Features
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 bg-white p-4 text-center hidden lg:block md:text-end rounded-xl shadow-2xl mt-8 md:mt-0">
          <h2 className=" text-[#2E6F40] text-xl md:text-3xl lg:text-2xl">
            Contact Us
          </h2>
          <p className="text-xl italic">Email: info@360hsdi.org</p>
        </div>
      </div>

      {/* FOOT SECTION */}
      <div className="border-t border-[#EAECF0] flex flex-col md:flex-row items-start lg:items-center justify-between mx-4 pb-4 md:mx-14">
        <h4 className="text-[#667085] py-4 md:py-8 text-center md:text-left">
          © 2025 360 HDSI and PEPFAR. All rights reserved.
        </h4>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <ul className="hidden lg:block lg:flex space-x-4 md:space-x-8 text-[#667085]">
            <li className="hover:bg-blue-100 transition duration-300 p-2">
              <a href="#" className="hover:text-[#2E6F40]">
                Terms
              </a>
            </li>
            <li className="hover:bg-blue-100 transition duration-300 p-2">
              <a href="#" className="hover:text-[#2E6F40]">
                Privacy
              </a>
            </li>
            <li className="hover:bg-blue-100 transition duration-300 p-2">
              <a href="#" className="hover:text-[#2E6F40]">
                Cookies
              </a>
            </li>
          </ul>
          <div className="flex gap-4 md:gap-8">
            <img src={x} alt="Twitter" className="w-6 h-6" />
            <img src={insocial} alt="LinkedIn" className="w-6 h-6" />
            <img src={ig} alt="Instagram" className="w-6 h-6" />
            <img src={fb} alt="Facebook" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
