import { useEffect } from "react";
import { Link } from "react-router-dom";
import searchlens from "../images/search-lens.png";
import { FaAngleRight } from "react-icons/fa6";
import web1 from "../images/web/web-1.png";
import web2 from "../images/web/web-2.png";
import web3 from "../images/web/web-3.png";
import web4 from "../images/web/web-4.png";
import web5 from "../images/web/web-5.png";
import web6 from "../images/web/web-6.png";

const HowUseWeb = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-custombgColor">
      <div className="px-5 md:px-0 md:mx-24 mb-24 sm:mx-12">
        {/* Breadcrumb Navigation */}
      <div className="container m-auto">
      <div className="md:pb-12 md:pt-12 pt-12 pb-5 flex flex-col md:flex-row gap-5 items-center justify-between border-btntextColor">
                 <div className="max-w-96">
                   <div className="bordctex flex gap-1">
                     <Link to="/help-center">Help center</Link>
                     <FaAngleRight className=" h-3 mx-1 my-auto" />
                     <Link to="/how-to-use-web">How Use Web</Link>
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

        {/* Section - Login into your Account */}

        <div className="container m-auto">
        <div className=" flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 sm:col-span-12 ">
            <h3 className=" font-bold text-2xl  lg:text-[32px] mb-5" id="navigate-through-app">
               Access & Sign Up
            </h3>           
              <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <b>Visit Our Website:</b> Go to [FastBetter.com] in your preferred browser.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <b>Create an Account:</b> Enter your email, choose a password, and verify your information.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <b>Personalize Your Profile:</b> Provide details like age, weight, height, and goals so we can tailor your fasting experience.                  
                </li>                
              </ul>
              
              <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{ lineHeight: "1.5" }}>
              <b>Note:</b> Always check with a healthcare professional before starting any new fasting or diet regimen, especially if you have a medical condition.
              </p>
          </div>
          <div className="md:col-span-4 sm:col-span-12 sm:pt-2 mt-10 md:mt-0 ">
            <img src={web1} alt="Login" className="w-auto h-auto m-auto"/>
          </div>
        </div>

        {/* Section - Navigate on the Website */}
        <div className="md:grid md:grid-cols-12 gap-8 items-center mt-12">
          <div className="md:col-span-4 sm:col-span-12  ">
            <img
              src={web2}
              alt="Navigation"
              className="w-auto h-auto m-auto"
            />
          </div>
          <div className="md:col-span-8 sm:col-span-12">
            <h3 className="font-bold text-2xl  lg:text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3">
               Choose a Fasting Plan
            </h3>
            
            <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{lineHeight:"1.5"}}>
              <b>Browse Fasting Schedules:</b> Select from common methods (16:8, 18:6, 20:4) or set up a custom plan.
              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}>
              <b>Beginner-Friendly:</b> If you're new to fasting, start with a shorter window (e.g., 12-14 hours) and adjust over time.

              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}>
              <b>Flexibility Matters:</b> Tweak your eating and fasting windows to fit your personal routine or work schedule.
              </li>
              
            </ul>
          </div>
        </div>

        {/* Section - Customize Your Meals */}
        <div className=" flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center mt-12">
          <div className="md:col-span-8 sm:col-span-12 ">
            <h3 className="font-bold text-2xl  lg:text-[32px] mb-3">Track Your Fasts Online</h3>

            <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{lineHeight:"1.5"}}> 
              <b>Start a Fast:</b> Click "Start Fasting" when your fasting window begins.
              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}> <b>End Your Fast:</b> Once it's time to eat, select "End Fast" to log and update your profile.
              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}><b>Food & Water Logs:</b> Use the logging tools to track water intake and meals. Keeping records helps pinpoint what's working best for you.
              </li>             
            </ul>            
          </div>
          <div className="md:col-span-4 sm:col-span-12 sm:pt-2 ">
            <img
              src={web3}
              alt="Customize meals"
              className="w-auto h-auto m-auto "
            />
          </div>
        </div>

        {/* Section - Log in Your Meals */}
        <div className="md:grid md:grid-cols-12 gap-8 items-center mt-12">
          <div className="md:col-span-4 sm:col-span-12 ">
            <img
              src={web4}
              alt="Log Meals"
              className="w-auto h-auto m-auto"
            />
          </div>
          <div className="md:col-span-8 sm:col-span-12">
            <h3 className=" font-bold text-2xl  lg:text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3">
              Notifications & Reminders
            </h3>
           
            <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{lineHeight:"1.5"}}>
              <b>Email Notifications:</b> Opt in for email alerts that remind you when to start or break your fast.
              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}><b>Browser Alerts (If Available):</b> Enable browser notifications for quick nudges right on your desktop.
              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}>
              <b>Motivational Prompts:</b> Get words of encouragement in-app or via email to help you stay consistent.
              </li>
              
            </ul>
           
          </div>
        </div>

        {/* Section - Customize Your Meals */}
        <div className=" flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center mt-12">
          <div className="md:col-span-8 sm:col-span-12 ">
            <h3 className="font-bold text-2xl  lg:text-[32px] mb-3">Explore Your Dashboard & Tools</h3>

            <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{lineHeight:"1.5"}}> 
              <b>Progress Overview:</b> Track your fasting streaks, weight changes, and other key stats in your personal dashboard.
              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}> <b>Meal Suggestions:</b> Access meal ideas that support healthy eating during your non-fasting windows.

              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}><b>Community Forum:</b> Connect with fellow fasters, share tips, and ask questions. Fasting is more fun with friends!</li>             
            </ul>            
          </div>
          <div className="md:col-span-4 sm:col-span-12 sm:pt-2 ">
            <img
              src={web5}
              alt="Customize meals"
              className="w-auto h-auto m-auto "
            />
          </div>
        </div>


        {/* Section - Log in Your Meals */}
        <div className="md:grid md:grid-cols-12 gap-8 items-center mt-12">
          <div className="md:col-span-4 sm:col-span-12 ">
            <img
              src={web6}
              alt="Log Meals"
              className="w-auto h-auto m-auto"
            />
          </div>
          <div className="md:col-span-8 sm:col-span-12">
            <h3 className=" font-bold text-2xl  lg:text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3">
            Troubleshooting & Support
            </h3>
           
            <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{lineHeight:"1.5"}}>
              <b>Help Center & FAQs:</b> Find solutions to common issues, detailed guides, and tips for overcoming plateaus.
              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}><b>Contact Support:</b> If you need more help, reach out at [support@fastbetter.com]. We're here to ensure your fasting journey is smooth.
              </li>        
              
            </ul>           
          </div>
        </div>

        {/* Section - Customize Your Meals */}
        <div className=" flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center mt-12">
          <div className="col-span-12 ">
            <h3 className="font-bold text-2xl  lg:text-[32px] mb-3">Final Tips</h3>

            <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{lineHeight:"1.5"}}> 
              <b>Hydrate Regularly:</b> Water, tea, and other non-caloric beverages can help ease hunger pangs.
              </li>
              <li className="mb-3" style={{lineHeight:"1.5"}}> <b>Know Your Limits:</b> Listen to your body and modify your schedule if you feel overly fatigued or unwell.</li>
              <li className="mb-3" style={{lineHeight:"1.5"}}><b>Stay Consistent:</b> Building a habit takes time-stick to your plan, track your results, and celebrate small victories.
              </li>             
            </ul>  
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{ lineHeight: "1.5" }}>
               We're thrilled to have you join the FastBetter community. Here's to a healthier, happier you—one fast at a time!
            </p>          
          </div>
          
        </div>

        </div>
      </div>

      
    </div>
  );
};

export default HowUseWeb;
