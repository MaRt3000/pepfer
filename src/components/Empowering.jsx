import React from "react";
import iPhonepro from "../assets/iPhonepro.svg";
import logicon from "../assets/logicon.svg";
import chat from "../assets/chat.svg";
import map from "../assets/map.svg";

const Empowering = () => {
  return (
    <div id="features">
      <div className="flex flex-col text-center px-8 items-center justify-center space-y-4 pt-14 lg:pt-[130px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E6F40] font-['Poppins'] ">
          Empowering Your Journey to Better Health
        </h1>
        <p className="text-lg md:text-2xl text-center md:w-[60%] lg:w-[40%] font-['Nunito Sans']">
          Discover a range of tools designed to educate, guide, and support you
          every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[-10px] p-4 lg:p-14 lg:pt-14 font-['Inter']">
        <div className="bg-[#F8FCF9] border border-[#6DC783] flex flex-col items-center justify-center rounded-4xl px-8 pb-14 lg:pb-8">
          <img className="" src={iPhonepro} alt="" />
          <div className="space-y-4">
            <h3 className="text-[#2E6F40] text-2xl md:text-3xl lg:text-4xl font-bold">
              Educational Resource
            </h3>
            <p className="text-lg ">
              Learn about your health through interactive tools and resources.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div className="bg-[#F8FCF9] border border-[#6DC783] flex flex-col items-center rounded-4xl p-6 lg:p-12">
            <img className="mr-[-70px] md:mr-[-150px]" src={chat} alt="" />
            <div className="space-y-2">
              <h3 className="text-[#2E6F40] text-2xl md:text-3xl lg:text-4xl font-bold">
                Health Progress Tracker
              </h3>
              <p className="text-sm md:text-lg ">
                Stay on top of your health with personalized tools to monitor
                your progress and achieve your wellness goals with confidence.
              </p>
            </div>
          </div>
          <div className="bg-[#F8FCF9] border border-[#6DC783] flex flex-col items-start rounded-4xl p-4">
            <img className="w-[50%]" src={logicon} alt="" />
            <div className="space-y-2 px-2">
              <h3 className="text-[#2E6F40] text-2xl md:text-3xl lg:text-4xl font-bold">
                Offline Access
              </h3>
              <p className="text-sm md:text-lg ">
                Access downloaded resources anytime, even without an internet
                connection.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8FCF9] flex flex-col lg:flex-row py-8 space-y-8 justify-between items-center m-4 lg:m-14 border  border-[#6DC783] rounded-4xl">
        <div className="space-y-4 px-8  ">
          <h3 className="text-[#2E6F40] text-2xl md:text-3xl lg:text-4xl font-bold">
            Facility Locator
          </h3>
          <p className="text-sm md:text-lg ">
            Quickly locate nearby facilities for HIV testing, care, and support
            services because help is always closer than you think.
          </p>
        </div>
        <img className="w-full" src={map} alt="" />
      </div>
    </div>
  );
};

export default Empowering;
