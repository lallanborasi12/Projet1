import { useEffect } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import searchlens from "../images/search-lens.png";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const General = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-custombgColor">
      <div className="px-5 md:px-0 md:mx-24 sm:mx-12">
        <div className="md:pb-12 md:pt-12 pt-12 pb-5 flex flex-col md:flex-row gap-5 items-center justify-between border-btntextColor">
          <div className="bordctex flex  items-center gap-1">
            <Link to="/help-center">Help center</Link>
            <FaAngleRight className=" h-3 mx-1 my-auto" />
            <Link to="/general">General Questions</Link>
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
              <img
                alt="lens Icon"
                className="w-1/2 justify-self-center"
                src={searchlens}
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mb-20">
          {/* Main Content */}
         <div className="col-span-12 md:col-span-9 order-last md:order-first">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-7 font-extrabold">General Questions</h1>

            {/* <-----------------Login Issues-------------> */}
            <div id="login-issues" className="mb-10">
               <h3 className="font-bold text-2xl lg:text-[32px] mb-3">Login Issues</h3>
               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you're experiencing trouble accessing your FastBetter account, follow these steps:</p>
                <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>1. Select "Log In" Instead of "Create an Account"</b></p>
                <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                  <li className="mb-2">When opening the app, ensure you tap <b>"Log in"</b> instead of <b>"Create an account"</b> to access your existing profile.</li>
                  <li className="mb-2">If the login screen does not appear, try <b>uninstalling and reinstalling the app.</b></li>
                </ol>
                <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>2. Check Your Email Address</b></p>
                <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                  <li className="mb-2">Make sure you are entering the <b>same email address</b> you used during registration, especially if you have multiple accounts.</li>                  
                </ol>
                <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>3. Reset Your Password</b></p>
                <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                  <li className="mb-2">If your login credentials seem incorrect, tap <b>"Forgot your password?"</b> on the login page.</li>
                  <li className="mb-2">A reset link will be sent to your registered email address. Check your <b>Spam or Promotions</b> folder if you don't see it in your inbox.</li>
                </ol>

                <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>Still Can't Log In?</b></p>
                <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you've tried all the steps above and still can't access your account, there may be an issue with your email, password, or a technical error.</p>
                <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                  <li className="mb-2"><b>Contact Our Support Team</b> - Click the "Contact Us" button below, and we'll assist you as soon as possible.</li>
                </ol>
                <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>We're here to help and will get you back into your account in no time! 😊</p>
            </div>




            {/* <-----------------About FastBetter-------------> */}
            <div id="about-fastBetter" className="mb-10">
              <h3 className="font-bold text-2xl lg:text-[32px] mb-3">About FastBetter</h3>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>FastBetter is your all-in-one <b>intermittent fasting tracker</b> designed to help you build healthier habits, stay on track, and achieve your wellness goals. Whether you're new to fasting or an experienced faster, our app provides the tools and insights needed to make intermittent fasting simple and effective.</p>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>How FastBetter Supports Your Fasting Journey:</b></p>
              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2"><b>Fasting Tracker:</b> Set your fasting goals, track your fasting windows in real-time, and receive reminders to start and break your fast.</li>
                <li className="mb-2"><b>Water Intake Monitor:</b> Stay hydrated and track your daily water consumption to support overall well-being.</li>
                <li className="mb-2"><b>Step & Activity Tracker:</b> Sync with your device to monitor movement and encourage an active lifestyle.</li>
                <li className="mb-2"><b>Progress Insights & Analytics:</b> View detailed reports on your fasting history, hydration levels, and activity to track improvements over time.</li>
                <li className="mb-2"><b>Personalized Guidance & Expert Tips:</b> Receive science-backed insights, fasting tips, and motivation to help you stay committed.</li>
                <li className="mb-2"><b>Beginner's Guide:</b> Get a <b>comprehensive intermittent fasting guide</b> upon signup, along with practical tips to make fasting easier and more effective.</li>
              </ol>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>Why Choose FastBetter?</b></p>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>
              Unlike other fasting apps, FastBetter <b>combines fasting, hydration, activity tracking, and expert insights</b> into one seamless experience. Whether you're fasting for <b>weight management, improved metabolism, or better overall health,</b> our app gives you the structure and support you need to succeed.
              </p>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>Start your fasting journey today with <b>FastBetter-your personal fasting companion!</b></p>

            </div>


            {/* <-----------------Download Issues-------------> */}
            <div id="download-issues" className="mb-10">
              <h3 className="font-bold text-2xl lg:text-[32px] mb-3">Download Issues & Login Glitch</h3>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>The <b>FastBetter app</b> is available for both <b>Apple</b> and <b>Android</b> devices. If you're experiencing issues while downloading or logging in, try the following:</p>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>1. <b>Ensure Correct Login Credentials</b></p>
              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">When entering your email, make sure there are <b>no extra spaces</b> before or after it.</li>
                <li className="mb-2">Passwords are <b>case-sensitive</b>, so double-check uppercase, lowercase letters, and symbols.</li>
              </ol>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>2. <b>Check App Store Availability</b></p>
              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">If you're unable to find the app in the <b>App Store</b> or <b>Google Play Store</b>, ensure you're signed in with the correct <b>Apple ID or Google account.</b></li>
              </ol>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>3. <b>Ensure Your Device is Updated</b></p>
              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">Make sure your <b>operating system</b> is updated to the latest version. Some older versions may not support the app properly.</li>
              </ol>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If the issue persists, please <b>contact our support team</b> using the <b>"Contact Us"</b> button below. We're happy to assist you!</p>
            </div>


            {/* <-----------------Accessing Fast-------------> */}
            <div id="accessing-fast">
               <h3 className="font-bold text-2xl lg:text-[32px] mb-3">Accessing FastBetter from Desktop</h3>
               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>You can access your <b>FastBetter</b> account from any browser by visiting https://fastbetter.com/. Simply log in with your <b>registered email address and password</b> to view your fasting progress, activity tracking, and account details.</p>

               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>Key Features on Desktop Access:</b></p>

               <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2"><b>Track Your Fasting Progress -</b> Monitor your fasting windows and history in one place.</li>
                <li className="mb-2"><b>View & Manage Your Profile -</b> Update your preferences and account settings.</li>
                <li className="mb-2"> <b>Access Analytics & Insights -</b> Review your fasting trends, hydration levels, and step tracking.</li>
               </ol>

               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>Trouble Logging In? </b></p>

               <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">Click <b>"Forgot Password?"</b> on the login page to reset your password.</li>
                <li className="mb-2">Ensure you're using the <b>same email address</b> you registered with on FastBetter.</li>
                <li className="mb-2">If you continue to experience issues, please reach out to <b>our support</b> team via the <b>"Contact Us"</b> button below.</li>
               </ol>
               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>Stay on top of your fasting journey anytime, anywhere!</p>
            </div>


            {/* <-----------------Not-Receiving-------------> */}
            <div id="not-receiving" className="mb-10">
              <h3 className="font-bold text-2xl lg:text-[32px] mb-3">Not Receiving Anything After Purchase?</h3>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you haven't received a confirmation email or access to your <b>FastBetter</b> subscription after purchasing, follow these steps:</p>
              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2"><b>Check Your Spam & Promotions Folders</b> Our emails may have been filtered into these folders, so please check them.</li>
                <li className="mb-2"><b>Download & Log Into the App</b> The FastBetter app is available for download on:
                   <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                    <li className="mb-2">Apple App Store</li>
                    <li className="mb-2">Google Play Store</li>
                   </ol>
                </li>
                <li className="mb-2"><b>Reset Your Password If Needed -</b> If your login credentials appear incorrect, tap <b>"Forgot your password?"</b> on the login page to reset it.</li>
                <li className="mb-2"><b>Still Need Help? -</b> If you haven't received any confirmation or still can't log in, please contact our support team using the "Contact Us" button below. We're here to assist you as soon as possible!</li>
              </ol>
            </div>



            {/* <-----------------Forgot Your-------------> */}
            <div id="forgot-your" className="mb-10">
              <h3 className="font-bold text-2xl lg:text-[32px] mb-3">Forgot Your Passcode?</h3>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you're unable to log into your FastBetter account due to incorrect login credentials, follow these steps to reset your password:</p>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>1. <b>Tap "Forgot Your Password?"</b></p>
              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">On the <b>FastBetter app login</b> screen, select the <b>"Forgot your password?"</b> option.</li>
              </ol>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>2. <b>Check Your Email</b></p>
              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">A password reset email will be sent to your <b>registered email address.</b></li>
                <li className="mb-2">If you don't see it, check your <b>Spam or Promotions</b> folder.</li>
              </ol>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>3. <b>Reset Your Password</b></p>
              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">Follow the instructions in the email to set a new password. Once completed, you'll be able to log in again.</li>                
              </ol>


              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>Still Need Help?</b></p>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you haven't received the reset email or need further assistance, please reach out to our <b>support team</b> using the <b>"Contact Us"</b> button below. We're happy to assist you!</p>

            </div>


             {/* <-----------------Intermittent-------------> */}
             <div id="intermittent" className="mb-10">
               <h3 className="font-bold text-2xl lg:text-[32px] mb-3">Intermittent Fasting Support Community</h3>
               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>Embarking on an intermittent fasting journey can feel like setting out on a long hike-you'll face challenges, but having a supportive group makes the journey smoother and more enjoyable.</p>
               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>You don't have to do it alone! Join the <b>FastBetter Facebook community</b>, where you can:</p>

               <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">Read <b>inspiring success stories</b> from fellow fasters who have achieved their goals.</li>
                <li className="mb-2">Get <b>practical tips and expert guidance</b> to make fasting easier and more effective.</li>
                <li className="mb-2"><b>Share your own experiences</b> and connect with others who understand your journey.</li>
                <li className="mb-2"><b>Celebrate milestones together</b> and stay motivated with group encouragement.</li>
               </ol>
             </div>


             {/* <-----------------Support Team-------------> */}
             <div id="support-team">
              <h3 className="font-bold text-2xl lg:text-[32px] mb-3">Support Team Contact Information</h3>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you need assistance, you can reach our FastBetter support team through the following options:</p>

              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2"><b>Help Center:</b> Use the <b>"Contact Us"</b> form available under each Help Center article (including this one!).</li>
                <li className="mb-2"><b>Live Chat:</b> Access real-time support through the <b>Help Center</b> or the <b>FastBetter app.</b></li>
                <li className="mb-2"><b>Phone Support:</b> Call us at <b>+357 9563 0190</b>, available from <b>9 a.m. to 9 p.m. EST.</b></li>
              </ol>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>Important Account Verification Information</b></p>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you contact support using an email different from the one linked to your <b>FastBetter account</b> we may require additional verification. Please have the following details ready:</p>

              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2"><b>For PayPal Payments:</b>
                  <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                    <li className="mb-2">Your <b>PayPal email address</b></li>
                    <li className="mb-2">A <b>screenshot of the transaction receipt</b></li>
                  </ol>
                </li>
                <li className="mb-2"><b>For Credit Card Payments:</b>
                  <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                    <li className="mb-2">The <b>full nameon</b> the account</li>
                    <li className="mb-2">The <b>last four digits</b> of the card used</li>
                    <li className="mb-2">A <b>screenshot or receipt of the charge</b></li>
                  </ol>
                </li>
                <li className="mb-2"><b>Your FastBetter Registered Email -</b> Ensure you provide the email used to create your account.</li>
              </ol>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>For security reasons, we may request these details for any billing or sensitive account inquiries.</p>

              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>No Response from Support?</b></p>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you have contacted our support team but haven't received a reply, please check:</p>
              <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2"><b>Spam or Junk Folder -</b> Our emails may have been filtered here.</li>
                <li className="mb-2"><b>Archived or Deleted Emails -</b> Ensure the email wasn't accidentally removed.</li>
                <li className="mb-2"><b>Email Filters & Forwarding Settings -</b> Some email settings may block or redirect messages.</li>
              </ol>
              <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you still haven't received a response, try reaching out through another contact method mentioned above.</p>
               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>Account Deletion</b></p>
               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>Important:</b> Deleting your account is <b>permanent and irreversible.</b> Once deleted:</p>

               <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">Your data cannot be recovered.</li>
                <li className="mb-2">Deleting your account does not cancel your subscription (if purchased via Google Play or the App Store). You must cancel your subscription separately.</li>
                <li className="mb-2">No automatic refunds - If you require a refund, contact customer support before deleting your account.</li>
               </ol>

               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>If you've purchased physical products and wish to return them, please contact us before deleting your account</b> so we can assist you.</p>

               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}><b>How to Delete Your Account</b></p>
               <ol className="list-disc text-base sm:text-lg 2xl:text-2xl mb-4 pl-10">
                <li className="mb-2">Open the <b>FastBetter</b> app.</li>
                <li className="mb-2">Go to the <b>Profile</b> section from the bottom menu.</li>
                <li className="mb-2">Select <b>My Information</b> under your profile.</li>
                <li className="mb-2">Scroll to the bottom and tap <b>Delete Account.</b></li>
                <li className="mb-2">Review the details regarding account deletion and confirm if you wish to proceed.</li>
                <li className="mb-2">Enter a reason for deletion and submit your request.</li>
               </ol>

               <p className="text-base sm:text-lg 2xl:text-2xl mb-2" style={{ lineHeight: "1.5" }}>If you need further assistance, don't hesitate to contact our <b>support team</b>. We're here to help!</p>
             </div>



         </div>


          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 leftboox md:sticky top-24  min-h-fit md:h-[475px] rounded-3xl bg-orgltbg">
            <div className="px-5 py-4 md:px-6 md:py-8">
              <ol className="litex space-y-2 pl-4">
                <li className="mb-1">
                  <a href="#login-issues" className=" hover:underline">
                    Login Issues
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#about-fastBetter" className=" hover:underline">
                    About FastBetter
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#download-issues" className=" hover:underline">
                    Download Issues & Login Glitch
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#accessing-fast" className=" hover:underline">
                     Accessing FastBetter from Desktop
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#not-receiving" className=" hover:underline">
                    Not Receiving Anything After Purchase?
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#forgot-your" className=" hover:underline">
                     Forgot Your Passcode?
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#intermittent" className=" hover:underline">
                     Intermittent Fasting Support Community
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#support-team" className=" hover:underline">
                     Support Team Contact Information
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

export default General;
