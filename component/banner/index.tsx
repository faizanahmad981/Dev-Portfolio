"use client";


import Image from "next/image";


 
import TypewriterComp from "./TypeWriter";
import { homeRight } from "@/assets/images";
const Banner = () => {
  return (
    <section id="home" className="bg-gray-100 py-16 w-full  ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-12">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <TypewriterComp  />
          <h1 className="text-6xl font-bold uppercase text-black mt-2">
            Faizan Ahmed
          </h1>
          <h5 className="text-xl uppercase text-gray-600 mt-2">
            Software Engineer
          </h5>

          <div className="mt-6">
            <a
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
              href="mailto:khawajfaizan258@gmail.com"
            >
              Contact
            </a>
            <a
              className="ml-4 px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-md shadow-md hover:bg-blue-600 hover:text-white transition"
              target="_blank"
              href="https://www.linkedin.com/in/faizan-ahmed-tanoli-639866205/"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <Image
            src={homeRight} // Replace with the correct path
            width={400}
            height={400}
            alt="Profile Image"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
