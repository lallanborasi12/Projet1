import { useEffect } from "react";
const CookiePolicy = () => {
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
              Cookie Policy{" "}
            </h1>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              Cookies and other Identifiers consist of portions of code
              installed in the browser that assist the Owner in providing the
              Service according to the purposes described. Some of the purposes
              for which Cookies are installed may also require the User's
              consent.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              Where the installation of Cookies is based on consent, such
              consent can be freely withdrawn at any time following the
              instructions provided in this document.
            </p>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="technical-cookies"
            >
              Technical Cookies and Cookies serving aggregated statistical
              purposes
            </h3>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>
                Activity strictly necessary for the functioning of the Service
              </strong>
              This Application uses Cookies to save the User's session and to
              carry out other activities that are strictly necessary for the
              operation of this Application, for example in relation to the
              distribution of traffic.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>
                Activity regarding the saving of preferences, optimization, and
                statistics
              </strong>{" "}
              This Application uses Cookies to save browsing preferences and to
              optimize the User's browsing experience. Among these Cookies are,
              for example, those used for the setting of language and currency
              preferences or for the management of first party statistics
              employed directly by the Owner of the site.
            </p>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="how-to-provide"
            >
              How to provide or withdraw consent to the installation of Cookies
            </h3>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              In addition to what is specified in this document, the User can
              manage preferences for Cookies directly from within their own
              browser and prevent - for example - third parties from installing
              Cookies. Through browser preferences, it is also possible to
              delete Cookies installed in the past, including the Cookies that
              may have saved the initial consent for the installation of Cookies
              by this website. Users can, for example, find information about
              how to manage Cookies in the most commonly used browsers at the
              following addresses: Google Chrome, Mozilla Firefox, Apple Safari
              and Microsoft Internet Explorer.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              With regard to Cookies installed by third parties, Users can
              manage their preferences and withdrawal of their consent by
              clicking the related opt-out link (if provided), by using the
              means provided in the third party's privacy policy, or by
              contacting the third party.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              Notwithstanding the above, Users are hereby informed that they may
              follow the instructions provided by YourOnlineChoices (EU), the
              Network Advertising Initiative (US) and the Digital Advertising
              Alliance (US), DAAC (Canada), DDAI (Japan) or other similar
              services. Such initiatives allow Users to select their tracking
              preferences for most of the advertising tools. The Owner thus
              recommends that Users make use of these resources in addition to
              the information provided in this document.
            </p>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="owner-data"
            >
              Owner and Data Controller
            </h3>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
            VOTARINI LTD <br />
            Griva Digeni, 115, Trident Centre 3101, Limassol, Cyprus
              <strong> Owner contact email:</strong>{" "}
              <a href="mailto:admin@fastbetter.com">admin@fastbetter.com</a>
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              Since the installation of third-party Cookies and other tracking
              systems through the services used within this Application cannot
              be technically controlled by the Owner, any specific references to
              Cookies and tracking systems installed by third parties are to be
              considered indicative. In order to obtain complete information,
              the User is kindly requested to consult the privacy policy for the
              respective third-party services listed in this document.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              Given the objective complexity surrounding the identification of
              technologies based on Cookies, Users are encouraged to contact the
              Owner should they wish to receive any further information on the
              use of Cookies by this Application.
            </p>
            <h3
              className="font-bold text-[32px] pt-5 md:pt-6 2xl:pt-10 mb-3"
              id="definitions"
            >
              Definitions and legal references
            </h3>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>Personal Data (or Data)</strong> Any information that
              directly, indirectly, or in connection with other information —
              including a personal identification number — allows for the
              identification or identifiability of a natural person.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>Usage Data</strong> Information collected automatically
              through this Application (or third-party services employed in this
              Application), which can include: the IP addresses or domain names
              of the computers utilized by the Users who use this Application,
              the URI addresses (Uniform Resource Identifier), the time of the
              request, the method utilized to submit the request to the server,
              the size of the file received in response, the numerical code
              indicating the status of the server's answer (successful outcome,
              error, etc.), the country of origin, the features of the browser
              and the operating system utilized by the User, the various time
              details per visit (e.g., the time spent on each page within the
              Application) and the details about the path followed within the
              Application with special reference to the sequence of pages
              visited, and other parameters about the device operating system
              and/or the User's IT environment.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>User</strong> The individual using this Application who,
              unless otherwise specified, coincides with the Data Subject.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>Data Subject</strong> The natural person to whom the
              Personal Data refers.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>Data Processor (or Data Supervisor)</strong> The natural
              or legal person, public authority, agency or other body which
              processes Personal Data on behalf of the Controller, as described
              in this privacy policy.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>Data Controller (or Owner)</strong> The natural or legal
              person, public authority, agency or other body which, alone or
              jointly with others, determines the purposes and means of the
              processing of Personal Data, including the security measures
              concerning the operation and use of this Application. The Data
              Controller, unless otherwise specified, is the Owner of this
              Application.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>This Application</strong> The means by which the Personal
              Data of the User is collected and processed.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>Service</strong> The service provided by this Application
              as described in the relative terms (if available) and on this
              site/application.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              {" "}
              <strong>European Union (or EU)</strong> Unless otherwise
              specified, all references made within this document to the
              European Union include all current member states to the European
              Union and the European Economic Area.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              <strong>Legal information</strong>This privacy statement has been
              prepared based on provisions of multiple legislations, including
              Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection
              Regulation).
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl mb-3" style={{lineHeight:"1.5"}}>
              his privacy policy relates solely to this Application, if not
              stated otherwise within this document.
            </p>
            <hr /> <small>Latest update: January 1, 2025 </small>
          </div>
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 leftboox md:sticky top-24  min-h-fit md:h-[475px] rounded-3xl orgltbg">
            <div className="px-5 py-4 md:px-6 md:py-8">
              <ol className="litex space-y-2 pl-4">
                <li>
                  <a href="#technical-cookies" className=" hover:underline">
                    Technical Cookies and Cookies serving aggregated statistical
                    purposes
                  </a>
                </li>
                <li>
                  <a href="#how-to-provide" className=" hover:underline">
                    How to provide or withdraw consent to the installation of
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#owner-data" className=" hover:underline">
                    Owner and Data Controller
                  </a>
                </li>

                <li>
                  <a href="#definitions" className=" hover:underline">
                    Definitions and legal references
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

export default CookiePolicy;
