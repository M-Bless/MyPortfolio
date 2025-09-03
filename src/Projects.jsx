import React from 'react'

const Projects = () => {
  return (
    <div id="Projects" class="py-10 bg-gray-200">
    <div class="container mx-auto">
        <div class="flex flex-col gap-3 items-center">
      <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
      <h1 class="text-3xl">Works and Projects</h1>
      <p class="w-1/2 text-center text-gray-400">I’ve worked on a variety of projects that combine mobile development, UI/UX design, and AI solutions. 
      From developing health-focused mobile apps to designing intuitive websites, my projects reflect a strong commitment to creating seamless, user-friendly experiences. 
      Check out some of my work below.
      Here is my github link : <a class="text-red-500" rel="" target="_blank" href="https://github.com/M-Bless"><u>M-Bless</u></a>
      </p>
      </div>

  <div class="p-5 m-1 flex flex-wrap justify-between ">
    <div class="w-full md:w-5/12  md:my-10 my-3 lg:w-1/5  ">
        <img class="w-full" src="/images/medicine.jpg" alt='needed image'/>
        
    </div>
    <div class="w-full md:w-5/12  md:my-10 my-3 lg:w-1/5 ">
        <img class="w-full" src="/images/gaming.jpg" alt='needed image'/>
        
    </div>
    <div class="w-full md:w-5/12  md:my-10 my-3 lg:w-1/5  m-5">
        <img class="w-full" src="/images/tech.jpg" alt='needed image'/>
        
    </div>
    <div class="w-full md:w-5/12  md:my-10 my-3 lg:w-1/5  m-5">
        <img class="w-full" src="/images/mens.jpg" alt='needed image'/>
        
    </div>
    <div class="w-full md:w-5/12  md:my-10 my-3 lg:w-1/5  m-5">
        <img class="w-full" src="/images/workout.jpg" alt='needed image'/>
        
    </div>
    <div class="w-full md:w-5/12  md:my-10 my-3 lg:w-1/5  m-5">
        <img class="w-full" src="/images/mental.jpg" alt='needed image'/>
        
    </div>
    <div class="w-full md:w-5/12  md:my-10 my-3 lg:w-1/5  m-5">
        <img class="w-full" src="/images/music.png" alt='needed image'/>
        
    </div>
    <div class="w-full md:w-5/12  md:my-10 my-3 lg:w-1/5  m-5">
        <img class="w-full" src="/images/dinner.jpeg" alt='needed image'/>
        
    </div>
  </div>

    </div>
    </div>
  )
}

export default Projects
