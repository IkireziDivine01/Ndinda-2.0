import video from '../assets/video2.png';
import Header from '../components/header';
import { FaRegCopyright } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import {useRef ,useState, useEffect } from 'react';
import { getAllPages, BASE_URL } from '../services';
import about from '../assets/about.mp4'

const Construction = () => {
  const [construction, setConstruction] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPages();
        console.log("Data fetched:", data); // Logging the fetched data
        console.log("Data type:", typeof data); // Logging the type of data received
        if (data && data.length > 0) {
          setConstruction(data[0]); // Fetching the first element of the array
          console.log("Construction set:", data[0]); // Logging the construction set
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log('Construction:', construction);
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

  const handleChat = () =>{
    const url = "https://www.officeats.rw/menu"
    window.open(url, '_blank');
  }
  
  return (
    <div>
      {construction && ( // Add null check for construction
        <div className='absolute top-0 left-0 w-full'>
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
        <source src={BASE_URL+'/'+construction.media} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2'>
        <Header/>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 10,
          right: 4,
          width: '8%',
          height: '5%',
          backgroundColor: '#A56D47',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10%',
        }}
      >
        <div onClick={handleChat}>
          <ul className="flex flex-col">
            <li className="flex gap-1 items-center text-main-light">
              <a href="/chat" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">
                <IoChatbubbleOutline style={{color: 'white'}}/>
              </a>
              Let's chat
            </li>
          </ul>
        </div>
      </div>
  
          <div className="m-10 text-justify w-12/12 text-sm leading-relaxed">
            {construction.content}
          </div>
          {/* <div>
            <video width="320" height="240" controls>
              <source src={construction.media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}

          <div  className="flex justify-center items-center w-full">
        <p className="flex items-center gap-2 text-xs">
          <FaRegCopyright />
          <span>2024 Ndinda Design studio. All rights reserved</span>
        </p>
      </div>

        </div>
      )}
    </div>
  );
}

export default Construction;
