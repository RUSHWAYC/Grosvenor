import React from "react";
import { FaPhone, FaEnvelope, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/grosvenor_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-300 pt-8 pb-6 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-4 hidden md:block">
            <img src={logo} alt="Grosvenor logo" className="h-12" />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4 hidden md:block">
            <span className="block uppercase text-gray-700 text-lg font-semibold mb-2">
              Stranice
            </span>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                >
                  Glavna / Početna
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                >
                  Katalog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                >
                  Partneri
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                >
                  Primena
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <span className="block uppercase text-gray-700 text-lg font-semibold mb-2">
              Kontakt
            </span>
            <div className="flex flex-wrap">
              <div className="w-full">
                <p className="text-gray-600 font-semibold block pb-2 text-sm">
                  Grosvenor Vam je na usluzi. Imate pitanje, treba Vam savet ili
                  tehnička podrška? Ne ustručavajte se da nas pozovete.
                </p>
              </div>
              <div className="w-full flex items-center">
                <FaHome className="text-gray-600 mr-2" />
                <p className="text-gray-600 font-semibold text-sm">
                  Kralja Petra Prvog 13F, 11130 Kaluđerica
                </p>
              </div>
              <div className="w-full flex items-center mb-2">
                <FaPhone className="text-gray-600 mr-2" />
                <p className="text-gray-600 font-semibold text-sm">
                  011/414-27-04 i +381/64-640-9557
                </p>
              </div>
              <div className="w-full flex items-center mb-2">
                <FaEnvelope className="text-gray-600 mr-2" />
                <a
                  href="mailto:sales@grosvenor.rs"
                  className="text-gray-600 font-semibold text-sm"
                >
                  sales@grosvenor.rs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
