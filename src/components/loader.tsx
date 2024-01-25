import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import loader from '../assets/loader.mp4';

const Loader = () => {
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
    <div className='h-screen flex items-center justify-center'>
      <video
        ref={videoRef}
        className="w-3/5"
        loop
        autoPlay
        playsInline
        muted
        onClick={handleUserInteraction}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <source src={loader} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;