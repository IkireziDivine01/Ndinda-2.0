import React, { useRef, useState } from "react";
import logo from "../assets/Ndinda logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import vid from '../assets/vid.mov';

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
            <div className="pt-4 pb-4">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-100"> 
      <div>
        <a href="/">
          <img src={logo} alt="logo" className="w-14 h-8" />
        </a>
      </div>
      <div className="pr-4 flex gap-10">
        <nav className="relative">
          {isOpen ? <FaTimes className="absolute -right-5 text-2xl mr-4" onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} />}
          {isOpen && (
            <ul className="flex gap-10">
              <li><a href="/design" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main">Design</a></li>
              <li><a href="/construction" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main">Construction</a></li>
              <li><a href="/contactUs" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main">Hub</a></li>
              <li><a href="/contactUs" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main">Premium</a></li>
              <li><a href="/aboutUs" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main pr-14">Us</a></li>
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
        </div>
    )
    }

export default Hub;