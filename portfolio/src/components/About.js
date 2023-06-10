import React from "react";
import {NavLink} from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Steeven.
            <br className="hidden lg:inline-block" /> I am a full-stack developer and love to make amazing websites!
          </h1>
          <p className="mb-8 leading-relaxed">
            I currently work as a Medical Technologist. I am in the process of a career change and close to completing a full stack web development course with Rutgers. I've done a few projects so far, please feel free to check some of them out!
          </p>
          <div className="flex justify-center">
            <NavLink
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" to='/contact'>
              Contact Me
            </NavLink>
            <NavLink
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" to='/projects'>
              See My Past Work
            </NavLink>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./3551739.jpg"
          />
        </div>
      </div>
    </section>
  );
}