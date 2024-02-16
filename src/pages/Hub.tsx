import { useRef, useState, useEffect } from "react";
import logo from "../assets/Ndinda logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoChatbubbleOutline, IoDocumentTextOutline, IoChevronDownOutline, IoChevronUp } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { getAllPages, BASE_URL } from "../services";

const Hub = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
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
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // setProjectsDropdownOpen(false);
    setCohortDropdownOpen(false);
  };

  const toggleCohortDropdown = () => {
    setCohortDropdownOpen(!isCohortDropdownOpen);
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const handleUserInteraction = () => {
    const video = videoRef.current;

    if (!hasUserInteracted && video) {
      video.play().then(() => {
        setHasUserInteracted(true);
      });
    }
  };

  const handleMouseOver = () => {
    const video = videoRef.current;
    if (hasUserInteracted && video && video.paused) {
      video.play();
    }
  };

  const handleMouseOut = () => {
    const video = videoRef.current;
    if (hasUserInteracted && video && !video.paused) {
      video.pause();
    }
  };

  return (
    <>
    {hub && (
    <div className="absolute top-0 left-0 w-full">

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
        <source src={BASE_URL+'/'+hub.media} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       <div className="w-12/12 absolute top-0 left-0 right-0 flex justify-between items-center px-2 bg-gray-100 bg-opacity-20 shadow-md backdrop-blur-sm "> 
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
                  <li><a href="/contactUs" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Hub</a></li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 4,
          width: '10%',
          height: '20%',
          backgroundColor: '#A56D47',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10%',
        }}
      >
        <div>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-1 items-center text-main-light">
              <a href="/apply" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">
                <IoDocumentTextOutline style={{color: 'white'}}/>
              </a> Application
            </li>
            <li className="flex gap-1 items-center text-main-light">
              <a href="/cohort" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">
                <SiGoogleclassroom style={{color: 'white'}}/>
              </a> Cohort
              <span onClick={toggleCohortDropdown} className="cursor-pointer ml-2">
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
            <li className="flex gap-1 items-center text-main-light">
              <a href="/chat" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">
                <IoChatbubbleOutline style={{color: 'white'}}/>
              </a>
              Let's chat
            </li>
          </ul>
        </div>
      </div>
    </div>
    )}
    </>
  );
}

export default Hub;
