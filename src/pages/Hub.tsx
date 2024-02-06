import React, { useRef, useState } from "react";
import logo from "../assets/Ndinda logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import vid from '../assets/vid.mov';
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";

const Hub = () => {

    const [isOpen, setIsOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
     setProjectsDropdownOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
  };
   const videoRef = useRef();
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const handleUserInteraction = () => {
    const video = videoRef.current;

    if (!hasUserInteracted) {
      video.play().then(() => {
        setHasUserInteracted(true);
      });
    }
  };

  const handleMouseOver = () => {
    const video = videoRef.current;
    if (hasUserInteracted && video.paused) {
      video.play();
    }
  };

  const handleMouseOut = () => {
    const video = videoRef.current;
    if (hasUserInteracted && !video.paused) {
      video.pause();
    }
  };

    return(
        <div>
            <div>
                <div className="flex justify-between items-center px-2 bg-gray-100"> 
      <div>
        <a href="/">
          <img src={logo} alt="logo" className="w-20 h-20" />
        </a>
      </div>
      <div className="pr-2 flex gap-10">
        <nav className="relative">
          {isOpen ? <FaTimes className="absolute -right-5 text-2xl mr-4" onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} />}
          {isOpen && (
            <ul className="flex gap-10">
              <li><a href="/design" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Design</a></li>
              <li><a href="/construction" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Construction</a></li>
              <li><a href="/contactUs" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Hub</a></li>
              {/* <li><a href="/contactUs" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main">Premium</a></li> */}
              <li><a href="/aboutUs" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Us</a></li>
            </ul>
          )}
        </nav>
      </div>
    </div>
            </div> 

         <video
        ref={videoRef}
        className="w-full h-2/3"
        loop
        autoPlay
        playsInline
        muted
        onClick={handleUserInteraction}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 4,
          width: '10%',
          height: '30%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10%',
        }}
      >
        
        <div>
          <ul className="flex flex-col gap-4">
              <li className="flex gap-2 items-center"><a href="/apply" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main"><IoDocumentTextOutline/></a>Application</li>
              <li className="flex gap-2 items-center"><a href="/cohort" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main"><SiGoogleclassroom/></a>Cohort</li>
              <li className="flex gap-2 items-center"><a href="/chat" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main"><IoChatbubbleOutline/></a> Let's chat</li>
              <li className="relative group">
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
              </li> 
          </ul>
        </div>
      </div>
        </div>
    )
    }

export default Hub;