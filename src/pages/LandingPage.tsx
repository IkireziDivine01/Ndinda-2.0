import { useState, useEffect, useRef } from 'react';
import './styles/LandingPage.css';
import Loader from '../components/loader';
import Header from '../components/header';
import Footer from '../components/Footer'; // Import the Footer component
import { BASE_URL,  getAllPages } from '../services';

const LandingPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Specify type for videoRef
  const [isLoading, setIsLoading] = useState(true);
  const [landing, setLanding] = useState<{ media: string } | undefined>(); // Specify type for landing

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
    const fetchData = async () => {
      try { 
        const home = await getAllPages();
        // console.log('home:', home);
        
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
    if (video && !video.paused) {
      video.play().then(() => {
        // Handle after play
      });
    }
  };

  const handleMouseOver = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    }
  };

  const handleMouseOut = () => {
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
    }
  };

  return (
    <>
      {landing && (
        <div className="landing absolute top-0 left-0 w-full overflow-hidden">
          <div>
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
              <source src={BASE_URL + '/' + landing.media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2' style={{position:'fixed',backgroundColor:'rgba(255,255,255,.4)'}}>
            <Header />
          </div>
          <Footer /> {/* Add Footer component here */}
        </div>
      )}
      
    </>
  );
}


export default LandingPage;
