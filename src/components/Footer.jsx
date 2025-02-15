import React from "react";
import imgFooter from "../../public/assets/img/footer.jpg";
import Logo from "../../public/assets/img/logo.png";
import { ScrollToTop } from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="relative z-20 py-10 md:py-20">
      {/* background */}
      <div className="absolute inset-0 -z-50">
        <img
          src={imgFooter}
          alt="img-footer"
          className="w-full h-full object-cover"
        />
      </div>
      {/* background end */}
      {/* logo */}
      <div className="logo flex justify-center items-center">
        <img src={Logo} alt="logo" className="w-1/6 md:w-[7%] lg:w-[7.5%]" />
      </div>
      {/* logo end */}
      {/* grid */}
      <div className="grid grid-cols-1 text-center gap-10 text-white font-semibold mt-10 justify-items-center md:grid-cols-3 md:text-left md:gap-0 md:mt-14 md:px-28 lg:px-44 lg:mt-16">
        <div className="items-1">
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-500">
                Movies
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-500">
                TV Series
              </a>
            </li>
          </ul>
        </div>
        <div className="items-2">
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-red-500">
                Live
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-500">
                FaQ
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-500">
                Premium
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="items-3 flex items-center">
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-red-500">
                You Must Watch
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-500">
                Recent Release
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-500">
                Top IMDB
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* grid end */}

      <ScrollToTop />
    </footer>
  );
};

export default Footer;
