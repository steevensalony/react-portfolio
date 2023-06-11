import React from "react";
import { resumes } from "../data";

export default function Resumes() {
  return (
    <section id="resumes">
      <div className="container px-5 py-10 mx-auto text-center h-screen">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
         My Resume
        </h1>
        <div className="flex flex-wrap m-4">
          {resumes.map((resume) => (
            <div className="p-4 md:w-full w-full">
              <div className="bg-gray-800 bg-opacity-40 p-8 rounded">
                  <img
                    alt="resume"
                    src={resume.image}
                    className="md:w-1/2 flex-shrink-0 object-cover object-center"
                  />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}