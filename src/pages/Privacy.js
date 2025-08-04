import {useEffect} from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
const Privacy = () => {
  useEffect(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, []);
  return (
    <div>
      <div className='px-5 md:px-0 md:mx-24 sm:mx-12'>
        <div className="grid grid-cols-12 gap-5 mb-20 mt-20">
          {/* Main Content */}
          <div className="col-span-12 md:col-span-9 order-last md:order-first">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-[64px] mb-7 font-extrabold"> Privacy Policy</h1>
            <p className="text-base sm:text-lg 2xl:text-2xl" style={{lineHeight:"1.5"}}>In this privacy policy we, fastbetter, VOTARINI LTD, Griva Digeni, 115, Trident Centre 3101, Limassol, Cyprus. state how we handle the personal data (email-Id) when someone use our app, visits our website, contact us or uses our services.</p>
            <p className="text-base sm:text-lg 2xl:text-2xl" style={{lineHeight:"1.5"}}>You will be asked to agree to our use of our cookies when you first visit our website. Here you will find the answer for the following: </p>
           <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>How we use user's data</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Why we provide data to third parties</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>For how long we store the data </li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Our marketing policy </li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Your data rights</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Our cookies use</li>
            </ul>
            <p className="text-base sm:text-lg 2xl:text-2xl" style={{lineHeight:"1.5"}}>If you have any inquiry or you want to make a request, you can contact us by email. Just send an email on <a href="#">admin@fastbetter.com</a> your query will be resolved shortly. All the terms used here are same as mentioned in company's Terms and Conditions unless expressed otherwise. This privacy policy is an integral part of company's Conditions and unless there is a different version comes, this English version will prevail.</p>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="how-we-use-data">1. How Do  We Use User's  Data? </h3>
           <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>
                This section will provide the following information:
               <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Type of data we collect</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>The source of data collected</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>The purpose for which the data is collected</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Legal rules related with it</li>
                </ul>
              </li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We process information which you provide to us by filling several questionnaires. The data can be your name, email address, account transaction details and other information which you provide willingly. The service data is used to provide better website experience also and to make things like signing up, easy. When you agree to our terms and conditions, you give consent to collect your data.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We may process your messaging data which you provide by subscribing to us. It may be used to provide you relevant offers concerning your interest. These mails will be sent only with your consent and you can always opt out from those messages. The company can also send mails to improve customer relations.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We may process any information that you sent to us by maintaining communication with us. The main motive of this correspondence data is to maintain communication with you and to record your data. It can be used to improve our website and maintaining proper administration of our business. It can also be used to dissolve disputes between you and one of our employees.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We may process your device data on which you use our website. It may include IP address, screen resolution, device type and location (in some cases). These kind of data are collected through cookies. This data is used to know more about how you use our website and how can we secure your website experience. The legal reason to collect this data is to improve our website and user experience.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We may process some of your personal data (email-Id) which you provide willingly on the website. We do not share this kind of data with anyone except whenever demanded by a court order. This data is collected to secure user's and our legal rights.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We may also collect your personal data (email-Id) to comply with law to protect our and your vital interest.</li>
            </ol>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="data-disclosure">2. When We Disclose personal data (email-Id) To Others?</h3>
           <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>We can or may share your data with any partner company of our group. It can be our subsidiary branch or any of the holding company.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We may share your personal data (email-Id) with a insurer or any professional advisers for the purposes of maintaining insurance coverage, obtaining professional advice,  managing risks, or to manage legal claims either in court or in out of court dispute.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We may share the personal data (email-Id) with an anti-fraud company in order to protect your personal data (email-Id).</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}> We may share the personal data (email-Id) with our payment service providers to process the payments and manage the funds.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We may share the personal data (email-Id) with a service providers to maintain several services of our website such email service, research service and such.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We may share your personal data (email-Id) whensoever it is required by law to meet any legal obligation I order to secure our interest.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>To get more information regarding our safeguards, you can mail us at <a href="#">admin@fastbetter.com</a>.</li>
            </ol>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="data-storage-duration">3. The Duration For Which We Store Your Data?</h3>
           <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>
                Your personal data (email-Id) is stored for as long as it is necessary to maintain legal records. The time duration for different sort of data is as follows:
               <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Service data is stored for no longer than 5 years</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Messaging data is stored for no longer than 2 years</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Correspondence data is stored for no longer than 6 months</li>
                </ul>
              </li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>It is not necessary to specify the data by us and some of the data is kept for the relevant processing period.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We are obliged to store some personal data (email-Id) to meet any legal obligation which may arise in the future.</li>
            </ol>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="marketing-messages">4. Marketing Messages</h3>
           <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>With your consent, we will send marketing mails and messages which may contain our latest services and offers.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>You can choose to opt out of any messages before or during the service.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>If you opt out of any communication, you will get a message stating that you will not get marketing messages in future.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Due to the closely related network services, you may get marketing messages for a while until the website processes your request.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Stopping marketing messages won't stop you from receiving service related communications.</li>
            </ol>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="your-rights">5. Your Rights</h3>
           <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>Here are your summarized rights which comes under the Data Protection Law. It is a brief summary of such laws and we request you to read the detailed version which you can get from the regulation authorities.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>
                You have the following rights:
               <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Right to request to delete your personal data (email-Id)</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Right to access data</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Right to rectification</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Right to set a processing limit on your personal data (email-Id)</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Right to object on processing of your data</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Right to complain to the authority</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Right to withdraw consent</li>
                  <li className='mb-3' style={{lineHeight:"1.5"}}>Right to data portability</li>
                </ul>
              </li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>You have the right to access your personal data (email-Id) and you can know the details of processing of data. You can get a hard copy of your personal data (email-Id) free of charge for the first time but you have to pay for it for any further copies.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>You have the right to rectify any data which you find to be incorrect. </li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>You have the right to ask to delete all your personal data (email-Id). It normally happens when the user withdraw his/her consent, the user terminates the service or it is required by law. </li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>You have the right to restrict the processing of your data.  It normally happens when you do not give your consent to process your data or find your personal details to be inaccurate.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>You have the right to uphold you consent to process your data for any marketing purpose. Once you object for it, your data won't be provided for any marketing purpose.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>You have the right to uphold you consent to process your data for any statistical, historical or scientific research purpose. Once you object for it, your data won't be provided for any such research works.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>You have the right of data portability. You can receive a electrically readable document containing your structured personal data (email-Id).</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>If you think that your data is being mistreated, you have the right to file a complaint with the supervisory authority obligated for data protection.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>You can use any of the rights mentioned here by contacting us at <a href="#">admin@fastbetter.com</a>.</li>
            </ol>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="cookies">6. Cookies</h3>
           <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>Cookies are those textual files which contains identifier which is sent by the web server to the web browser and is further filed by the browser. It is then sent back to the server whenever the browser requests a pre-loaded page from the server.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Cookies do not contain personally identifiable information but some of the information might link itself from the information we store.</li>
            </ol>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="cookies-we-use">7. Cookies That We Use</h3>
           <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>We use three types of cookies on our website. They are:</li>
            </ol>
           <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}><b>Functional Cookies</b> - To enhance the user experience and to improve services</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}><b>Required Cookies</b> - To make sure the website run smoothly and follows all the security concerns</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}><b>Advertising Cookies</b> - To observe user's online behavior to to provide optimized marketing information </li>
            </ul>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="cookies-by-service-providers">8. Cookies Used By Our Service Providers </h3>
           <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>Our service providers uses cookies and some of those might be stored on your system.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>We use the following cookies:</li>
            </ol>
           <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>YouTube cookies to display YouTube content on our website. Click here to read YouTube's privacy policy. </li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Google Analytics cookies to monitor our website traffic. It helps us find website errors and to measure website bandwidth. Click here to read Google Analytics' privacy policy.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Twitter cookies to display Twitter content posted on our website. Click here to read Twitter's privacy policy. </li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Double-click cookies to show ads on our website. These cookies helps us identify our users who uses any of our services. Click here to read Double-click privacy policy.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Google Maps cookies to determine user location. You can opt to ignore it if you do not want to share your location with use. These cookies helps us know about the user's location. Click here to read Google Map's privacy policy.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Google Tag Manager cookies to manage advertising cookies. These cookies helps us display the best suited ads to the users. Click here to read Google Tag Manager privacy policy.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Facebook cookies to show ads on our website. These cookies helps us identify our users who uses any of our services. Click here to read Facebook's privacy policy.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Hotjar cookies to know about how a user uses our website. These cookies helps us manage our website and to enhance user experience. Click here to read Hotjar's privacy policy.</li>
            </ul>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="manage-cookies">9. How Can You Manage Cookies? </h3>
           <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className='mb-3' style={{lineHeight:"1.5"}}>You can refuse the use of cookies on the browser you are using and also delete the already existing cookies. You can find the relevant information on any of the browser such as Firefox, Chrome, Safari or Internet Explorer.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>If you block cookies on all the websites, you might be able to use some websites effectively.</li>
              <li className='mb-3' style={{lineHeight:"1.5"}}>Blocking the cookies will also impact your user experience on our website and you won't be able to use many features.</li>
            </ol>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="third-party-websites">10. Third Party Websites </h3>
            <p className="text-base sm:text-lg 2xl:text-2xl" style={{lineHeight:"1.5"}}>Our website includes several links which may be from our partner sites or any third party websites. Keep in mind that we do not control those websites and they have their own set of privacy policy. Please ensure all the aspects before going into any transaction with them. Under no circumstances you can held us responsible for any loss which you might face using any third party services</p>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="update-data">11. Updating Your Data</h3>
            <p className="text-base sm:text-lg 2xl:text-2xl" style={{lineHeight:"1.5"}}>If you think that you have provided some incorrect data, contact us with the correct data and we would update it.</p>
            <h3 className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3" id="notice-updates">12. Update And Changes To The Notice</h3>
            <p className="text-base sm:text-lg 2xl:text-2xl" style={{lineHeight:"1.5"}}>We will inform our users to any updates or changes made here via email and it will also be published on the website.</p>
          </div>
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 leftboox md:sticky top-24  min-h-fit md:h-[475px] rounded-3xl bg-orgltbg">
            <div className="px-5 py-4 md:px-6 md:py-8">
              <ol className='litex space-y-2 pl-4'>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#how-we-use-data" className=" hover:underline">How Do We Use User's Data?</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#data-disclosure" className=" hover:underline">When We Disclose Personal Data (Email-ID) To Others?</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#data-storage-duration" className=" hover:underline">The Duration For Which We Store Your Data?</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#marketing-messages" className=" hover:underline">Marketing Messages</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#your-rights" className=" hover:underline">Your Rights</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#cookies" className=" hover:underline">Cookies</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#cookies-we-use" className=" hover:underline">Cookies That We Use</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#cookies-by-service-providers" className=" hover:underline">Cookies Used By Our Service Providers</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#manage-cookies" className=" hover:underline">How Can You Manage Cookies?</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#third-party-websites" className=" hover:underline">Third Party Websites</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#update-data" className=" hover:underline">Updating Your Data</a></li>
                <li className='mb-3' style={{lineHeight:"1.5"}}><a href="#notice-updates" className=" hover:underline">Update And Changes To The Notice</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy