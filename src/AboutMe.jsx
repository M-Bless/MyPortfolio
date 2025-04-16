import React from 'react'

const AboutMe = () => {
  return (
    <div class="px-10 bg-gray-200">
    <div class="container mx-auto py-20 flex flex-col-reverse lg:flex-row gap-20 ">
      <div class="relative ">
        <div class="h-full rounded-full overflow-hidden pt-0 ">
            <img class="bg-indigo-300 " src="/images/myimage.png" alt=''/>
        </div>
      </div>
      <div class="my-auto flex flex-col gap-3 ">
      <h1 class="text-indigo-600 font-bold">ABOUT ME</h1>
      <h1 class="text-3xl font-bold">Better Design</h1>
      <h1 class="text-3xl font-bold">Better Experience</h1>
      <p class="text-gray-400">
        mobile Developer and UI/UX designer mggyftttufuu fyuugugi
      </p>
      <h2 class="text-gray-400 font-medium">HTML</h2>
      <div class="w-full bg-gray-200 h-1.5 rounded-md">
        <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
      <h2 class="text-gray-400 font-medium">Javascript</h2>
      <div class="w-full bg-gray-200 h-1.5 rounded-md">
        <div class="w-3/4 bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
      <h2 class="text-gray-400 font-medium">React</h2>
      <div class="w-full bg-gray-200 h-1.5 rounded-md">
        <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
      <h2 class="text-gray-400 font-medium">Python</h2>
      <div class="w-full bg-gray-200 h-1.5 rounded-md">
        <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
      <h2 class="text-gray-400 font-medium">Kotlin</h2>
      <div class="w-full bg-gray-200 h-1.5 rounded-md">
        <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
      <h2 class="text-gray-400 font-medium">Flutter</h2>
      <div class="w-full bg-gray-200 h-1.5 rounded-md">
        <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default AboutMe
