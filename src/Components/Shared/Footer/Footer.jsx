import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="max-w-[1500px] mt-20 xl:mt-32 mx-auto w-[95%] rounded-4xl urbanist-regular relative text-center bg-[#0B0B0B]  text-white">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <div className="font-bold flex justify-center items-center text-3xl xl:text-4xl leading-snug">
            <img src="/src/assets/logo.png" alt="" className='relative -top-2 left-5'/>
            <h1>ZapShift</h1>
          </div>
            <p className='text-center text-[#DADADA] my-4 w-4/5 lg:w-1/2 mx-auto'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>


          <div className="mt-6 xl:mt-8">
            <nav className="flex flex-col md:flex-row md:flex-wrap justify-center text-sm font-light">
              <div className="px-5 py-2">
                <a href="#">Services</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Coverage</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">About Us</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Pricing</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Blog</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Contact</a>
              </div>
            </nav>

             
    <div className="flex justify-center flex-wrap gap-6 mt-8">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-white p-3 rounded-full bg-gray-800 hover:bg-blue-600 hover:scale-110 shadow-lg transition-transform transform duration-300"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="text-white p-3 rounded-full bg-gray-800 hover:bg-blue-400 hover:scale-110 shadow-lg transition-transform transform duration-300"
      >
        <FaTwitter />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-white p-3 rounded-full bg-gray-800 hover:bg-pink-500 hover:scale-110 shadow-lg transition-transform transform duration-300"
      >
        <FaInstagram />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white p-3 rounded-full bg-gray-800 hover:bg-blue-700 hover:scale-110 shadow-lg transition-transform transform duration-300"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="text-white p-3 rounded-full bg-gray-800 hover:bg-red-600 hover:scale-110 shadow-lg transition-transform transform duration-300"
      >
        <FaYoutube />
      </a>
    </div>
          </div>
        </div>
    </footer>
    );
};

export default Footer;