import React from 'react'

const Services = () => {
  return (
    <div id="Services" class="py-10 bg-gray-300">
    <div class="container mx-auto ">
        <div class="flex flex-col gap-3 items-center">
      <h1 class="text-indigo-600 font-bold">SERVICES</h1>
      <h1 class="text-3xl">What do I offer</h1>
      <p class="w-1/2 text-center text-gray-400">I build mobile apps with Flutter and Kotlin, design intuitive UI/UX experiences, 
      develop responsive web interfaces with React, and create smart solutions using Python, AI, and data structures—with a special focus on health tech innovations.</p>
      </div>

  <div class="p-5 flex flex-wrap sm:p-0">
    <div class="w-full md:w-4/12 shadow-xl md:my-10 my-3 rounded-lg p-5 flex flex-col gap-3 ">
        <img class="w-10" src="/images/icon.png" alt='needed image'/>
        <h1 class="font-medium text-lg ">UI/UX Design</h1>
        <p class="text-indigo-600">I design clean, user-friendly interfaces that make apps and websites easy to use and visually engaging.
             My focus is on creating experiences that feel intuitive and enjoyable, blending creativity with functionality to solve real user problems.</p>
       
    </div>
    <div class="w-full md:w-4/12 shadow-xl md:my-10 my-3 rounded-lg p-5 flex flex-col gap-3 ">
        <img class="w-10" src="/images/mobile.png" alt='needed image'/>
        <h1 class="font-medium text-lg ">Mobile development</h1>
        <p class="text-indigo-600">I build clean, user-friendly mobile apps that offer great experiences on both Android and iOS.
             I've worked with Kotlin and Flutter to create responsive, cross-platform apps that are not only functional but also feel great to use.</p>
        
    </div>
    <div class="w-full md:w-4/12 shadow-xl md:my-10 my-3 rounded-lg p-5 flex flex-col gap-3">
        <img class="w-10" src="/images/web.png" alt='needed image'/>
        <h1 class="font-medium text-lg ">Web Development & Responsive Design</h1>
        <p class="text-indigo-600">I craft responsive, visually appealing user interfaces with a focus on usability and performance.
             I enjoy turning design ideas into real, interactive websites that feel smooth and intuitive across all devices.</p>
    </div>
    <div class="w-full md:w-4/12 shadow-xl md:my-10 my-3 rounded-lg p-5 flex flex-col gap-3 ">
        <img class="w-10" src="/images/thinking.png" alt='needed image'/>
        <h1 class="font-medium text-lg ">AI & Data Solutions</h1>
        <p class="text-indigo-600">I use AI and data-driven techniques to build smart solutions that help businesses make better decisions.
             Whether it's automating tasks, analyzing trends, or enhancing user experiences with intelligent features, I enjoy turning data into meaningful results.</p>
    
    </div>
    <div class="w-full md:w-4/12 shadow-xl md:my-10 my-3 rounded-lg p-5 flex flex-col gap-3">
        <img class="w-10" src="/images/health.png" alt='needed image'/>
        <h1 class="font-medium text-lg ">AI for Healthcare Solutions</h1>
        <p class="text-indigo-600">I specialize in building AI-powered healthcare solutions that support better patient care and smarter decision-making. 
            From tracking health data to developing tools that assist in diagnosis and reminders, my focus is on creating meaningful tech that improves lives.</p>
    
    </div>
    <div class="w-full md:w-4/12 shadow-xl md:my-10 my-3 rounded-lg p-5 flex flex-col gap-3 ">
        <img class="w-10" src="/images/HeadAI.png" alt='needed image'/>
        <h1 class="font-medium text-lg "> AI-Driven Solutions for Business Automation</h1>
        <p class="text-indigo-600">I build AI-powered systems that automate business processes, making operations more efficient.
             Whether it's predictive analytics or intelligent recommendations, my goal is to help businesses become more effective with AI.</p>
    </div>
  </div>

    </div>
    </div>
  )
}

export default Services
