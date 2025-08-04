import React, { useEffect } from "react";
import searchlens from "../images/search-lens.png";
import generalquestion from "../images/gquestion.png";
import paymenticon from "../images/payment.png";
import navigation from "../images/navigate.png";
import trophy from "../images/trophy.png";
import fquery from "../images/fquery.png";
import useapp from "../images/useapp.png";
import helpbg from "../images/helpbg.png";
import Healthier from "../component/Healthier";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="w-full">
        <div
          className="px-4 md:px-14 overflow-hidden bg-white" >
          


          <div className="bg-no-repeat bg-[80%_30%]" style={{ backgroundImage: `url(${helpbg})`}}>
            {/* search section  */}
          <div className="container m-auto">
            <div className="py-14 flex flex-col md:flex-row justify-between gap-4 items-center">
              <div className="w-full relative">
                <h3 className=" text-[30px] lg:text-[34px]  text-center md:text-left font-medium">
                  <span className="text-orgbg font-bold">Hello!</span> How can
                  we assist<br/> you and make your day better?
                </h3>
              </div>

              <div className="flex items-center justify-center md:justify-end gap-2 max-w-[550px] w-full md:w-2/3  relative">
                <div className="max-w-[450px] w-full relative z-10 srch srch1">
                  <input
                    type="email"
                    id="username1"
                    placeholder="Search your keyword here..."
                    className="pl-4 pr-4 py-2  rounded-[42px] focus:outline-none focus:ring-0 focus:ring-slate-200 placeholder:text-base placeholder:font-normal placeholder:text-[#bebbbb] h-14 w-full bg-orgltbg bdr gr1"
                  />
                </div>
                <button className="bg-orgbg text-white rounded-[40px] focus:outline-none text-lg font-bold max-w-14 w-full h-14 mt-2 sm:mt-0 flex justify-center items-center">
                  <img
                    alt="lens Icon"
                    className="w-1/3 justify-self-center"
                    src={searchlens}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Box section */}

          <div className="container m-auto">
            <div className="pb-12 px-6 md:px-0 mb-10 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4  text-center">
                <div
                  className="relative rounded-3xl  bg-white  hlp bdrhlp">
                  <Link to="/general" className="relative py-8 lg:py-10 block">
                    <div className="">
                      <img src={generalquestion} className=" mb-4 m-auto" />
                    </div>

                    <h6 className="text-lg xl:text-xl font-bold py-2">
                      General
                      <br /> FAQ
                    </h6>
                  </Link>
                </div>
                <div
                  className="relative rounded-3xl bg-white hlp bdrhlp2">
                  <Link to="/fastingInq" className="relative py-8 lg:py-10 block">
                    <img src={fquery} className="mb-4 m-auto" />
                    <h6 className="text-lg xl:text-xl font-bold py-2">
                      Fasting <br />
                      Queries
                    </h6>
                  </Link>
                </div>
                <div
                  className="relative rounded-3xl bg-white hlp bdrhlp">
                  <Link to="/subscription" className="relative py-8 lg:py-10 block">
                    <img src={trophy} className="mb-4 m-auto" />
                    <h6 className="text-lg xl:text-xl font-bold py-2">
                      Subscription <br />
                      Management
                    </h6>
                  </Link>
                </div>
                <div
                  className="relative rounded-3xl bg-white hlp bdrhlp2">
                  <Link to="/payment-info" className="relative py-8 lg:py-10 block">
                    <img src={paymenticon} className="mb-4 m-auto" />
                    <h6 className="text-lg xl:text-xl font-bold py-2">
                      Payment <br />
                      Information
                    </h6>
                  </Link>
                </div>
                <div
                  className="relative rounded-3xl bg-white hlp bdrhlp">
                  <Link to="/how-to-use-app" className="relative py-8 lg:py-10 block">
                    <img src={useapp} className="mb-4 m-auto" />
                    <h6 className="text-lg xl:text-xl font-bold py-2">
                      How to <br />
                      use app
                    </h6>
                  </Link>
                </div>
                <div
                  className="relative rounded-3xl bg-white hlp bdrhlp2">
                  <div>
                    <Link to="/how-to-use-web" className="relative py-8 lg:py-10 block">
                      <img src={navigation} className="mb-4 m-auto" />
                      <h6 className="text-lg xl:text-xl font-bold py-2">How to <br/>
                      use website</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        <Healthier />
       
      </div>
    </>
  );
};

export default HelpCenter;
