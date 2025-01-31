import React from "react";
import FeatureCard from "./FeatureCard";
import movement from "../assets/movement.svg";
import Store from "../assets/Store.svg";
import applestore from "../assets/applestore.svg";
import barcode from "../assets/barcode.svg";

const TheMovement = () => {
  return (
    <div className="bg-[#F8FCF9] p-4">
      {/* Hero Image at the top on mobile */}
      <img
        src={movement}
        alt="Hero"
        className="w-full   lg:max-w-xl mb-6 lg:hidden"
      />
      <FeatureCard
        title="Join the Movement"
        description="Vibe360 Virtual Space App is Proudly supported by PEPFAR (President's Emergency Plan for AIDS Relief) and 360HSDI (360 Health Systems Development Initiative)"
        subTitle="Get Started Today"
        card2={applestore}
        card={Store}
        subTitle2="Scan to download"
        card3={barcode}
        image={movement}
      />
    </div>
  );
};

export default TheMovement;
