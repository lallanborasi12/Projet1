import React, { useState, useEffect } from "react";
import Sliderbg from "../images/sliderbg1.png";
import Banner1 from "../images/banner/banner1.jpg";
import Banner2 from "../images/banner/banner2.jpg";
import Banner3 from "../images/banner/banner3.jpg";
import Banner4 from "../images/banner/banner4.jpg";
import Banner5 from "../images/banner/banner5.jpg";
import Banner6 from "../images/banner/banner6.jpg";
import Banner7 from "../images/banner/banner7.jpg";
import Banner8 from "../images/banner/banner8.jpg";
import Banner9 from "../images/banner/banner9.jpg";
import checked from "../images/checked.png";
import TypeWriter from "./TypeWriter";
import { FaArrowUp } from "react-icons/fa";
import { DiApple } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const Slider = ({ children }) => {
  const images = [
    {
      imgURL: Banner1,
      imgAlt: "img-1",
    },
    {
      imgURL: Banner2,
      imgAlt: "img-2",
    },
    {
      imgURL: Banner3,
      imgAlt: "img-3",
    },
    {
      imgURL: Banner4,
      imgAlt: "img-4",
    },
    {
      imgURL: Banner5,
      imgAlt: "img-5",
    },
    {
      imgURL: Banner6,
      imgAlt: "img-6",
    },
    {
      imgURL: Banner7,
      imgAlt: "img-7",
    },
    {
      imgURL: Banner8,
      imgAlt: "img-8",
    },
    {
      imgURL: Banner9,
      imgAlt: "img-9",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isshow1, setIsShow1] = useState(false);
  const [isshow2, setIsShow2] = useState(false);
  const [isshow3, setIsShow3] = useState(false);

  useEffect(() => {
    // Autoplay effect
    if (!isHovered) {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
      }, 5000); // 5 seconds interval

      // Cleanup the interval when the component unmounts or on hover
      return () => clearInterval(intervalId);
    }
  }, [isHovered, images.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //////
  const txt = [
    "Fasting Power...",
    "Metabolic Boost...",
    "Fat-Burning Mode...",
    "Keto Energy...",
    "Mindful Nutrition...",
    "Body Reset...",
    "Sustainable Wellness...",
    "Intermittent Gains...",
    "Healthy Habits...",
    "Metabolism Magic...",
  ];

  return (
    <>
      <div className="px-4 pt-10 md:px-7 lg:px-10 2xl:pt-12 bg-no-repeat bg-[40%_70%]" style={{backgroundImage: `url(${Sliderbg})` }}>
        <div className="container m-auto">
          <div
            className="flex flex-col lg:flex-row gap-10 h-full">
            <div className="max-w-full lg:max-w-[45%] xl:max-w-[35%] mx-auto">
              <div className="container__slider">
                {children?.map((item, index) => {
                  return (
                    <div
                      className={`slider__item slider__item-active-${
                        activeIndex + 1
                      }`}
                      key={index}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              {images?.map((image, index) => (
                <div
                  key={index}
                  style={{ display: activeIndex === index ? "block" : "none" }}
                  className="rounded-[40px] overflow-hidden"
                >                 
                  <img
                    src={image.imgURL}
                    alt={image.imgAlt}
                    loading="lazy"
                    className="object-cover"
                    width={"auto"}
                    height={"635px"}
                  />                 
                </div>
              ))}
            </div>

            <div className="max-w-full lg:max-w-[55%] xl:max-w-[65%] w-full relative flex flex-col h-full">
              <div className="mb-10 mt-0 lg:mt-10 xl:mt-20">
                <h1 className="text-4xl font-extrabold flex flex-wrap mb-3">
                  Transform Your
                  <span className="ms-2">
                    <TypeWriter
                      texts={txt}
                      typingSpeed={200}
                      deletingSpeed={100}
                      delayBetweenTexts={1000}
                    />
                  </span>
                </h1>
                <h2 className="text-2xl font-semibold mb-3">
                  One Step at a Time with
                  <span className="text-orgbg"> FastBetter</span>
                </h2>
                <p className="text-base">
                  Personalized fasting plans designed to fit your goals. Boost
                  energy, enhance metabolism, lose weight naturally, and feel
                  your best every day. Experience lasting health improvements
                  with a plan tailored to you!
                </p>
                <div className="relative max-w-[270px] w-full mt-6">
                  <Link to={"https://glb.fastbetter.com/"} className="cursor-pointer">
                  <input
                    id="yourjourney"
                    value="Start Your Journey Now"
                    className="cursor-pointer pl-6 md:pr-12 py-2 rounded-[40px] focus:outline-none focus:ring-0 placeholder:text-base placeholder:font-bold placeholder:text-white h-11 md:h-12 w-full bg-orgbg pr-12 text-white font-bold"
                    type="button"
                  />

                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-[50%] bg-white flex justify-center items-center">
                    <FaArrowUp className="text-orgbg rotate-45" />
                  </span>
                  </Link>
                </div>

                <div className="mt-5 xl:mt-10 mb-3 xl:mb-5 h-40 relative">
                  {/* <!--------------------first-review---------------> */}
                  <div
                    className={`p-5 bg-[#F8F5E2] rounded-xl max-w-[320px] revw_box ${
                      isshow1 ? "block" : "hidden"
                    } absolute`}
                  >
                    <p className="text-sm">
                      "The confidence I got after using this app diligently, was
                      phenomenal. Now it's my go-to for all of my health and
                      wellness needs!"
                    </p>
                    <div className="flex gap-3 items-center mt-2">
                      <span className="text-base font-black">~Alice</span>
                      <p className="text-sm font-bold flex items-center gap-1">
                        <img src={checked} alt="checked" />
                        Verified Buyer
                      </p>
                    </div>
                  </div>

                  {/* <!--------------------second-review---------------> */}
                  <div
                    className={`p-5 bg-[#F8F5E2] rounded-xl max-w-[320px] revw_box ${
                      isshow2 ? "block" : "hidden"
                    } absolute m-auto`}
                  >
                    <p className="text-sm">
                      "The confidence I got after using this app diligently, was
                      phenomenal. Now it's my go-to for all of my health and
                      wellness needs!"
                    </p>
                    <div className="flex gap-3 items-center mt-2">
                      <span className="text-base font-black">~Alice</span>
                      <p className="text-sm font-bold flex items-center gap-1">
                        <img src={checked} alt="checked" />
                        Verified Buyer
                      </p>
                    </div>
                  </div>

                  {/* <!--------------------third-review---------------> */}
                  <div
                    className={`p-5 bg-[#F8F5E2] rounded-xl max-w-[320px] revw_box ${
                      isshow3 ? "block" : "hidden"
                    } absolute ml-auto`}
                  >
                    <p className="text-sm">
                      "The confidence I got after using this app diligently, was
                      phenomenal. Now it's my go-to for all of my health and
                      wellness needs!"
                    </p>
                    <div className="flex gap-3 items-center mt-2">
                      <span className="text-base font-black">~Alice</span>
                      <p className="text-sm font-bold flex items-center gap-1">
                        <img src={checked} alt="checked" />
                        Verified Buyer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gradient-to-t from-[#f7c29c] gap-5 sm:gap-0 to-[#FFEDE0] justify-between rounded-2xl items-center flex flex-col sm:flex-row bdr py-3 xs:py-3 xl:py-6 px-6  mds6 relative">
                  <div className="relative z-10 cursor-pointer"
                    onMouseEnter={() => setIsShow1(true)}
                    onMouseLeave={() => setIsShow1(false)}>
                    <h3 className="font-bold text-xl">30 Million+</h3>
                    <p>Users All Over The World</p>
                  </div>
                  <div className="gap-3 flex justify-end">
                    <div
                      className="border-headingColor border px-3 xl:px-5 rounded-[12px] flex justify-center items-center py-2 gap-2 text-white bg-black relative z-10 cursor-pointer"
                      onMouseEnter={() => setIsShow2(true)}
                      onMouseLeave={() => setIsShow2(false)}
                    >
                      <DiApple className="max-h-5 h-full" /> App Store
                    </div>
                    <div
                      className="border-headingColor border px-3 xl:px-5 rounded-[12px] flex justify-center items-center py-2 gap-2  text-white bg-black relative z-10 cursor-pointer"
                      onMouseEnter={() => setIsShow3(true)}
                      onMouseLeave={() => setIsShow3(false)}
                    >
                      <FaGooglePlay className="max-h-5 h-full" /> Google Play
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
