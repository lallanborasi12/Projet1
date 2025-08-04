import Startimg from "../images/getstarbg.jpg";
import Mobile from "../images/mobile.jpg";
import Mobile2 from "../images/mobile-2.png";
import Apple from "../../src/images/apple.svg";
import Googleplay from "../../src/images/googleplay.svg";
import getsupportbg from "../../src/images/getsupportbg.png";

const GetStart = () => {
  return (
    <>
      <div className="px-4 md:px-7 lg:px-10 my-10 2xl:my-20 ">
        <div className="container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[60px] overflow-hidden relative">
              <img
                src={Startimg}
                alt="Get Start"
                className="w-full h-[664px] object-cover"
              />
              <div
                className="p-6 2xl:p-8 absolute bottom-0 rounded-[60px] bg-cover bg-no-repeat bg-center w-full"
                style={{ backgroundImage: `url(${getsupportbg})` }}
              >
                <h3 className="text-3xl text-white font-bold">
                  Get Started Today
                </h3>
                <p className="2xl:text-lg text-base text-white my-1">
                  Download the Fastbetter app and take the first step toward a
                  healthier you. Access personalized plans, expert guidance, and
                  tools to track your progress—all in one place.
                </p>
                <div className="flex flex-row gap-2 mt-4">
                  <div className="bg-blkbg px-5 rounded-lg flex justify-center items-center mb-4 py-2 gap-1 max-w-[140px] w-full text-white leading-normal">
                    <img src={Apple} alt="Apple" className="max-h-5 h-full" />
                    App Store
                  </div>
                  <div className="bg-blkbg px-5 rounded-lg flex justify-center items-center mb-4 py-2 gap-1 w-[154px] text-white leading-normal">
                    <img
                      src={Googleplay}
                      alt="Android"
                      className="max-h-5 h-full"
                    />
                    Google Play
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[60px] overflow-hidden px-10 bg-cover bg-center w-full h-[664px] flex align-middle"
                style={{ backgroundImage: `url(${Mobile})`}}
                >
                <img
                    src={Mobile2}
                    alt="Mobile" className="max-h-[90%] m-auto"/>
                </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default GetStart;
