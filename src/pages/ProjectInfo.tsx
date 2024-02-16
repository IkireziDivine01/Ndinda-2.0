import { useState, useRef, useEffect } from 'react';
import logo from "../assets/logo.png";
import "./styles/ProjectInfo.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { getAllProjectsById, BASE_URL } from '../services';

const ProjectInfo = () => {
  const { projectId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(1); // State to track current image
  const [project, setProject] = useState();
  const [nextProject, setNextProject] = useState();
   const nextProjectId = parseInt(projectId) + 1; // Assuming project IDs are numeric

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProjectsById(projectId);
        console.log("Data fetched:", data); // Logging the fetched data
        setProject(data); // Setting fetched project

        const nextProjectData = await getAllProjectsById(nextProjectId.toString());
        setNextProject(nextProjectData);
        if (nextProjectData) {
          // If next project exists, do something with it
          console.log("Next project:", nextProjectData);
        } else {
          console.log("No next project found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]); // Fetch data whenever projectId changes

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Refs for images and text div
  const imagesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the index of the intersecting image
            const index = imagesRef.current.indexOf(entry.target);
            setCurrentImage(index + 1); // Images are 1-indexed
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
      }
    );

    imagesRef.current.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []); // Only run once on component mount

  const handleNextProjectClick = () => {
    // Do something when next project is clicked
      window.location.href = `/projectInfo/${nextProjectId}`;
  }

  return (
    <>
      {project && ( // Add null check for project
        <div className="flex flex-col max-h-screen">
          <div className='w-12/12 absolute top-0 left-0 right-0 z-10'>
            <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
              <div>
                <a href="/">
                  <img src={logo} alt="logo" className="w-16 h-12" />
                </a>
              </div>
              <div className="pr-4 flex gap-10">
                <nav className="relative">
                  {isOpen ? <FaTimes className="absolute -right-5 text-2xl mr-4" onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} />}
                  {isOpen && (
                    <ul className="flex gap-10">
                      <li><a href="/design" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Design</a></li>
                      <li><a href="/construction" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Construction</a></li>
                      <li><a href="/hub" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Hub</a></li>
                    </ul>
                  )}
                </nav>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-6 h-screen w-screen overflow-hidden">
            <div className="image-scroll overflow-y-scroll w-10/12">
              {project[0].images?.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={BASE_URL + '/' + image.image}
                  alt={`image${imgIndex}`}
                  className="w-full h-full object-cover object-center"
                  ref={(el) => imagesRef.current[imgIndex] = el}
                />
              ))}
              {/* this happens when we have a next project */}
              {/* {nextProject && (
              <img src={BASE_URL + '/' + nextProject[0]?.images[0].image} alt={nextProject[0]?.title} className=" nextProjectImg w-full h-full object-cover object-center" />
              )} */}
            </div>
            <div className="flex urugambo flex-col mt-20 w-2/12 pl-4 pr-10">
              <div className="text-justify text-xs">
                {currentImage === project[0].images.length && nextProject ? (
                  <p className='flex flex-col'>
                    <span className='text-xs font-bold'>Next project</span>
                    <span className='text-sm italic underline bottom-0 absolute' onClick={handleNextProjectClick}>{nextProject[0]?.title}</span>
                  </p>
                ) : (
                  <div>
                    <h6 className="text-xl pb-6">{project[0].title}</h6>
                    {project[0].description}
                    <span className='flex flex-row gap-x-4'>
                      <span className='flex flex-col text-sm italic pt-2'>Location <span>Kigali</span></span>
                      <span className='flex flex-col text-sm italic pt-2'>Completion <span>{project[0].end_date}</span></span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectInfo;
