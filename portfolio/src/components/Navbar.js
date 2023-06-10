import  {ArrowRightIcon}  from "@heroicons/react/solid";
import React from "react";
import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <NavLink className="ml-3 text-xl" to='/'>
            Steeven Salony
          </NavLink>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <NavLink className="mr-5 hover:text-white" to='/projects'>
            Portfolio
          </NavLink>
          <NavLink className="mr-5 hover:text-white" to='/skills'>
            Skills
          </NavLink>
          <NavLink className="mr-5 hover:text-white" to='/testimonials'>
            Resume
          </NavLink>
        </nav>
        <NavLink
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" to='/contact'>
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </NavLink>
      </div>
    </header>
  );
}