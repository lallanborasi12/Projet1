import { useEffect } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import searchlens from "../images/search-lens.png";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
//import { a } from 'react-router-dom'

const Subscription = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="px-5 md:px-0 md:mx-24 sm:mx-12">
        <div className="md:pb-12 md:pt-12 pt-12 pb-5 flex flex-col md:flex-row items-center gap-5 justify-between border-btntextColor">
          <div className="max-w-96">
            <div className="bordctex flex justify-between items-center gap-1 ">
              <Link to="/help-center">Help center</Link>
              <FaAngleRight className=" h-3 mx-1 my-auto" />
              <Link to="/subscription">Subscription Management</Link>
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
        <div className="grid grid-cols-12 gap-5 mb-20">
          {/* Main Content */}
          <div className="col-span-12 md:col-span-9 order-last md:order-first">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-7 font-extrabold">
              Subscription Management
            </h1>
            <h3
              className="font-bold text-2xl lg:text-[32px] mb-3"
              id="how-pause-your-subscription"
            >
              How to Pause your Subscription?
            </h3>
            <div>
              <p
                className="text-base sm:text-lg 2xl:text-2xl mb-3"
                style={{ lineHeight: "1.5" }}
              >
                You have the option to pause your membership whenever you choose.
              </p>
              <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl ">
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  Go to{" "}
                  <a href="https://fastbetter.com/">
                  https://fastbetter.com/
                  </a>{" "}
                   to access the fastbetter website.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  Click the Login button at the top.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  {" "}
                  Use the same email address and password you use for the app to
                  log in.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  Tap the profile icon &gt; Subscription in the top-right
                  corner.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  {" "}
                  Select the length of the pause by clicking Pause Subscription,
                  then press Pause Subscription once more.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  {" "}
                  Select the cause of the pause, then click Submit.
                </li>
              </ul>
              <p
                className="text-base sm:text-lg 2xl:text-2xl mb-3"
                style={{ lineHeight: "1.5" }}
              >
                Your subscription can be put on hold for up to 30 days, and you
                can resume it whenever you want on the same website.
              </p>
            </div>
            <h3 className="font-bold text-2xl lg:text-[32px] mb-3 mt-5" id="how-cancel">
              How to Cancel?
            </h3>
            <div>
              <p
                className="text-base sm:text-lg 2xl:text-2xl mb-3"
                style={{ lineHeight: "1.5" }}
              >
                Note that our 3, 6, and 12-month membership plans are all recurring, and they all renew themselves when they run out of time. Please cancel your membership renewal if you decide not to continue with the program in order to stop being charged moving forward.
              </p>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{ lineHeight: "1.5" }}>Depending on where you bought it, you may need to manage your fastbetter membership. However, you can do it anytime, and it is pretty simple.</p>

              <p className="text-base sm:text-lg 2xl:text-2xl font-bold mt-5 mb-2">
                {" "}
                For <i>Subscription purchased via website:</i>
              </p>
              <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl ">
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  On the web page of your profile, you can find and manage the
                  details of your membership to the meal plan.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                Please select My Profile - Manage your subscription after signing in with your email address and password. You can check the status of your subscription and, if necessary, cancel it here.
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                You can cancel your fastbetter subscription renewal at any moment through the subscription period by sending a cancellation request via the Contact us button below if you're having any issues logging into your account or need any other help.
                </li>
              </ul>
              <p className="text-base sm:text-lg 2xl:text-2xl font-bold mt-5 mb-2">
                <i>For Subscription via Google Play: </i>
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl mb-3"
                style={{ lineHeight: "1.5" }}
              >
                <a
                  className="break-words"
                  href="https://support.google.com/googleplay/answer/7018481 "
                >
                  https://support.google.com/googleplay/answer/7018481{" "}
                </a>
              </p>
              <p className="text-base sm:text-lg 2xl:text-2xl font-bold mt-5 mb-2">
                <i>For Subscription via Apple Store: </i>
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl mb-3"
                style={{ lineHeight: "1.5" }}
              >
                Follow the steps on the website:{" "}
                <a href="https://support.apple.com/en-us/HT202039">
                  https://support.apple.com/en-us/HT202039
                </a>{" "}
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl mb-3"
                style={{ lineHeight: "1.5" }}
              >
                Note; Deleting the app will not cancel your subscription. Make
                sure to follow the steps above and see a confirmation that the
                subscription has been canceled.
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl mb-3"
                style={{ lineHeight: "1.5" }}
              >
                If you have already tried to follow the instructions above but can't find the option to cancel, it could be that you're checking on the wrong platform. For example, if fastbetter doesn't show up among your Apple subscriptions, try to cancel your membership on the fastbetter app.
              </p>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 leftboox md:sticky top-24  min-h-fit md:h-[475px] rounded-3xl bg-orgltbg">
            <div className="px-5 py-4 md:px-6 md:py-8">
              <ol className="litex space-y-2 pl-4">
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a
                    href="#how-pause-your-subscription"
                    className="hover:underline"
                  >
                    How to Pause your Subscription?
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#how-cancel" className="hover:underline">
                    How to Cancel?
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Subscription;
