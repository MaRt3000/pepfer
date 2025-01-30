import React from "react";
import FeatureCard from "./FeatureCard";
import Store from "../assets/Store.svg";
import hero from "../assets/hero.gif";
import applestore from "../assets/applestore.svg";
import barcode from "../assets/barcode.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[#EDF8F0] pt-24  flex flex-col px-4 items-center md:px-6 lg:py-18"
    >
      {/* Hero Image at the top on mobile */}
      <img
        src={hero}
        alt="Hero"
        className="w-full  max-w-md md:max-w-lg lg:max-w-xl mb-6 lg:hidden "
      />

      {/* Feature Card */}
      <FeatureCard
        title="Your Confidential Space for HIV Services & Education"
        description="Vibe360 Virtual Space App is your trusted companion for access to confidential, youth-focused HIV-related services and education, all in one place."
        subTitle="Get Started Today"
        card2={applestore}
        card={Store}
        subTitle2="Scan to download"
        card3={barcode}
        image={hero}
      />
    </div>
  );
};

export default Hero;
