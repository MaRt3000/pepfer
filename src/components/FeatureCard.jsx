import React from "react";

const FeatureCard = ({
  title,
  image,
  description,
  subTitle,
  subTitle2,
  card,
  card2,
  card3,
}) => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-8  lg:p-12">
      <div className="space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-[#2E6F40] font-bold md:leading-[3rem] lg:leading-[4.5rem] font-['Inter']">
          {title}
        </h1>

        <p className="text-lg md:text-xl lg:text-xl md:leading-8 lg:leading-10 font-['Nunito Sans']">
          {description}
        </p>

        <div className="space-y-2">
          <h2 className="text-[#027A48] font-['Inter']">{subTitle}</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              {/* <img className="block lg:hidden " src={card2} alt="" /> */}
              <a href="https://play.google.com/store/apps/details?id=com.vibes360.app">
                <img src={card} alt="" />
              </a>
            </div>
            {/* <div className="block lg:hidden space-y-2 font-['Inter']">
              <h4 className="text-[#027A48] font-['Inter']">{subTitle2}</h4>
              <img className="block lg:hidden " src={card3} alt="" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <img className=" hidden w-full  mb-6 lg:block" src={image} alt="" />
      </div>
    </div>
  );
};

export default FeatureCard;
