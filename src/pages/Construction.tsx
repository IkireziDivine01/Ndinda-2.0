import { useRef, useState, useEffect } from 'react';
import { FaRegCopyright } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { getAllPages, BASE_URL, getAllConfigs } from '../services';
import Header from '../components/header';

const Construction = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Add explicit type annotation
  const [construction, setConstruction] = useState<any>(); // Add explicit type annotation for construction
  const [configs, setConfigs] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPages();
        const footer = await getAllConfigs();
        setConfigs(footer);
        if (data && data.length > 0) {
          setConstruction(data[0]); // Fetching the first element of the array
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  const handleChat = () => {
    const url = "https://www.officeats.rw/menu"
    window.open(url, '_blank');
  }

  return (
    <>
      {construction && ( // Add null check for construction
        <div className='absolute top-0 left-0 w-full'>
          <video
            ref={videoRef}
            className="w-full h-screen object-cover"
            loop
            autoPlay
            playsInline
            muted
            onClick={handleUserInteraction}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <source src={BASE_URL + '/' + construction.media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2'>
            <Header />
          </div>
          <div
            style={{
              position: 'fixed',
              bottom: 10,
              right: 4,
              width: '8%',
              height: '5%',
              // backgroundColor: '#A56D47',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10%',
            }}
            className='left-10 sm:left-0'
          >
            <div onClick={handleChat}>
              <ul className="flex flex-col">
                <li className="flex gap-1 items-center text-main-light">
                  <a href="/chat" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">
                    <IoChatbubbleOutline style={{ color: 'white' }} />
                  </a>
                  Let's chat
                </li>
              </ul>
            </div>
          </div>

          <div className="m-10 text-justify w-12/12 text-sm leading-relaxed">
            {construction.content}
          </div>

          <div className="flex justify-center items-center w-full">
            {configs && (
            <p className="flex items-center gap-2 text-xs">
              <FaRegCopyright />
              <span>{configs.copyright_text}</span>
            </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Construction;
