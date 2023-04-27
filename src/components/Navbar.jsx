import { useState } from "react";
import { BsCart4, BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo-grosvenor.png";

const isNotActiveStyle =
  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0";
const isActiveStyle =
  "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap md:items-center justify-between mx-auto p-4">
        <a href="https://grosvenor.rs/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Grosvenor Logo" />
        </a>
        <div className="flex md:order-2">
          <NavLink
            to="/katlog"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 flex items-center"
          >
            <BsCart4 /> &nbsp; Katalog
          </NavLink>
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
                }
              >
                Početna
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/usluge"
                className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
                }
              >
                Usluge
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/primena"
                className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
                }
              >
                Primena
              </NavLink>
            </li>
            <li>
              <NavLink
                to="kontakt"
                className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
                }
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="text-gray-900 hover:text-gray-800 focus:outline-none focus:text-gray-800 md:hidden"
        >
          <BsList className="h-6 w-6" />
        </button>
        <div
          className={`${
            isMenuOpen ? "" : "hidden"
          } md:hidden flex flex-col w-full bg-gray-50 pt-4 px-4 pb-6 space-y-1`}
        >
          <NavLink
            to="/"
            className="block py-2 px-3 text-gray-900 font-medium rounded-md hover:bg-gray-100"
          >
            Početna
          </NavLink>
          <NavLink
            to="/usluge"
            className="block py-2 px-3 text-gray-900 font-medium rounded-md hover:bg-gray-100"
          >
            Usluge
          </NavLink>
          <NavLink
            to="/primena"
            className="block py-2 px-3 text-gray-900 font-medium rounded-md hover:bg-gray-100"
          >
            Primena
          </NavLink>
          <NavLink
            to="/kontakt"
            className="block py-2 px-3 text-gray-900 font-medium rounded-md hover:bg-gray-100"
          >
            Kontakt
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
