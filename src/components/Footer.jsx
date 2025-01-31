import React from "react";
import logo from "../assets/logo.svg";
import x from "../assets/x.svg";
import insocial from "../assets/in.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import phoneicon from "../assets/phoneicon.svg";
import mail from "../assets/mail.svg";

const Footer = () => {
  return (
    <div className="bg-[#F8FCF9] border border-[#6DC783] pt-6 font-['Inter']">
      <div className="flex flex-col lg:flex-row  lg:items-center justify-between p-4 md:p-14">
        <div className="space-y-4 md:space-y-8  md:text-left items-start">
          <img src={logo} alt="Logo" className=" items-start   md:mx-0" />
          <ul className="flex flex-col md:flex-row  flex-wrap justify-center lg:justify-center space-x-4 md:space-x-8 text-[#667085]">
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
        <div className=" text-end space-y-4 bg-white p-4  md:text-end border-b border-r border-[#2E6F40] rounded-xl shadow-2xl mt-8 md:mt-0 relative">
          <div className="absolute top-0 left-0 flex items-start">
            <img src={phoneicon} />
            <img className="ml-[-10px]" src={mail} />
          </div>
          <h2 className=" text-[#2E6F40] text-xl md:text-3xl lg:text-2xl">
            Contact Us
          </h2>
          <a href="mailto:info@360hsdi.org">
            <p className="text-xl italic">Email: info@360hsdi.org</p>
          </a>
        </div>
      </div>

      {/* FOOT SECTION */}
      <div className="border-t border-[#EAECF0] pt-8 mt-8 lg:mt-0 lg:pt-0 flex flex-col  items-start lg:items-center justify-between mx-4 pb-4 md:mx-14">
        <h4 className="text-[#667085] py-4 md:py-8 lg:text-center text-left order-2 md:order-1">
          © 2025 360 HDSI and PEPFAR. All rights reserved.
        </h4>
        <div className="flex flex-col  items-center gap-4 md:gap-8 order-1 md:order-2">
          <ul className="flex space-x-4 md:space-x-8 text-[#667085] order-2 md:order-1">
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
          <div className="flex gap-4 md:gap-8 order-1 md:order-2 ml-[-80px] lg:ml-0">
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
