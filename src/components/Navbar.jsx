import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" sticky top-0 left-0 w-full bg-white z-50 ">
      <div
        id="nav"
        className="h-24 flex justify-between md:items-center md:flex md:justify-between md:items-center md:p-2 md:w-full md:h-24 shadow-xl sticky top-0  z-50"
      >
        <img
          src={logo}
          alt="Grow Finance Logo"
          className="h-28 w-32 md:h-32 md:w-32 rounded-xl"
        />
        <nav
          className={`
    fixed top-28 right-0 w-2/3 px-8 py-4 bg-gray-200 flex flex-col gap-8 font-semibold text-lg rounded-md
    transform transition-transform duration-500 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    md:static md:flex md:flex-row md:gap-12 md:translate-x-0 md:transition-none md:bg-transparent 
  `}
        >
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/partners" onClick={() => setIsOpen(false)}>
            Partners
          </NavLink>
          <NavLink to="/emi" onClick={() => setIsOpen(false)}>
            Emi Calculator
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About us
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact us
          </NavLink>

          <NavLink
            className=" bg-blue-500 justify-center items-center text-white px-8 py-2 rounded-md font-semibold hover:bg-blue-500 md:hidden"
            href=" "
            to="/apply"
            onClick={() => setIsOpen(false)}
          >
            Enquire now
          </NavLink>
        </nav>
        <NavLink
          className=" hidden md:flex bg-blue-600 text-white px-8 py-2 rounded-md font-semibold hover:bg-blue-500"
          to="/apply"
        >
          Enquire now
        </NavLink>

        <button
          className="m-6 text-3xl md:hidden "
          onClick={() => {
            toggleButton();
          }}
        >
          {" "}
          <TiThMenuOutline />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
