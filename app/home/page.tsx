import Image from "next/image";
import React from "react";

const PageLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white px-6 py-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify- etween px-24">
            {/* logo */}
            <div className="flex space-x-4">
              <div>
                <a href="#" className="text-2xl font-bold text-gray-900">
                  <span>
                    <p className="text-blue-400">90000</p>
                  </span>
                  HOURS
                </a>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="flex items-center space-x-1 font-sans text-sm font-bold">
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-2 px-3 text-gray-700 hover:text-blue-400"
                >
                  Start here
                </a>
                <a
                  href="#"
                  className="py-2 px-3 text-gray-700 hover:text-blue-400"
                >
                  Career guide ▼
                </a>
                <a
                  href="#"
                  className="py-2 px-3 text-gray-700 hover:text-blue-400"
                >
                  Research ▼
                </a>
                <a
                  href="#"
                  className="py-2 px-3 text-gray-700 hover:text-blue-400"
                >
                  Job Board
                </a>
                <a
                  href="#"
                  className="py-2 px-3 text-gray-700 hover:text-blue-400"
                >
                  PodCasts ▼
                </a>
                <a
                  href="#"
                  className="py-2 px-3 text-gray-700 hover:text-blue-400"
                >
                  Get 1-1 advice
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="md:hidden flex items-center px-24">
        {/* Mobile menu button */}
      </div>

      {/* Breadcrumbs */}
      <div className="flex flex-col justify-center bg-gray-100 h-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex px-4 space-x-4">
          <a href="#" className="text-sm text-blue-400 hover:underline">
            Home
          </a>
          <span className="text-sm text-gray-500">›</span>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            World problems
          </a>
        </div>
      </div>


      {/* Hero section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
        {" "}
        {/* Adjust the height as needed */}
        <Image
          src="/hero.jpg" // Adjust the path according to your directory structure
          alt="Earth from space"
          layout="fill" // Use the correct layout prop
          objectFit="cover" // This will cover the entire area of the div, you can adjust as needed
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded">
          <h1 className="text-4xl text-white font-bold">
            What are the most pressing world problems?
          </h1>
          <p className="text-md text-white">
            Last updated May 2023 · First published August 2018
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center py-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-2">
          Like
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-2">
          Tweet
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-2">
          Share
        </button>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
};

export default PageLayout;
