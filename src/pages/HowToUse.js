import {useEffect} from 'react'

import Header from '../component/Header'
import Footer from '../component/Footer'
import searchlens from '../images/search-lens.png';
import { FaAngleRight } from "react-icons/fa6";
import howapp from '../images/app.png'
import howweb from '../images/web.png'

//import { a } from 'react-router-dom'
const HowToUse = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
    return (
        <div>
            <div className="w-full  px-4 md:px-14 overflow-hidden">
            <div className="container m-auto mt-10">
                <div className="py-14 flex flex-col md:flex-row justify-between gap-10 items-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 relative">
                        <div className='bordctex flex gap-1'>
                            <a to="/help-center" >Help center</a> <FaAngleRight className=' h-3 mx-1 my-auto' />
                            <a to="/how-to-use" >How to use </a>
                        </div>
                        
                    </div>
                    <div className="flex items-center justify-center md:justify-end gap-2 max-w-[450px] w-full md:w-2/3 lg:w-1/3 relative">
             
             

            <div className="max-w-[350px] w-full relative z-10 srch srch1">
              <input
                type="email"
                id="username1"
                placeholder="Search your keyword here..."
                className="pl-10 pr-4 py-2  rounded-[42px] focus:outline-none focus:ring-0 focus:ring-slate-200 placeholder:text-base placeholder:font-normal placeholder:text-[#bebbbb] h-14 w-full bg-orgltbg bdr gr1"
              />             
            </div>
            <button className="bg-orgbg text-white rounded-[40px] focus:outline-none text-lg font-bold w-[56px] h-14 mt-2 sm:mt-0 flex justify-center items-center">
              
            <img alt="lens Icon" className="w-1/2 justify-self-center" src={searchlens} /> 
            </button>
          </div>
                </div>
            </div>
            <div className="container m-auto">
                <div className="py-12 px-6 md:px-0 mb-20 relative">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 rounded-lg text-center">
                        <div className="rounded-3xl bg-orgltbg p-8 lg:p-12">
                            <a to="/how-use-app">
                                <img src={howapp}className="  m-auto w-[60px] h-[60px]"/>
                                <h6 className="text-xl font-extrabold py-3">How to use App</h6>
                                <p className="text-base sm:text-lg 2xl:text-2xl">
                                    Wondering how to use our App? We're here to guide you!
                                </p></a>
                        </div>
                        <div className="rounded-3xl bg-orgltbg p-8 lg:p-12">
                            <a to="/how-use-web"> 
                            <img src={howweb} className=" m-auto w-[60px] h-[60px]" />
                                <h6 className="text-xl font-extrabold py-3">How to use Web</h6>
                                <p className="text-base sm:text-lg 2xl:text-2xl">
                                    Wondering how to use the website? We're here to guide you!
                                </p></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default HowToUse
