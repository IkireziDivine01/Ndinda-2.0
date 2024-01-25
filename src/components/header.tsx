import React, {useState} from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
     setProjectsDropdownOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-100"> 
      <div>
        <a href="/">
          <img src={logo} alt="logo" className="w-14 h-8" />
        </a>
      </div>
      <div className="pr-4 flex gap-10">
        <nav className="relative">
          {isOpen ? <FaTimes style={{color:'white'}} className="absolute -right-5 text-2xl mr-4" onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} style={{color:'white'}} />}
          {isOpen && (
            <ul className="flex gap-10">

              {/* <li className="relative group">
                <a
                  href="/projects"
                  onMouseEnter={toggleProjectsDropdown}
                  onMouseLeave={toggleProjectsDropdown}
                  className="uppercase text-main-light hover:text-main hover:font-bold active:text-main"
                >
                  Projects
                  {isProjectsDropdownOpen && (
                    <div className="absolute left-0 mt-2 shadow-md rounded-md p-2">
                        <div className="bg-main shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1" x-show="showChildren" x-transition:enter="transition ease duration-300 transform" x-transition:enter-start="opacity-0 translate-y-2" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease duration-300 transform" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 translate-y-4">
      <span className="absolute top-0 left-0 w-3 h-3 bg-main border transform rotate-45 -mt-1 ml-6"></span>
      <div className="bg-main rounded w-full relative z-10 py-1">
        <ul className="list-reset">
          <li className="relative" x-data="{ showChildren: false }" x-on:mouseenter="showChildren = true" x-on:mouseleave="showChildren = false">
            <a href="#" className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"> <span className="flex-1 text-main-light">Residential</span> </a>
          </li>
          <li className="relative" x-data="{ showChildren: false }" x-on:mouseenter="showChildren = true" x-on:mouseleave="showChildren = false">
            <a href="#" className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"> <span className="flex-1 text-main-light">Commercial</span> </a>
          </li>
          <li className="relative" x-data="{ showChildren: false }" x-on:mouseenter="showChildren = true" x-on:mouseleave="showChildren = false">
            <a href="#" className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"> <span className="flex-1 text-main-light">Hospitality</span> </a>
          </li>
        </ul>
      </div>
    </div>
                    </div>
                  )}
                </a>
              </li> */}
              
              <li><a href="/design" className="text-main-light uppercase hover:text-main hover:font-bold active:text-main">Design</a></li>
              <li><a href="/construction" className="text-main-light uppercase hover:text-main hover:font-bold active:text-main">Construction</a></li>
              <li><a href="/contactUs" className="text-main-light uppercase hover:text-main hover:font-bold active:text-main">Hub</a></li>
              <li><a href="/contactUs" className="text-main-light uppercase hover:text-main hover:font-bold active:text-main">Premium</a></li>
              <li><a href="/contactUs" className="text-main-light uppercase hover:text-main hover:font-bold active:text-main pr-14">Us</a></li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}