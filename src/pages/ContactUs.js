import React, { useEffect } from "react";
import helpbg from "../images/contact-bg.png";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl";
import Envople from "../images/envolope.png";

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="px-4 md:px-7 lg:px-10 my-10 2xl:my-12 ">
        <div className="container m-auto">
          <div className="bg-cover bg-[center_bottom] xl:bg-[50%_10%] bg-no-repeat rounded-3xl pt-10 min-h-[580px] bdr  mds5 relative flex justify-center items-end"
            style={{ backgroundImage: `url(${helpbg})` }}>
            <div className="relative rounded-3xl lg:rounded-none overflow-hidden">
              <div className="px-5 xs:px-10">
                <div
                  className="max-w-[650px] w-full mx-auto rounded-[60px]  p-5 pb-20 text-center text-white"
                  style={{
                    background:
                      "linear-gradient(360deg, #FE7701 40.79%, #FF994F 100%)",
                  }}
                >
                  <h1 className="text-3xl font-bold mb-2 mt-6">Get in Touch</h1>
                  <p>Feel free to reach to us any time!</p>
                  <div className="mt-20 relative">
                    <div className="flex justify-center mb-5">
                      <span>
                        <CiLocationOn className="mr-0 md:mr-3 text-xl" />
                      </span>
                      <span>
                        Griva Digeni, 115, Trident Centre 3101, Limassol, Cyprus
                      </span>
                    </div>
                    <div className="flex justify-center items-center  mb-5">
                      <SlEnvolope className="mr-3" /> support@fastbetter.com
                    </div>
                    <div className="flex justify-center items-center  mb-2">
                      <FaPhone className="mr-3" /> VOTARINI LTD
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src={Envople}
                  alt=" Envolope"
                  className="-mt-20 xs:-mt-32 md:-mt-44 m-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
