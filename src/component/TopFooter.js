import React from 'react'
import LogoW from '../../src/images/logo1.png'
import Arrow from '../../src/images/arrow.svg'
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
const TopFooter = () => {
  return (
    <>
       <div className="px-4 md:px-7 lg:px-10 py-10 2xl:py-12 bg-blkbg">
       <div className="container m-auto">
       <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4'>
    <div>
        <div><Link to="/"><img src={LogoW} alt="Logo" className='max-w-32 w-full'/></Link></div>
        <div className='flex gap-2 mt-6'>
            <div className='w-7 border rounded-[50%] h-7 flex justify-center items-center'>
              <FaLinkedinIn  className='text-white text-xs'/>            
            </div>
            <div className='w-7 border rounded-[50%] h-7 flex justify-center items-center'>
              <IoLogoInstagram   className='text-white text-xs'/>              
            </div>
            <div className='w-7 border rounded-[50%] h-7 flex justify-center items-center'>
            <FaTwitter   className='text-white text-xs'/>
            
            </div>
            <div className='w-7 border rounded-[50%] h-7 flex justify-center items-center'>
               <FaFacebookF   className='text-white text-xs'/>
            </div>
        </div>
    </div>

    <div className='flex flex-col xs:flex-row gap-5 justify-between md:gap-8'>
        <div className='flex flex-col gap-3 text-base'>
            <h3 className="text-orgbg">COMPANY</h3>
            <div className='flex flex-col gap-3 text-white'>
                <Link to="/about">About Us</Link>
            </div>
        </div>
        <div className='flex flex-col gap-3 text-base'>
            <h3 className="text-orgbg">HELP</h3>
            <div className='flex flex-col gap-3 text-white'>
                <Link to="/help-center">Help center</Link>
                <Link to="/contact-us">Contact us</Link>
            </div>
        </div>
        <div className='flex flex-col gap-3 text-base'>
            <h3 className="text-orgbg">RESOURCES</h3>
            <div className='flex flex-col gap-3 text-white'>
                <Link to="/">Blogs</Link>
            </div>
        </div>
        <div className='flex flex-col text-white gap-3 text-base'>
            <h3 className="text-orgbg">GET THE APP</h3>
            <div className='gap-3'>
                <div className="border-headingColor border px-5 rounded-[40px] flex justify-center items-center mb-4 py-2 gap-1 w-20">
                <FaApple className='text-white text-lg'/> Ios
                </div>
                <div className="border-headingColor border px-5 rounded-[40px] flex justify-center items-center mb-4 py-2 gap-1 w-32">
                <DiAndroid className='text-white text-lg'/> Android
                </div>
            </div>
        </div>
    </div>

    <div className='flex flex-col gap-3'>
        <div className="relative max-w-[250px] sm:max-w-[280px] 2xl:max-w-[350px] w-full">
            <input id="username" placeholder="Enter your email" className="pl-8 md:pr-12 py-2 rounded-[40px] focus:outline-none focus:ring-0 placeholder:text-base placeholder:font-normal placeholder:text-[#bebbbb] h-11 md:h-12 w-full bg-ltblkbg pr-12 text-white" type="email" />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <IoPerson className='text-[#bebbbb]'/>
            </span>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-[50%] bg-orgbg flex justify-center items-center">
                <img alt="Arrow" src={Arrow}  className='w-3'/>
            </span>
        </div>
        <p className='text-white'>Join our newsletter to keep up to date with us!</p>
    </div>
</div>

        </div>
        </div>
    </>
  )
}

export default TopFooter
