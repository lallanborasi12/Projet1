import React from "react";
import Joinbg from "../../src/images/joinbg.png";
import Getsupport from "../../src/images/getsupport.jpg";
import Arrow from "../../src/images/arrow.svg";
import { Link } from "react-router-dom";
const GetSupport = () => {
  return (
    <>
      <div className="px-4 md:px-7 lg:px-10 my-20 ">
        <div className="container m-auto">
          <div
            className="bg-cover bg-no-repeat bg-center pt-10 pb-12 px-3 sm:px-8 rounded-[60px] mb-16"
            style={{ backgroundImage: `url(${Getsupport})` }}
          >
            <div className="max-w-[800px] w-full m-auto text-center 2xl:max-w-[700px] mb-44">
              <h2 className="text-white text-2xl 2xl:text-3xl font-bold">
                Get one-on-one support and advice.
              </h2>
              <p className="text-white mt-1 text-base 2xl:text-lg">
                As part of your program at no extra cost, select from a pool of
                weight loss experts and switch any time.
              </p>
              <div className="relative max-w-[300px]  w-full mx-auto mt-6">
                <Link to={"https://glb.fastbetter.com/"} className="cursor-pointer">
                  <input
                    id="findcoach"
                    value="Click to find your coach"
                    className="cursor-pointer pl-3 sm:pl-6 md:pr-12 py-2 rounded-[40px] focus:outline-none focus:ring-0 text-base h-11 md:h-12 w-full bg-white pr-12 text-orgbg font-bold"
                    type="button"
                  />

                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-[50%] bg-orgbg flex justify-center items-center">
                    <img alt="Arrow" src={Arrow} className="w-3" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-cover bg-no-repeat bg-center pt-10 pb-12 px-3 sm:px-8 rounded-[60px]"
            style={{ backgroundImage: `url(${Joinbg})` }}>
            <div className="max-w-[600px] w-full m-auto text-center 2xl:max-w-[700px]">
              <h2 className="text-white text-3xl 2xl:text-4xl font-bold">
                Join Fastbetter and take the first step toward a healthier you.
              </h2>
              <div className="relative max-w-[320px] sm:max-w-[350px]  w-full mx-auto mt-6">
                <Link to={"https://glb.fastbetter.com/"} className="cursor-pointer">
                  <input
                    id="downloadapp"
                    value="Download the App & Begin Now!"
                    className="cursor-pointer pl-3 sm:pl-6 md:pr-12 py-2 rounded-[40px] focus:outline-none focus:ring-0 text-sm xs:text-base h-11 md:h-12 w-full bg-white pr-12 text-orgbg font-bold"
                    type="button"
                  />

                  <span className="absolute right-1 sm:right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 xs:h-8 xs:w-8 rounded-[50%] bg-orgbg flex justify-center items-center">
                    <img alt="Arrow" src={Arrow} className="w-3" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetSupport;
