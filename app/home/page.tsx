import Image from 'next/image';
import React from 'react';

const PageLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 bg-gray-200 text-gray-700">
        <div className="flex items-center">
          <span className="text-xl font-bold">90000 Hours</span>
        </div>
        <div className="flex">
          <a href="#" className="px-4 py-2 hover:bg-gray-300 rounded">Start here</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-300 rounded">Career guide</a>
          {/* Add more navigation items here */}
        </div>
        <div className="flex">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get 1-1 advice</button>
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
