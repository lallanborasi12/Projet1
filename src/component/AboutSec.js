import aboutImg from "../images/aboutImg.png"
import aboutImg2 from "../images/aboutImg2.png"
import aboutbgSec from "../images/aboutbg-sec.png"
import arrow from "../images/arrow.png"
import review1 from "../images/review-1.png"
import review2 from "../images/review-2.png"

export default function AboutSec() {
  return (
    <div className="px-4 md:px-7 lg:px-10 my-10 2xl:my-12">
      <div className="container m-auto">
        <div className="bdr mds4 relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-10 bg-left md:bg-center p-5 md:p-8 lg:p-10" style={{
                backgroundImage: `url(${aboutbgSec})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
          <div>
            <h2 className="text-3xl font-bold mb-5 flex flex-row flex-wrap items-center text-[#18192B]">
              Transforming Health, <br/> One Step at a Time
            </h2>
            <p className="mb-3 text-lg text-[#18192B]">
              At Fastbetter, we believe that achieving a healthy weight isn't
              just about dieting—it's about creating lasting lifestyle changes.
              Our program is designed to address every aspect of weight
              management, including nutrition, mindset, and habits, to help you
              achieve sustainable results.
            </p>
          </div>
          <div className="flex gap-4 xl:gap-7 flex-col xs:flex-row justify-center max-w-[596px] m-auto xs:ml-auto">
            <div className="flex-1">
               <img src={aboutImg2} alt="img-about" className="m-auto"/>
               <div className="p-7 xs:p-4 sm:p-5 xl:p-7 bg-white mt-3 xl:mt-6 abountrnd">
                  <div className="flex gap-2 justify-between items-center mb-2"><h2 className="text-lg lg:text-2xl font-bold text-[#18192B]">30,000+</h2>
                  <img src={arrow} alt="arrow"/></div>
                  <p className="text-sm xs:text-xs xl:text-sm text-[#18192B]">Happy users who Transformed them with Fastbetter!</p>
                  <span className="bg-[#FF9950] h-[2px] block my-3 xl:my-5"></span>
                  <img src={review1} alt="review" className=" mb-3 xl:mb-5 w-20 xl:w-auto"/>
                  <img src={review2} alt="review" className="w-36 xl:w-auto"/>
               </div>
            </div>
           <div className="flex-1">
             <img src={aboutImg} alt="img-about" className="m-auto"/>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
