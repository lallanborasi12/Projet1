import React, { useState, useEffect } from "react";
import logo from "../images/logo.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isScrolled, setIsScrolled] = useState(false);
  const location  = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      toggleMenu()
      navigate("/"); 
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      toggleMenu()
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    
  };

  return (
    <>
      <div className={`w-full  py-5 px-4 md:px-7 lg:px-10 bg-white ${
          isScrolled ? "fixed animate-smooth z-50 shadow-md border-none top-0" : "relative" }`}>
        <div className="container m-auto">
        <div className={`flex justify-between`}>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>
        <div className="md:flex gap-5 hidden items-center text-base font-bold">
          <button onClick={() => scrollToSection("approachId")}>Program</button>
          <button onClick={() => scrollToSection("madeId")}>How it works</button>
          <Link to="/">Our App</Link>
          <Link to="https://glb.fastbetter.com/">
            <button className=" text-orgbg rounded-[50px] focus:outline-none text-base w-32 lg:w-36 h-12 border-2 border-orgbg ms-10">
              Get Started
            </button>
          </Link>
        </div>
        <div className="flex gap-5 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2   focus:outline-none md:hidden"
          >
            {/* Menu Icon */}
            {isMenuOpen ? (
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 18.5L6.5 7M19 7L6.5 18.5"
                  stroke="#FE7701"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 12.5H3.5M19.5 7.5H3.5M19.5 17.5H11.5"
                  stroke="#FE7701"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {isMenuOpen && (
            <div
              className={` w-full h-[100vh] flex gap-2 top-[80px]  absolute p-4 z-50 text-right  sm:px-24 flex-col right-0 bg-white text-base font-bold ${
                isMenuOpen ? "block" : "hidden"
              } md:block`}
            >
              <button className="text-end" onClick={() => scrollToSection("approachId")}>Program</button>
              <button className="text-end" onClick={() => scrollToSection("madeId")}>How it works</button>
              <Link to="/" onClick={toggleMenu}>
                Our App
              </Link>
              <Link to="https://glb.fastbetter.com/">
                {" "}
                <button className=" text-orgbg rounded-[50px] focus:outline-none text-sm font-bold w-36 h-12 border-2 border-orgbg mt-3">
                  Get Started
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Header;
