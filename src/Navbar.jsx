import React, { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector("#menu");
  
    const toggleMenu = () => {
      menu.classList.toggle("hidden");
      const bars = hamburger.querySelectorAll("div");
      bars.forEach(bar => {
        bar.classList.toggle("bg-black");
        bar.classList.toggle("bg-white");
      });
    };
  
    hamburger.addEventListener("click", toggleMenu);
  
    // ✅ Hide menu when any menu link is clicked
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (!menu.classList.contains("hidden")) {
          toggleMenu();
        }
      });
    });
  
    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      menuLinks.forEach(link => {
        link.removeEventListener("click", toggleMenu);
      });
    };
  }, []);
  

  return (
    <nav class="w-full fixed top-0 bg-gray-400 z-10">
      <div class="container mx-auto py-5 flex justify-between items-center">
        <ul class="hidden md:flex space-x-10 text-gray-600 font-bold uppercase absolute right-40">
          <li class="hover:text-gray-500"><a href='#'>homepage</a></li>
          <li class="hover:text-gray-500"><a href='#AboutMe'>about me</a></li>
          <li class="hover:text-gray-500"><a href='#Services'>services</a></li>
          <li class="hover:text-gray-500"><a href='#Projects'>projects</a></li>
          <li class="hover:text-gray-500"><a href='#Contact'>contact</a></li>
        </ul>

        <img src='/images/cresent.jpg' alt='logo' className="hidden md:block w-8 h-8 rounded-full cursor-pointer z-20" />

        <div id="hamburger" class="space-y-1 md:hidden cursor-pointer z-40 ml-auto">
          <div class="w-6 h-0.5 bg-black transition-all duration-300"></div>
          <div class="w-6 h-0.5 bg-black transition-all duration-300"></div>
          <div class="w-6 h-0.5 bg-black transition-all duration-300"></div>
        </div>

        <ul id="menu" class="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center z-30">
          <li class="hover:text-gray-500"><a href='#'>homepage</a></li>
          <li class="hover:text-gray-500"><a href='#AboutMe'>about me</a></li>
          <li class="hover:text-gray-500"><a href='#Services'>services</a></li>
          <li class="hover:text-gray-500"><a href='#Projects'>projects</a></li>
          <li class="hover:text-gray-500"><a href='#Contact'>contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
