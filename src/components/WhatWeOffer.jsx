import React, { useState, useEffect } from "react";
import hivicon from "../assets/hivicon.svg";
import mobileicon from "../assets/mobileicon.svg";
import careicon from "../assets/careicon.svg";
import mobile1 from "../assets/mobile1.svg";
import mobile2 from "../assets/mobile2.svg";
import mobile3 from "../assets/mobile3.svg";
import mobile4 from "../assets/mobile4.svg";

const WhatWeOffer = () => {
  const images = [mobile1, mobile2, mobile3, mobile4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="what-we-offer"
      className="p-4 lg:p-18 space-y-20 max-w-[1440px] mx-auto"
    >
      <div className="space-y-4 pt-10 lg:space-y-8 w-full md:w-[62%]">
        <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['poppins']">
          What We Offer
        </h2>
        <p className="text-lg lg:text-2xl leading-8 text-[#1D2939] font-['Nunito Sans']">
          A safe, inclusive platform providing confidential support, educational
          resources, health tracking, and community connection empowering you
          every step of the way.
        </p>
      </div>

      <div className="w-full h-[24rem] items-center  md:h-[700px] md:w-full lg:h-[550px] rounded-4xl relative   mb-6 lg:hidden">
        {images.map((image, index) => (
          <img
            key={index}
            className={` absolute ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            src={image}
            alt=""
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-14 font-['Inter']">
          <div className="flex items-start justify-start gap-0 md:gap-0 lg:gap-6 pt-8 ">
            <img
              className="mt-[-15px] ml-[-33px] md:ml-[-35px]  lg:ml-[-30px] w-[30%] "
              src={hivicon}
              alt=""
            />
            <div className="space-y-4 pb-8 border-b border-[#B7E1C3] ml-[-22px] lg:ml-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Confidential HIV Services
              </h3>
              <p className="text-lg text-[#475467]">
                Discreet, reliable, and accessible support tailored for youth
                seeking confidential HIV-related care.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-start gap-2 md:gap-6 lg:gap-14 ">
            <img className="w-[14%]" src={mobileicon} alt="" />
            <div className="space-y-4 pb-8 border-b border-[#B7E1C3]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Interactive Mobile App
              </h3>
              <p className="text-lg text-[#475467]">
                Innovative, user-friendly platform offering engaging HIV
                education, resources, and virtual services anytime, anywhere.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-start gap-2 md:gap-6 lg:gap-14">
            <img className="w-[14%]" src={careicon} alt="" />
            <div className="space-y-4 pb-8 border-b border-[#B7E1C3]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Local Care{" "}
              </h3>
              <p className="text-lg text-[#475467]">
                Community-focused, personalised HIV support through trusted
                local health providers for comprehensive and accessible care.
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden w-[300px] h-[300px] md:w-full md:h-[500px] lg:w-full lg:h-[600px] rounded-4xl relative lg:block ]">
          {images.map((image, index) => (
            <img
              key={index}
              className={`absolute  ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
