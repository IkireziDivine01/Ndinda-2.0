import React, { useState, useEffect, useRef } from 'react';
import './styles/LandingPage.css';
import Loader from '../components/loader';
import Header from '../components/header';
import landingGif from '../assets/landingGif.gif';
import { BASE_URL, getAllConfigs, getAllPages } from '../services';

const LandingPage = () => {
   const videoRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [configs , setConfigs] = useState();
  const [landing, setLanding] = useState();
  const [hasUserInteracted, setHasUserInteracted] = useState(false);


  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
    const fetchData = async () => {
      try {
        const data = await getAllConfigs();
        setConfigs(data);
        const home = await getAllPages();
        if (home && home.length > 0) {
          setLanding(home[4]); // Fetching the first element of the array
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  if (isLoading) {
    return <Loader />;
  }

 

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
    <>
      {landing && (
        <div className="landing absolute top-0 left-0 w-full">
        <div>
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
        <source src={BASE_URL+'/'+landing.media} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2'>
          <Header />
        </div>
      </div>
      )}
    </>
  );
}

export default LandingPage;
