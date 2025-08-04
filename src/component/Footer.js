import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 md:px-7 lg:px-10 py-7 bg-orgbg">
      <div className="container m-auto">
        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4 items-center text-white">
          <p className="text-sm 2xl:text-base font-normal">© 2025 All Rights Reserved</p>
          <ul className="flex flex-col items-center sm:flex-row text-base 2xl:text-lg font-normal leading-4 gap-2 md:gap-0">
            <li className="px-5 border-r-[1.5px] border-r-white"><Link to="/terms">Terms</Link></li>
            <li className="px-5 border-r-[1.5px] border-r-white"><Link to="/privacy">Privacy Policy</Link></li>
            <li className="px-5"><Link to="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
