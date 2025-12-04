import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative max-w-rw font-urbanist top-2.5 md:top-4 lg:top-6 mx-auto w-[95%] overflow-hidden rounded-2xl bg-white py-1">
      {/* Main Navbar Content */}
      <div className="relative px-4 sm:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex cursor-pointer items-center relative -left-4 lg:left-0 space-x-3 group font-bold justify-center text-2xl xl:text-3xl leading-snug">
            <img src="/src/assets/logo.png" alt="" className='relative -top-2 left-8'/>
            <h1 className='text-[#303030] font-urbanist'>ZapShift</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {["Services", "Coverage", "About Us", "Pricing", "Be a Rider"].map((item) => (
              <a key={item} href="#" className="relative group">
                <span className={`text-dark-gray font-normal group-hover:text-black transition-colors duration-300`}>
                  {item}
                </span>
              </a>
            ))}
          </div>


          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <button className="btn btn-outline rounded-[10px] hidden lg:block hover:bg-black hover:text-white">
              Sign In
            </button>
            <button className="btn btn-primary bg-primary outline-none border-none text-black-primary rounded-[10px] hidden sm:block shadow-none">
              Be a rider
            </button>
            <button className="hidden ms-4 lg:flex justify-center items-center bg-black-primary rounded-full h-10 w-10">
                <MdArrowOutward size={24} className="text-primary" />
            </button>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden relative group"
            >
              <div className="absolute -inset-0.5  rounded blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative p-2 rounded">
                {!isOpen ? (
                  <svg
                    className="w-6 h-6 text-dark-gray"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-dark-gray"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="relative mt-4 md:hidden transition-all duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1  bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/60">
              {["Home", "Features", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 rounded-md font-urbanist text-base font-medium text-dark-gray hover:text-black hover:bg-primary transition-all duration-200"
                >
                  {item}
                </a>
              ))}

              <div className="py-2">
                <button className="w-full btn btn-primary bg-primary outline-none border-none text-black-primary rounded-[10px] shadow-none">
                  Be a rider
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    );
};

export default Navbar;