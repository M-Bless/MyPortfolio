// src/IntroSection.js
import React from 'react';
// Importing ReactTyped component from react-typed for auto-typing effect
import { ReactTyped } from 'react-typed';

function IntroSection() {
  return (
    // Wrapper div with padding to prevent overlap with navbar
    <div className="relative h-full pt-24">

      {/* Container for image and content */}
      <div className="absolute bottom-0 w-full flex justify-end lg:justify-center px-4">
        <img
          className="h-[40vh] sm:h-[50vh] lg:h-[90vh] object-contain"
          src="/images/myimage.png"
          alt=""
        />

        {/* Decorative background circle - only visible on large screens */}
        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>

        {/* Text overlay section with title + typing effect */}
        <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
          {/* Static text */}
          <span className="text-gray-600">Freelance</span>

          {/* Auto-typing effect for roles */}
          <ReactTyped
            className="text-red-500 block"
            strings={['Developer', 'Designer', 'Engineer', 'Tech Enthusiast']} // Texts that will be typed
            typeSpeed={50}  // Speed at which letters appear
            backSpeed={30}  // Speed at which text is deleted
            loop           // Repeat the typing animation forever
          />
        </div>

        {/* Info card - only visible on large screens */}
        <div className="hidden lg:flex flex-col absolute top-0 bottom-0 m-auto gap-5 rounded-md shadow-lg right-10 bg-white p-6 h-fit w-1/3">
          <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm Blessing</h1>
          <p className="text-gray-400">
            I am a passionate Mobile Developer and a Data and AI enthusiast
          </p>
          <a
            className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
            href="#contact"
          >
            Hire Me
          </a>
        </div>

      </div>
    </div>
  );
}

export default IntroSection;
