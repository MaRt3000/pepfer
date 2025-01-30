import React from "react";
import who1 from "../assets/who1.svg";
import who2 from "../assets/who2.svg";

const WhoDoWeServe = () => {
  return (
    <div
      id="who-we-serve"
      className="bg-[#F8FCF9] p-4 lg:p-8 space-y-10  flex flex-col items-center font-['Inter']"
    >
      <div className="space-y-8 w-full md:w-[60%] text-start lg:text-center">
        <h2 className="text-2xl font-bold lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Poppins']">
          Who do we Serve?
        </h2>
        <p className="text-lg lg:text-2xl leading-8 ">
          We support Adolescents, Young People (AYP), and Key Populations (KP),
          providing a safe space for confidential care, education, and community
          engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 lg:px-8">
        <div className="  space-y-8">
          <img className=" " src={who1} alt="" />
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Adolescents, Young People (AYP)
            </h3>
            <p className="text-lg ">
              Youth aged 15-24 seeking engaging and relatable health resources.
            </p>
          </div>
        </div>

        <div className="    space-y-8">
          <img className=" " src={who2} alt="" />
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Key Populations (KP)
            </h3>
            <p className="text-lg ">
              Individuals at greater risk for HIV, including inclusive,
              specialized support for vulnerable groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoDoWeServe;
