import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div class="w-full bg-gray-800">
      <div class="container mx-auto py-5 flex flex-col justify-between items-center">
       <span class="text-white mx-auto"> © 2025. Designed with 🤍 by Blessing 😊</span>
       <div className="flex gap-4 text-2xl mt-2">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-700" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-pink-500" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-blue-400" />
        </a>
      </div>

    </div>
    </div>
  )
}

export default Footer
