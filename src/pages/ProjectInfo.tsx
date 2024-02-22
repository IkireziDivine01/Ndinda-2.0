import { useState, useRef, useEffect } from 'react';
import logo from "../assets/logo.png";
import "./styles/ProjectInfo.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { getAllProjectsById, BASE_URL } from '../services';

const ProjectInfo = () => {
  const { projectId } = useParams<{ projectId: string }>() || { projectId: undefined };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(1);
  const [project, setProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  const nextProjectId: number | undefined = projectId ? parseInt(projectId) + 1 : undefined;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (projectId) {
          const data = await getAllProjectsById(projectId);
          console.log("Data fetched:", data);
          setProject(data);

          if (nextProjectId) {
            const nextProjectData = await getAllProjectsById(nextProjectId.toString());
            setNextProject(nextProjectData[0]);
            console.log("Next project:", nextProject || "No next project found");
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId, nextProjectId]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imagesRef.current.indexOf(entry.target as HTMLImageElement);
            setCurrentImage(index + 1);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    imagesRef.current.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNextProjectClick = () => {
    if (nextProjectId) {
      window.location.href = `/projectInfo/${nextProjectId}`;
    }
  }
 
  return (
    <>
      {project && (
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
              {project[0].images?.map((image: any, imgIndex: number) => (
                <img
                  key={imgIndex}
                  src={(imgIndex === project[0].images.length - 1 && nextProject && nextProject.images?.length > 0) ? BASE_URL + '/' + nextProject.images[0].image : BASE_URL + '/' + image.image}
                  className="w-full h-full object-cover object-center"
                  ref={(el) => el && (imagesRef.current[imgIndex] = el)} 
                />
              ))}
            </div>

             <div className="flex urugambo flex-col mt-20 w-2/12 pl-4 pr-10">
              <div className="text-justify text-xs">
               {currentImage === (project[0].images?.length || 0) && nextProject ? (
      <p className='flex flex-col'>
        <span className='text-xs font-bold'>Next project</span>
        <span className='text-sm italic underline bottom-0 absolute' onClick={handleNextProjectClick}>{nextProject.title}</span>
      </p>
    ) : (
      <div>
        <h6 className="text-xl pb-6">{project[0].title}</h6>
        {project[0].description}
        <span className='flex flex-row gap-x-4'>
          <span className='flex flex-col text-sm italic pt-2'>Location <span>{project[0].location}</span></span>
          <span className='flex flex-col text-sm italic pt-2'>Completion <span>{project[0].end_date}</span></span>
        </span>
      </div>
    )}
              </div>
            </div>

            {/* <div className="flex urugambo flex-col mt-20 w-2/12 pl-4 pr-10">
              <div className="text-justify text-xs">
               {currentImage !== (project[0].images?.length || 0) && nextProject && (
                  <div>
                    <p className='text-xs font-bold'>Next project</p>
                    <p className='text-sm italic underline bottom-0 absolute cursor-pointer' onClick={handleNextProjectClick}>{nextProject.title}</p>
                  </div>
                )}
                {currentImage == (project[0].images?.length || 0) && (
                  <div>
                    <h6 className="text-xl pb-6">{project[0].title}</h6>
                    <p>{project[0].description}</p>
                    <div className='flex flex-row gap-x-4'>
                      <p className='flex flex-col text-sm italic pt-2'>Location <span>{project[0].location}</span></p>
                      <p className='flex flex-col text-sm italic pt-2'>Completion <span>{project[0].end_date}</span></p>
                    </div>
                  </div>
                )}
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectInfo;
