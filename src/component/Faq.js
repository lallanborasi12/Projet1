import Healthier from '../images/healthier.svg'
import balance from '../images/balance.svg'
import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Faq = () => {
  const [expandedSection, setExpandedSection] = useState(0); 

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? -1 : index); 
  };
  return (
    <>
      <div className="px-4 md:px-7 lg:px-10 my-20 ">
        <div className="container m-auto">
            <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-10'>
                <div>
                  <h2 className='text-2xl 2xl:text-3xl font-bold'>Frequently Asked Questions <span className='w-8'>-</span></h2>
                  <div className="h-[150px] md:h-[200px] pt-5 md:pt-14 pb-5 md:pb-10 relative">
                    <img src={Healthier} alt='Healtier' className='w-[200px] absolute top-0 md:top-10 right-[20%]' />
                    <img src={balance} alt='Healtier' className='w-[200px] absolute bottom-0 right-0'/>
                  </div>
                </div>
                <div className="grid grid-flow-row gap-6">
      {['faqwrap', 'faqwrap1', 'faqwrap2'].map((wrapClass, index) => (
        <div key={index} className={`${wrapClass} flex flex-row relative 2xl:p-8 p-6`}>
          <div style={{ width: 'calc(100% - 50px)', }}>
            <h2 className="text-xl 2xl:text-2xl font-bold mb-2">
              {index === 0
                ? 'Why does fastbetter not have a calorie counter?'
                : index === 1
                ? 'Why does fastbetter not have a calorie counter?'
                : 'Are all fastbetter health coaches certified and how do you find them?'}
            </h2>
            <div
              className={`${
                expandedSection === index ? 'max-h-[500px]' : 'max-h-0'
              } overflow-hidden transition-all duration-500 ease-in-out`}
            >
              <p>
                At fastbetter, we take a holistic approach, addressing all the
                factors that influence sustainable weight management, instead of
                just focusing on calorie counting. In fastbetter you can track
                your hydration and food journal and sync your Google Fit or Apple
                health data to share with your coach. Paying attention to the
                quality of the food you consume is more important than religiously
                counting calories.
              </p>
            </div>
          </div>
          
          {/* Arrow positioned at the top */}
          <div className="w-[50px] relative flex justify-center items-start">
            <span
              onClick={() => toggleSection(index)} 
              className="arrowrap absolute right-0 top-0 transform  h-8 w-8 rounded-[50%] bg-orgbg flex justify-center items-center cursor-pointer"
            >
              {expandedSection === index ? (
                <FaArrowUp className="text-white" />
              ) : (
                <FaArrowDown className="text-white" />
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Faq
