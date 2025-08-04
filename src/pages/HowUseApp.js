import { useEffect } from "react";
import searchlens from "../images/search-lens.png";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import iphone1 from "../images/app/iPhone-1.png";
import iphone2 from "../images/app/iPhone-2.png";
import iphone3 from "../images/app/iPhone-3.png";
import iphone4 from "../images/app/iPhone-4.png";
import iphone5 from "../images/app/iPhone-5.png";
import iphone6 from "../images/app/iPhone-6.png";

const HowUseApp = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-custombgColor">
      <div className="px-5 md:px-0 md:mx-24 sm:mx-12 mb-34">
       <div className="container m-auto">
       <div className="md:pb-12 md:pt-12 pt-12 pb-5 flex flex-col md:flex-row gap-5 items-center justify-between border-btntextColor">
          <div className="max-w-96">
            <div className="bordctex flex gap-1">
              <Link to="/help-center">Help center</Link>{" "}
              <FaAngleRight className=" h-3 mx-1 my-auto" />
              <Link to="/how-to-use-app">How Use App</Link>
            </div>
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

        <div className="container m-auto">
          {/* <!------------section-1-------------------> */}

          

          <div className="md:grid md:grid-cols-12 gap-8 items-center my-10">
            <div className="col-span-4">
              <img src={iphone1} alt="Log Meals" className="m-auto" />
            </div>
            <div className="col-span-8">   
            <h3 className="font-bold text-2xl lg:text-[32px] mb-5" id="navigate-through-app">
            Download & Set Up
            </h3>           
              <ul className="list-disc pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <b>Download the App:</b> Install FastBetter from your app store.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Create an Account:</b> Sign up using your email or preferred social login.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Complete Your Profile:</b> Enter your age, weight, height, and health goals to personalize your fasting plan.</li>                
              </ul>
              
              <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{ lineHeight: "1.5" }}>
              <b>Note:</b> Always consult a healthcare professional before starting any new diet or fasting regimen, especially if you have pre-existing medical conditions.
              </p>
            </div>
          </div>

          {/* <!------------section-2-------------------> */}

          

          <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center">
            <div className="col-span-8"> 
            <h3 className=" font-bold text-2xl  lg:text-[32px] mb-5" id="navigate-through-app">
              Pick Your Fasting Plan
            </h3>            
              <ul className="list-disc pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Explore Fasting Methods:</b> Choose from popular schedules like 16:8, 18:6, or 20:4—or create your own custom plan.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Beginner-Friendly Start:</b> If you're new to fasting, begin with a shorter daily fast (e.g., 12-14 hours) and gradually increase.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Stay Flexible:</b> Experiment with different eating windows to find what fits your lifestyle and goals.
                </li>                
              </ul>
            </div>
            <div className="col-span-4">
              <img src={iphone2} alt="Log Meals" className="m-auto" />
            </div>
          </div>

          {/* <!------------section-3-------------------> */}

          

          <div className="md:grid md:grid-cols-12 gap-8 items-center mt-10">
            <div className="col-span-4">
              <img src={iphone3} alt="Log Meals" className="m-auto" />
            </div>
            <div className="col-span-8">
            <h3 className=" font-bold text-2xl  lg:text-[32px] mb-5" id="navigate-through-app">
              Track Your Fasting
            </h3>
              <ul className="list-disc pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Start the Timer:</b> Tap "Start Fasting" when you begin your fast.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <b>End the Fast:</b> Once it's time to eat, tap "End Fast" to log your fasting window.                  
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Log Water & Meals:</b> Record your water intake and meals to stay accountable and identify patterns.
                </li>
                
              </ul>
            </div>
          </div>

          {/* <!------------section-4-------------------> */}

          

          <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center mt-10" >
            <div className="col-span-8">  
            <h3 className=" font-bold text-2xl  lg:text-[32px] mb-5" id="navigate-through-app">
              Get Reminders & Notifications
            </h3>           
              <ul className="list-disc pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Push Notifications:</b> Enable reminders to know exactly when your fasting window starts or ends.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Customize Alerts:</b> Adjust notification times based on your schedule.

                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Motivation on Demand:</b> Receive tips and encouragement to stay on track.
                </li>
                
              </ul>
            </div>
            <div className="col-span-4">
              <img src={iphone4} alt="Log Meals" className="m-auto" />
            </div>
          </div>

          {/* <!------------section-5-------------------> */}

          

          <div className="md:grid md:grid-cols-12 gap-8 items-center mt-10">
            <div className="col-span-4">
              <img src={iphone5} alt="Log Meals" className="m-auto" />
            </div>
            <div className="col-span-8">
            <h3 className=" font-bold text-2xl  lg:text-[32px] mb-5" id="navigate-through-app">
                Explore App Features
            </h3>
              <ul className="list-disc pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                <li className="mb-3"><b>Meal Planner:</b> Access simple, fasting-friendly recipe ideas right in the app.</li>
                <li className="mb-3"> <b>Progress Dashboard:</b> See at-a-glance stats like fasting streaks, weight changes, and more.</li>
                <li className="mb-3"><b>Community Support:</b> Connect with others in our in-app forums to share tips, ask questions, and stay motivated.</li>                
              </ul>             
            </div>
          </div>

          {/* <!------------section-6-------------------> */}

         

          <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center mt-10">
            <div className="col-span-8">  
            <h3 className=" font-bold text-2xl  lg:text-[32px] mb-5" id="navigate-through-app">
              Need Help?
            </h3>            
              <ul className="list-disc pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                <li className="mb-3">
                <b>Frequently Asked Questions:</b> Find quick answers about the app, fasting methods, and technical issues in the FAQ section.
                </li>
                <li className="mb-3">
                <b>Contact Support:</b> Reach out via [support@fastbetter.com] if you need assistance beyond the FAQs. We're here to help!
                </li>                
              </ul>
             
            </div>
            <div className="col-span-4">
              <img src={iphone6} alt="Log Meals" className="m-auto" />
            </div>
          </div>


          {/* <!------------section-7-------------------> */}

          

          <div className="md:grid md:grid-cols-12 gap-8 items-center my-10">
            
            <div className="col-span-12">
            <h3 className=" font-bold text-2xl  lg:text-[32px] mb-5" id="navigate-through-app">Final Tips</h3>
              <ul className="list-disc pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                <li className="mb-3">
                <b>Stay Hydrated:</b> Drinking enough water during your fasting window can help manage hunger and keep you energized.
                </li>
                <li className="mb-3"><b>Listen to Your Body:</b> Adjust your fasting schedule if you feel overly tired or unwell, and consult a professional if needed.
                </li>
                <li className="mb-3"><b>Stay Consistent:</b> Building a new habit takes time—stick with your plan, and you'll see the best results.
                </li>                
              </ul>   
              <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
                 Thank you for choosing FastBetter! We're excited to support you on your intermittent fasting journey.
              </p>          
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowUseApp;
