import React from "react";
import MadeSimplebg from "../images/MadeSimplebg.png";
import Profile from "../images/profile.svg";
import Build from "../images/build.svg";
import Goal from "../images/goal.svg";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const MadeSimple = () => {
  return (
    <>
      <div className="px-4 md:px-7 lg:px-10 mt-16" id="madeId">
        <div className="container m-auto">
          <div className="mx-auto max-w-[600px] w-full text-center pb-20 sm:pb-12 madehdrsec relative">
            <h2 className="text-3xl font-bold mb-3">Slimming Made Simple</h2>
            <p className="text-base">
              Start your journey to a slimmer, healthier body by following three
              simple steps for sustainable weight loss, better metabolism, and
              lasting wellness.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-auto bg-no-repeat bg-center px-4 md:px-7 lg:px-10 mb-20" style={{ backgroundImage: `url(${MadeSimplebg})` }}>
        <div className="container m-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative p-6 bdr mds1">
              <div className="w-16 h-16 flex justify-center items-center mb-8 bg-gradient-to-t from-[#FE7701] to-[#FF9950] rounded-2xl">
                <img src={Profile} className="h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-10 relative">
                Create your profile to see if you're eligible
                <span className="absolute left-0 bottom-[-20px] w-[40px] h-[2px] bg-orgbg"></span>
              </h3>
              <p className="text-lg">
                Share your goals, health needs and preferences to check if
                fastbetter's program is a fit for you.
              </p>
              <div className="p-2 bg-[#FF9950] text-white flex justify-center items-center rounded-lg w-[85px] mt-8 font-extrabold">
                {" "}
                STEP 1
              </div>
            </div>
            <div className="relative p-6 bdr mds2">
              <div className="w-16 h-16 flex justify-center items-center mb-8 bg-gradient-to-t from-[#FE7701] to-[#FF9950] rounded-2xl">
                <img src={Build} className="h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-10 relative">
                Meet your coach to build a personal program
                <span className="absolute left-0 bottom-[-20px] w-[40px] h-[2px] bg-orgbg"></span>
              </h3>
              <p className="text-lg">
                Log meals in the app and use that as a baseline for building
                improvements plans with your coach, at no extra cost.
              </p>
              <div className="p-2 bg-[#FF9950] text-white flex justify-center items-center rounded-lg w-[85px] mt-8 font-extrabold">
                {" "}
                STEP 2
              </div>
            </div>
            <div className="relative p-6 bdr mds3">
              <div className="w-16 h-16 flex justify-center items-center mb-8 bg-gradient-to-t from-[#FE7701] to-[#FF9950] rounded-2xl">
                <img src={Goal} className="h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-10 relative">
                Stay accountable and achieve your goals
                <span className="absolute left-0 bottom-[-20px] w-[40px] h-[2px] bg-orgbg"></span>
              </h3>
              <p className="text-lg">
                Reach a happy weight and feel confident in your body. Get fit
                for good and improve your overall health.
              </p>
              <div className="p-2 bg-[#FF9950] text-white flex justify-center items-center rounded-lg w-[85px] mt-8 font-extrabold">
                {" "}
                STEP 3
              </div>
            </div>
          </div>
          <div className="relative max-w-[250px] sm:max-w-[200px] m-auto  w-full  mt-12">
                  <Link to={"https://glb.fastbetter.com/"} className="cursor-pointer">
                  <input
                    id="getstart"
                    value="Am I eligible?"
                    className="cursor-pointer pl-6 md:pr-12 py-2 rounded-[40px] focus:outline-none focus:ring-0 placeholder:text-base placeholder:font-bold placeholder:text-white h-11 md:h-12 w-full bg-orgbg pr-12 text-white font-bold"
                    type="button"
                  />

                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-[50%] bg-white flex justify-center items-center">
                    <FaArrowUp className="text-orgbg rotate-45" />
                  </span>
                  </Link>
                </div>
        </div>
      </div>
    </>
  );
};

export default MadeSimple;
