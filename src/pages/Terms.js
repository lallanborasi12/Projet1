import { useEffect } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

const Terms = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="px-5 md:px-0 md:mx-24 sm:mx-12">
        <div className="grid grid-cols-12 gap-5 mb-20 mt-20">
          {/* Main Content */}
          <div className="col-span-12 md:col-span-9 order-last md:order-first">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-[64px] mb-7 font-extrabold">
              {" "}
              Terms & Condition{" "}
            </h1>
            <h3 className="font-bold text-[32px]" id="introduction">
              1. Introduction
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                This Agreement applies to every transaction between you (client)
                and the company.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                Before any Distance transaction, the client will get a durable
                copy of this Agreement electronically.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The company can also provide a free copy of this Agreement
                before making any Distance transaction to the clients so that
                they can review the company's policy.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                It is the responsibility of clients to go through this Agreement
                before using any of the company's services. The use of any
                service will be taken as that the clients has read and
                acknowledged the Agreement.
              </li>
            </ol>
            <p
              className="text-base sm:text-lg 2xl:text-2xl"
              style={{ lineHeight: "1.5" }}
            >
              This Agreement contains the arbitration provision which states
              that arbitration will be used to solve any dispute other than any
              court proceedings or jury trails.
            </p>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="definitions"
            >
              2. Definitions
            </h3>
            <p
              className="text-base sm:text-lg 2xl:text-2xl"
              style={{ lineHeight: "1.5" }}
            >
              The terms used in this agreement anywhere shall have the following
              meaning:
            </p>
            <ol
              style={{ listStyleType: "lower-alpha" }}
              className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl"
            >
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Agreement</b> - Agreement for providing meal plans based on
                Keto diet.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Client</b> - Anyone using the company's services.{" "}
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Company </b>- VOTARINI LTD, situated at Griva Digeni, 115, Trident Centre 3101, Limassol, Cyprus, with email support@fastbetter.com, duly incorporated under the laws of Cyprus. The Company is registered with the relevant authorities in Cyprus and operates in accordance with the laws and regulations of Cyprus.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Offer</b> - Offer to use the company's services offered by
                company to the client.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Privacy Policy</b> - The privacy policy used by the Company.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Services</b> - Offer to use the company's services offered by
                company to the client with all the website information.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Digital Content</b> - Personal fasting meal plans offered by
                the company.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Distance Contract</b> - A contract between company and the
                Client following the frameworks mentioned by company.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Website </b> - https://fastbetter.com/
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="consent-to-offer"
            >
              3. Consent To The Offer
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The company will will inform the client about availability of
                offer through company's website.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The client will have to enter certain information to receive the
                offer. The client is responsible to provide correct information
                on the website.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The client will receive the offer after providing certain
                information. The offer will include:
                <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                  <li className="mb-3" style={{ lineHeight: "1.5" }}>
                    <i className="las la-angle-right"></i>Cost of a single meal
                    plan
                  </li>
                  <li className="mb-3" style={{ lineHeight: "1.5" }}>
                    <i className="las la-angle-right"></i>Payment options
                    available at website
                  </li>
                  <li className="mb-3" style={{ lineHeight: "1.5" }}>
                    <i className="las la-angle-right"></i>Certain important
                    information which the company finds important
                  </li>
                </ul>
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                Consent to the offer - It will be taken as acceptance to the
                Terms &amp; Conditions once the client ticks the{" "}
                <i>"I agree with the Terms &amp; Conditions"</i> box and press
                the button <i>"Submit"</i>.
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="distance-contract"
            >
              4. Distance Contract
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The Distance contract will only be concluded once the client
                will accept the offer.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                Once the Client accepts the offer, the company will send a
                confirmation receipt electronically. The company will send the
                personal meal plans on the email ID provided on the website.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                Since the digital content is provided electronically, the client
                can not withdraw from this agreement.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                Even though the company makes sure to provide instant service,
                some of the services are depended on the internet which is not
                in the control of company. The company can not be held
                responsible for any error, viruses, intrusions, malware content
                or any other failure.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The Company is obligated to provide digital content to the
                clients only for the days they have paid for be it 90,180 or
                yearly. The services provided depend on the services opted for.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The company can change or expand its services anytime in the
                future and it is not responsible to notice the client. The
                company can also terminate any service or a part of the service
                without any obligation to the client.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The client also agrees that:
              </li>
            </ol>
            <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <i className="las la-angle-right"></i>He/she is not under 18
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <i className="las la-angle-right"></i>The client takes full
                responsibility for any unauthorized use by minors.
              </li>
            </ul>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="payment"
            >
              5. Payments
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                During the period mentioned in the Offer, the price will remain
                same for the Services being offered , except changes in
                VAT-tariffs.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The Client agrees to:
                <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                  <li className="mb-3" style={{ lineHeight: "1.5" }}>
                    <i className="las la-angle-right"></i>Pay all the additional
                    taxes including all the fees and charges
                  </li>
                  <li className="mb-3" style={{ lineHeight: "1.5" }}>
                    <i className="las la-angle-right"></i>Use a authorized mode
                    of payment
                  </li>
                  <li className="mb-3" style={{ lineHeight: "1.5" }}>
                    <i className="las la-angle-right"></i>Provide correct and
                    current information on the website. If the client provides a
                    false information, the company can terminate the offer
                    anytime and cannot be held for refund.
                  </li>
                </ul>
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The Client will be transferred to some third party payment
                service provider and the risk associated with it would pass to
                the Client. The company does not store any sensitive or personal
                data. The company can not be held responsible for any third
                party payment disputes.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                All prices and costs mentioned on the website are in US Dollars.
              </li>
            </ol>
            <p className="text-base sm:text-lg 2xl:text-2xl font-bold mt-3 2xl:mt-4 mb-3">
              Refund Policy
            </p>
            <p
              className="text-base sm:text-lg 2xl:text-2xl"
              style={{ lineHeight: "1.5" }}
            >
              The Company doesn't claim or follow a refund policy, unless the
              digital product in the form of a meal plan including recipes, is
              anyhow proven to be not as described. And if such cases happen,
              the Client is supposed to contact our customer support at{" "}
              <b className="mail">support@fastbetter.com</b> and provide
              detailed information proving the Company's product not as
              described. Once the requested refund is issued, the Client won't
              have the access to the Company's services. All refunds are
              subjected to the original method of payment. On the purchase of
              digital services, the Client agrees to this refund policy and
              withdraws any rights to subject it to any questions, judgment, or
              legal actions.
            </p>
            <p
              className="text-base sm:text-lg 2xl:text-2xl"
              style={{ lineHeight: "1.5" }}
            >
              The company declares that local charges (taxes etc.) may occur,
              depending on your region and tax laws. These charges are supposed
              to be owned by the customers, not the company.
            </p>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="intellectual-property"
            >
              6. Intellectual Property Rights
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                All the trademarks rights, design rights, copyright and patent
                rights are owned by the company can not not be used otherwise.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The client can not disassemble, reproduce, distribute, publish
                any of the company's property in part or in whole without
                company's consent.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The Client grants to Company a fully paid up, royalty-free, non
                exclusive license to reproduce, display, distribute, modify, or
                use the client's content to the extent permitted by law. User
                content includes - images, communications, creative works,
                writings or any User Trademarks.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                No component part of this Agreement can be interpreted as a
                transfer of intellectual property.
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="use-digital-content"
            >
              7. Use Of Digital Content
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                All intellectual property rights or any digital content are
                owned by the Company and the client can only use a limited,
                non-exclusive or non transferable content provided by Company.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                These Terms &amp; Conditions are applicable for a term of 5
                years from the date of offer unless earlier suspended or
                terminated.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The client shall not lend, reproduce or edit the Digital content
                for any third party's use.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The company can limit the number of devices on which the digital
                content can be used.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                If the clients breach any of the rules, the Company may debar
                access to the in-dispute Digital content.
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="sale-digital-content"
            >
              8. Sale of Digital Content Prohibited
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The client can not sale, offer to sale, share, rent or lend the
                digital content of the website.
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="privacy-policy"
            >
              9. Privacy Policy
            </h3>
            <p
              className="text-base sm:text-lg 2xl:text-2xl"
              style={{ lineHeight: "1.5" }}
            >
              Client's data is governed by the Privacy Policy which you can
              found on the Website. Client should have a printed copy of this
              agreement alongside Privacy Policy.
            </p>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="indemnity"
            >
              10. Indemnity
            </h3>
            <p
              className="text-base sm:text-lg 2xl:text-2xl"
              style={{ lineHeight: "1.5" }}
            >
              The client agrees to indemnify the company and its officers,
              directors affiliates, agents, employees, legal representatives,
              subsidiaries or suppliers from any sort of claim or demand which
              may arise due to the violation of Privacy policy.
            </p>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="liability"
            >
              11. Liability
            </h3>

            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                It is the sole responsibility of client to verify all the
                information mentioned on the website. Some of the information
                may come as inappropriate or unsatisfactory. Any decisions made
                on the basis of the information mentioned on the website will be
                their own and they can not held the website responsible.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The client agrees that the company can not be held liable for
                any damage whatsoever even if the company was informed and
                advised of any such damage. The company's aggregate liability
                shall not exceed one hundred dollars ($100). The damage may
                happen due to:
                <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
                  <li className="mb-3" style={{ lineHeight: "1.5" }}>
                    <i className="las la-angle-right"></i>Inability to use the
                    services
                  </li>
                  <li className="mb-3" style={{ lineHeight: "1.5" }}>
                    <i className="las la-angle-right"></i>Information provided
                    on the website
                  </li>
                  <li className="mb-3" style={{ lineHeight: "1.5" }}>
                    <i className="las la-angle-right"></i>Misinterpretation of
                    any services
                  </li>
                </ul>
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The Company shall not be held responsible for any loss caused by
                the riot, war or any natural disaster or due to any such
                occurrences for which the Company is not responsible like
                traffic hold-ups, strike, lock-out etc.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The liability of the company is directly proportional to the
                individual loss unless provided by the applicable laws.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The company takes no guarantee for any results or outcome using
                the company's services as individual results may vary and it
                depends on the client's adherence to work.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The Website may contain links which may direct the user to other
                websites which are not controlled by the Company. The company is
                not responsible for the content mentioned on other websites or
                any loss caused by following those websites.{" "}
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="medical-disclaimer"
            >
              12. Medical Disclaimer
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                Before following any meal plan mentioned by the company, the
                client should consult with his/her doctor first.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The company is not related with any medical organization neither
                it provides any medical assistance. The services offered by the
                company can not be interpreted as medical advice. The client
                will be held responsible to misinterpret any information as
                medical assistance.{" "}
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="validity-termination"
            >
              13. Validity and Termination
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                This Agreement will be effective as soon as the Client accepts
                and expresses consent to follow it. They will remain in effect
                unless terminated by the company.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The Company can terminate the relationship with Client at any
                time if:
              </li>
            </ol>
            <ul className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <i className="las la-angle-right"></i>The Client does not agree
                with this Agreement
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <i className="las la-angle-right"></i>Client breaches this
                Agreement
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <i className="las la-angle-right"></i>Client provides incorrect
                information{" "}
              </li>
            </ul>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="changes-agreement"
            >
              14. Changes to Agreement
            </h3>
            <p
              className="text-base sm:text-lg 2xl:text-2xl"
              style={{ lineHeight: "1.5" }}
            >
              This Agreement, Terms &amp; Conditions and privacy policy are
              subject to change. The company can add, modify or remove any item
              from the website and will notify the clients. The company may ask
              the client to acknowledge the updates by agreeing on new Terms and
              Conditions.
            </p>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="communication"
            >
              15. Communication
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                Company's preferred mode of communication is Email. The client
                should have a valid and active email ID to maintain
                communication with the website and to know about the latest
                updates of the website. The client is requested to check the
                email regularly to follow the website.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                If it is required to provide the information on a durable
                platform, the company will send the email with an downloadable
                attachment which the client can save it on their person. It will
                be the responsibility of client to save the documents for any
                future reference.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The clients can request a durable copy of this Agreement or any
                other document by contacting{" "}
                <b className="mail">admin@fastbetter.com</b>.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The official language of website is English and all the
                communication with client will be made in English, unless the
                concerned party prefers to communicate in another language.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The Client can contact the website any time by sending a mail to{" "}
                <b className="mail">admin@fastbetter.com</b>.
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="dispute-resolution"
            >
              16. Dispute Resolution
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Governing Law</b> - This Agreement is governed by the laws of
                India regardless of Client's location.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Informal Dispute Resolution</b> - Any dispute or complaint
                concerning the service of the company should be first addresses
                by contacting on <b className="mail">admin@fastbetter.com</b>.
                The company may take upto 14 days to reply and acknowledge the
                complaint. If the issue is not resolved within 30 days, the
                client can file a formal claim.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                <b>Arbitration</b> - All the arguments and claims shall be
                solved through a neutral arbitrator and not in the court or by a
                jury. Some disputes can be resolved by Small Claims Court also.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The client agrees that the arbitrator for the dispute will be on
                a individual basis and the class arbitrators are not permitted.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The client can opt out of this agreement to use the arbitrate by
                emailing at <b className="mail">admin@fastbetter.com</b> with
                their name 5 and address within 30 days of accepting the offer.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The complete arbitration will be handled by the American
                Arbitration Association under the Consumer Arbitration Rules.
                The Client can access these Rules online at
                https://www.adr.org/consumer. The arbitrator's decision will be
                final and binding.{" "}
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="miscellaneous"
            >
              17. Miscellaneous
            </h3>
            <ol className="list-decimal pl-6 leading-6 md:leading-7 text-base sm:text-lg 2xl:text-2xl">
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                Clients can not assign rights of this Agreement to a third party
                without having the prior consent of the Company. The Company can
                assign its rights and obligations mentioned here to any third
                party.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                If a part of this Agreement is found to be unlawful, invalid, or
                unenforceable then that part shall be deleted from the the
                Agreement, which shall act to be valid.
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                The use of any of the services mentioned on the website is
                solely at client's own risk. The company offers no warranty that
                the website or services mentioned in it will meet client's
                requirements and expectations, or would be secure,
                uninterrupted, timely, accurate or, complete. The company does
                not claim to cure any disease nor to prevent one. If the client
                is unsatisfied with the website, he/she can cease to use it.{" "}
              </li>
              <li className="mb-3" style={{ lineHeight: "1.5" }}>
                By accessing the website or using the services offered in it,
                the client hereby acknowledges and agrees that he/she has read
                the agreement and agrees to follow its terms and conditions.{" "}
              </li>
            </ol>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="plan-terms-condition"
            >
              18. Plan Terms &amp; Condition
            </h3>
            <p
              className="text-base sm:text-lg 2xl:text-2xl"
              style={{ lineHeight: "1.5" }}
            >
              When you Agree to the Terms &amp; Conditions and Privacy policy
              you also agree to be <b>charged $14.99/ every one months</b> if
              you chose this plan or <b>$35.50 every three months</b> if you
              chose a six-month plan. You will be{" "}
              <b>
                charged $54.50 every six month if you go with a yearly program
              </b>{" "}
              with us. You will be{" "}
              <b>
                charged now and every 90,180,365 days as per the program you
                chose
              </b>
              . The charges will be deducted until you cancel the subscription
              or when the subscription will automatically expire. You will
              receive an electronic notification 3 to 5 days prior to any
              transaction and a receipt after each successful transaction. You
              can cancel anytime by simply mailing&nbsp;support@fastbetter.com
              for the cancelation or refund. You can talk to the support through
              our Chat system too for quicker solutions.
            </p>
          </div>
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 leftboox md:sticky top-24  min-h-fit md:h-[475px] rounded-3xl bg-orgltbg">
            <div className="px-5 py-4 md:px-6 md:py-8">
              <ol className="litex space-y-2 pl-4">
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#introduction" className=" hover:underline">
                    Introduction
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#definitions" className=" hover:underline">
                    Definitions
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#consent-to-offer" className=" hover:underline">
                    Consent To The Offer
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#distance-contract" className=" hover:underline">
                    Distance Contract
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#payment" className=" hover:underline">
                    Payments
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#intellectual-property" className=" hover:underline">
                    Intellectual Property Rights
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#use-digital-content" className=" hover:underline">
                    Use Of Digital Content
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#sale-digital-content" className=" hover:underline">
                    Sale of Digital Content Prohibited
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#privacy-policy" className=" hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#indemnity" className=" hover:underline">
                    Indemnity
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#liability" className=" hover:underline">
                    Liability
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#medical-disclaimer" className=" hover:underline">
                    Medical Disclaimer
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#validity-termination" className=" hover:underline">
                    Validity and Termination
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#changes-agreement" className=" hover:underline">
                    Changes to Agreement
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#communication" className=" hover:underline">
                    Communication
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#dispute-resolution" className=" hover:underline">
                    Dispute Resolution
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#miscellaneous" className=" hover:underline">
                    Miscellaneous
                  </a>
                </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}>
                  <a href="#plan-terms-condition" className=" hover:underline">
                    Plan Terms &amp; Condition
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

export default Terms;
