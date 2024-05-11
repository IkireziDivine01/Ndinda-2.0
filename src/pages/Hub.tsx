import { useRef, useState, useEffect } from "react";
import { IoChatbubbleOutline, IoDocumentTextOutline, IoChevronDownOutline, IoChevronUp } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { getAllPages, BASE_URL, getAllCohorts, getAllConfigs } from "../services";
import Header from "../components/header";

interface HubData {
  media: string; // Assuming 'media' is a string
  // Define other properties if needed
}

interface ConfigData {
  application_url: string;
  chat_url: string;

}

const Hub = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isCohortDropdownOpen, setCohortDropdownOpen] = useState(false);
  const [hub, setHub] = useState<HubData | null>(null); // Specify the type of 'hub'
  const [cohorts, setCohorts] = useState<any[]>([]); // Adjust the type as needed
  const [configs, setConfigs] = useState<ConfigData | null>(null) // Adjust the type as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPages();
        const info = await getAllCohorts();
        setCohorts(info);
      
        const config = await getAllConfigs();
        setConfigs(config);
        if (data && data.length > 0) {
          setHub(data[1]); // Fetching the first element of the array
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  //   setCohortDropdownOpen(false);
  // };

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
        className="w-full h-screen object-cover"
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
     <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2'>
            <Header />
          </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 4,
          width: '10%',
          height: '20%',
          // backgroundColor: '#A56D47',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10%',
        }}
      >
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <a href={configs?.application_url} target="_blank" className="flex gap-1 items-center text-main-light capitalize hover:text-main-light">
                <IoDocumentTextOutline style={{color: 'white'}}/>
                Application
              </a>
            </li>
            <li className="flex gap-1 items-center text-main-light">
              <a href="/cohort" className="text-main-dark capitalize hover:text-main-light">
                <SiGoogleclassroom style={{color: 'white'}}/>
              </a> Cohort
              <span onClick={toggleCohortDropdown} className="cursor-pointer ml-2">
                {isCohortDropdownOpen ? <IoChevronUp style={{color: 'white'}}/> : <IoChevronDownOutline style={{color: 'white'}}/>}
              </span>
            </li>
            {isCohortDropdownOpen && (
              <div className="absolute rounded-md top-1/2 mt-2 right-1 bg-main-light w-20">
                {cohorts.map((cohort, index) => (
                  <ul key={index}>
                    <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer" >
                      <a href={BASE_URL+'/'+cohort?.pdfs[0]?.file} target="_blank" className="text-main-dark capitalize hover:text-main-light">
                      {cohort.title}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            )}
            <li>
              <a href={configs?.chat_url} target="_blank" className="flex gap-1 items-center text-main-light capitalize hover:text-main-light">
                <IoChatbubbleOutline style={{color: 'white'}}/>
                  Let's chat
              </a>
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
