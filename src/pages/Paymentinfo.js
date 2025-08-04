import { useEffect } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import searchlens from "../images/search-lens.png";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { a } from 'react-router-dom'

const Paymentinfo = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="px-5 md:px-0 md:mx-24 sm:mx-12">
        <div className="md:pb-12 md:pt-12 pt-12 pb-5 flex flex-col md:flex-row gap-5 items-center justify-between border-btntextColor">
          <div className="max-w-96">
            <div className="bordctex flex gap-1">
              <Link to="/help-center">Help center</Link>
              <FaAngleRight className=" h-3 mx-1 my-auto" />
              <Link to="/payment-info">Payment Information</Link>
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
              Payment Information
            </h1>
            <h3 className="font-bold text-2xl lg:text-[32px]" id="request-refund">
              Our Refund Policy
            </h3>
            <div>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
                Please get in touch with our customer service within 14 days of your purchase if you want a refund and give specific details about the problem. Kindly be willing to show us some sort of visual evidence that the product was defective.
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
                If you want to ask for a refund, fill out the contact form below or send an email to support@fastbetter.com. Kindly make sure to include your email address from when you signed up as well as evidence of payment (a payment receipt or a snapshot of your bank account).
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
               All credits are applied to the original payment method for all returns.
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
                {" "}
                Visit our Terms & Conditions page at
                https://fastbetter.com/terms.html to learn more about this policy. 
              </p>
            </div>
            <h3
              className="font-bold text-2xl lg:text-[32px] pt-5 md:pt-6 2xl:pt-10 "
              id="membership-plan"
            >
              Membership Plan Prices
            </h3>
            <div>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
                We provide three different subscription packages. These are of different durations: three months, six months, and twelve months.
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
               
                Due to our seasonal and individualized discounts, meal plan costs might vary. Get the best deal right now by taking our 60-second questionnaire!
              </p>
            </div>
            <h3
              className="font-bold text-2xl lg:text-[32px] pt-5 md:pt-6 2xl:pt-10 "
              id="payment-been-declined"
            >
              Why has my Payment been Declined?
            </h3>
            <div>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
                You can pay via Paypal and most major credit card providers.
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
                {" "}
                Check your card information to be sure it hasn't expired if your payment was denied. To determine whether a purchase is feasible, don't forget to check your account limit and balance. Finally, confirm that foreign and online purchases are permitted with your credit card.
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
                {" "}
                Please get in touch with your bank or credit card provider if you are unable to complete your purchase. You can also use a different card or payment method as an alternative.
              </p>
              <p
                className="text-base sm:text-lg 2xl:text-2xl"
                style={{ lineHeight: "1.5" }}
              >
                {" "}
                It can also be a pre authorization if the purchase wasn't confirmed but you see a pending transaction in your bank account. Depending on your bank, preauthorization often expires within 7 days.
              </p>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 leftboox md:sticky top-24  min-h-fit md:h-[475px] rounded-3xl bg-orgltbg">
            <div className="px-5 py-4 md:px-6 md:py-8">
              <ol className="litex space-y-2 pl-4">
                <li>
                  <a href="#request-refund" className=" hover:underline">
                    Request a Refund
                  </a>
                </li>
                <li>
                  <a href="#membership-plan" className=" hover:underline">
                    Membership Plan Prices
                  </a>
                </li>
                <li>
                  <a href="#payment-been-declined" className=" hover:underline">
                    Why has my Payment been Declined?
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
export default Paymentinfo;
