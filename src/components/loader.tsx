import { useRef, useState } from 'react';
import loader from '../assets/loader.mp4';

const Loader = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Add explicit type annotation
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const handleUserInteraction = () => {
    const video = videoRef.current;

    if (video && !hasUserInteracted) { // Null check added here
      video.play().then(() => {
        setHasUserInteracted(true);
      });
    }
  };

  const handleMouseOver = () => {
    const video = videoRef.current;
    if (video && hasUserInteracted && video.paused) { // Null check added here
      video.play();
    }
  };

  const handleMouseOut = () => {
    const video = videoRef.current;
    if (video && hasUserInteracted && !video.paused) { // Null check added here
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
