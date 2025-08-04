
import { FaArrowUp } from "react-icons/fa";
import Body from "../images/body.svg";
import mind from "../images/mind.svg";
import lifestyle from "../images/lifestyle.svg";
import data from "../images/data.svg";
import { Link } from "react-router-dom";

const WeightLoss = () => {
  return (
    <>
      <div className="px-4 md:px-7 lg:px-10 my-20 2xl:my-20 " id="approachId">
        <div className="container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative">
              <h3 className="text-lg text-orgbg flex flex-wrap items-center">
                <hr className="mt-1 mr-2 w-6 h-[2px] bg-orgbg" />
                   Our Approach
                </h3>
              <div className="relative wgtwrap mt-14 pb-10 sm:pb-0">
                <h2 className="text-3xl font-bold mb-5 flex flex-row flex-wrap items-center">
                  Sustainable Weight Loss, Smarter Solutions{" "}
                  <hr className="mt-2 w-6 h-[3px] bg-black" />
                </h2>
                <p className="mb-3 text-lg">
                  Fastbetter's program goes beyond dieting-it addresses
                  nutrition, metabolism, and lifestyle to create lasting change.
                  By treating the whole person, we help you build healthy
                  habits, optimize your body's natural processes, and achieve
                  sustainable results.
                </p>
                <p className="mb-3 text-lg">
                  Take control of your health with a smarter, more effective
                  approach to weight loss.
                </p>
                <div className="relative max-w-[250px] sm:max-w-[200px]  w-full  mt-6">
                  <Link to={"https://glb.fastbetter.com/"} className="cursor-pointer">
                  <input
                    id="getstart"
                    value="Get Started"
                    className="cursor-pointer pl-6 md:pr-12 py-2 rounded-[40px] focus:outline-none focus:ring-0 placeholder:text-base placeholder:font-bold placeholder:text-white h-11 md:h-12 w-full bg-orgbg pr-12 text-white font-bold"
                    type="button"
                  />

                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-[50%] bg-white flex justify-center items-center">
                    <FaArrowUp className="text-orgbg rotate-45" />
                  </span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-1 xs:grid-cols-2 gap-5 relative  wgtloss">
              <div className="p-6 xl:p-8 relative bdr gr1">
                <img src={Body} />
                <h3 className="text-lg font-bold mt-5 mb-2">Body</h3>
                <p>
                Make better food choices and 
                lose weight without feeling hungry or deprived.
                </p>
              </div>
              <div className="p-6 xl:p-8 relative bdr gr2">
                <img src={mind} />
                <h3 className="text-lg font-bold mt-5 mb-2">Mind</h3>
                <p>
                Stay accountable, supported and motivated with 1-on-1 coaching at no extra cost. You are 3X more likely to lose weight with a coach than on your own.
                </p>
              </div>
              <div className="p-6 xl:p-8 relative bdr gr3">
                <img src={lifestyle} />
                <h3 className="text-lg font-bold mt-5 mb-2">Life Style</h3>
                <p>
                Work with your coach in the fastbetter app to customize a program around your routine. Make tweaks to your meals and activities that are doable long-term.
                </p>
              </div>
              <div className="p-6 xl:p-8 relative bdr gr4">
                <img src={data} />
                <h3 className="text-lg font-bold mt-5 mb-2">Data</h3>
                <p>
                Self-monitoring is proven to positively impact weight loss. View your sleep, food and fitness data all in one place, including from Apple Health, Google Fit and wearables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeightLoss;
