import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/Ndinda logo.png";
import { FaBars, FaTimes, FaChevronUp } from 'react-icons/fa';
import vid from '../assets/vid.mov';
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { getAllPages } from "../services";

const Hub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [isCohortDropdownOpen, setCohortDropdownOpen] = useState(false);
  const [hub, setHub] = useState();

   useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPages();
        console.log("Data fetched:", data); // Logging the fetched data
        console.log("Data type:", typeof data); // Logging the type of data received
        if (data && data.length > 0) {
          setHub(data[1]); // Fetching the first element of the array
          console.log("Hub set:", data[1]); // Logging the construction set
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setProjectsDropdownOpen(false);
    setCohortDropdownOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
    setIsOpen(false); // Close the main menu when opening projects dropdown
  };

  const toggleCohortDropdown = () => {
    setCohortDropdownOpen(!isCohortDropdownOpen);
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

  return (
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
          height: '25%',
          backgroundColor: '#A56D47',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10%',
        }}
      >
        <div>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-1 items-center text-main-light"> {/* Changed to flex-col and added items-center */}
              <a href="/apply" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">
                <IoDocumentTextOutline style={{color: 'white'}}/>
              </a> Application
            </li>
            <li className="flex gap-1 items-center text-main-light"> {/* Changed to flex-col and added items-center */}
              <a href="/cohort" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">
                <SiGoogleclassroom style={{color: 'white'}}/>
              </a> Cohort
              <span onClick={toggleCohortDropdown} className="cursor-pointer ml-2"> {/* Added ml-2 for spacing */}
                {isCohortDropdownOpen ? <IoChevronUp style={{color: 'white'}}/> : <IoChevronDownOutline style={{color: 'white'}}/>}
              </span>
            </li>
            {isCohortDropdownOpen && (
              <div className="absolute rounded-md top-1/2 mt-2 right-1 bg-main-light w-20">
                <ul>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">2024</li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">2023</li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">2022</li>
                </ul>
              </div>
            )}
            <li className="flex gap-1 items-center text-main-light"> {/* Changed to flex-col and added items-center */}
              <a href="/chat" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">
                <IoChatbubbleOutline style={{color: 'white'}}/>
              </a>
              Let's chat
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hub;
