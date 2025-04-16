import React from 'react'

const Contacts = () => {
  return (
    <div class="bg-gray-300 py-10">
      <div class="container mx-auto ">
      <div class="flex flex-col gap-3 items-center">
      <h1 class="text-indigo-600 font-bold">CONTACTS</h1>
      <h1 class="text-3xl font-bold">Have a Question?</h1>
      <p class="w-1/2 text-center text-gray-400">mobile Developer and UI/UX designer mggyftttufuu fyuugugi</p>
      </div>

   <form class="flex flex-col gap-5 items-center mt-5 p-8">
    <input class="p-2 w-full ring-1 md:w-1/2 ring-indigo-300 rounded-sm" type="text" placeholder='Name'/>
    <input class="p-2 w-full ring-1 md:w-1/2 ring-indigo-300 rounded-sm" type="email" placeholder='Email'/>
    <textarea class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm" cols="30" rows="10" placeholder='Message....' />
    <button class="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold cursor-pointer">Submit</button>
   </form>

      </div>
    </div>
  )
}

export default Contacts
