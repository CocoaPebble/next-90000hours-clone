import Image from 'next/image';
import React from 'react';

const PageLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white px-6 py-4 shadow-md">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div>
            <a href="#" className="text-2xl font-bold text-gray-900">80000 HOURS</a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-2 px-3 text-gray-700 hover:text-gray-900">Start here</a>
            <a href="#" className="py-2 px-3 text-gray-700 hover:text-gray-900">Career guide ▼</a>
            {/* ... other primary navigation links */}
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <a href="#" className="py-2 px-3 text-gray-700 hover:text-gray-900">Get 1-1 advice</a>
          <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Search</button>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        {/* Mobile menu button */}
      </div>
      <div className="flex space-x-4 mt-3">
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Home</a>
        <span className="text-sm text-gray-500">›</span>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">World problems</a>
      </div>
    </nav>


      {/* Hero section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"> {/* Adjust the height as needed */}
        <Image
          src="/hero.jpg" // Adjust the path according to your directory structure
          alt="Earth from space"
          layout="fill" // Use the correct layout prop
          objectFit="cover" // This will cover the entire area of the div, you can adjust as needed
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded">
          <h1 className="text-4xl text-white font-bold">What are the most pressing world problems?</h1>
          <p className="text-md text-white">Last updated May 2023 · First published August 2018</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center py-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-2">Like</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-2">Tweet</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-2">Share</button>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
}

export default PageLayout;
