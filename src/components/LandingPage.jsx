import React from "react";
import Hero from "./Hero";
import WhatWeOffer from "./WhatWeOffer";
import WhoDoWeServe from "./WhoDoWeServe";
import TheMovement from "./TheMovement";
import Empowering from "./Empowering";

const LandingPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Hero />
      <WhatWeOffer />
      <WhoDoWeServe />
      <Empowering />
      <TheMovement />
    </div>
  );
};

export default LandingPage;
