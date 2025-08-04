import React, { useEffect } from "react";
import Header from '../component/Header'
import Footer from '../component/Footer';
import TopFooter from '../component/TopFooter';
import Healthier from '../component/Healthier';
import WeightLoss from '../component/WeightLoss'
import AboutSec from "../component/AboutSec";
const About = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <>
      <AboutSec/>     
      <WeightLoss />
      <Healthier />
    </>
  )
}

export default About
