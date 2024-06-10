import { useState, useRef, useEffect } from 'react';
import logo from "../assets/logo.png";
import "./styles/ProjectInfo.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { getAllProjectsById, BASE_URL, getAllProjects } from '../services';
import SmallFooter from '../components/FooterInfo';

const ProjectInfo = () => {
  const { projectId } = useParams<{ projectId: string }>() || { projectId: undefined };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(1);
  const [project, setProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  const [ids, setIds] = useState<number[]>([]);

  console.log(ids);

  const findNextProjectId = (projectId: string | undefined) => {
    if (!projectId || ids.length === 0) return undefined;

    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === parseInt(projectId)) {
        if (i === ids.length - 1) return undefined;
        return ids[i + 1];
      }
    }

    return undefined; // Project ID not found
  };

  const nextProjectId = findNextProjectId(projectId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projec = await getAllProjects();
        const id = projec.map((item: any) => item.id);
        setIds(id);
        if (projectId) {
          const data = await getAllProjectsById(projectId);
          setProject(data);

          if (nextProjectId) {
            const nextProjectData = await getAllProjectsById(nextProjectId.toString());
            setNextProject(nextProjectData[0]);
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
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            const index = imagesRef.current.indexOf(entry.target as HTMLImageElement);
            setCurrentImage(index + 1);

            // Check if the current image is the last one
            if (index === project[0].images.length - 1) {
              // Display next project
              if (nextProject) {
                const nextProjectElement = document.getElementById('nextProject');
                if (nextProjectElement) {
                  nextProjectElement.classList.add('show');
                }
              }
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust threshold for triggering intersection
      }
    );

    imagesRef.current.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, [project, nextProject]);

  // Prevent scroll chaining
  useEffect(() => {
    const preventScrollChaining = (e: WheelEvent) => {
      if (e.target instanceof HTMLElement) {
        const scrollableElement = e.target.closest('.image-scroll') as HTMLElement;
        if (scrollableElement) {
          const isAtTop = scrollableElement.scrollTop === 0;
          const isAtBottom = scrollableElement.scrollHeight - scrollableElement.scrollTop === scrollableElement.clientHeight;
          if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('wheel', preventScrollChaining, { passive: false });

    return () => {
      document.removeEventListener('wheel', preventScrollChaining);
    };
  }, []);

  const handleNextProjectClick = () => {
    if (nextProjectId) {
      window.location.href = `/projectInfo/${nextProjectId}`;
    }
  };

  return (
    <>
      {project && (
        <div className="relative flex flex-col max-h-screen">
          <div className='w-full fixed top-0 left-0 right-0 z-10 head2'>
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
                      <li><a href="/aboutUs" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">We</a></li>
                      <li><a href="/design" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Design</a></li>
                      {/* <li><a href="/construction" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Construction</a></li> */}
                      {/* <li><a href="/hub" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Hub</a></li> */}
                    </ul>
                  )}
                </nav>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-screen h-screen overflow-hidden">
            <div className="image-scroll overflow-y-scroll w-full h-full sm:w-10/12">
              {project[0].images?.map((image: any, imgIndex: number) => (
                <img
                  key={imgIndex}
                  src={(imgIndex === project[0].images.length - 1 && nextProject && nextProject.images?.length > 0) ? BASE_URL + '/' + nextProject.images[0].image : BASE_URL + '/' + image.image}
                  className="w-full h-full object-cover object-center one-project-image"
                  ref={(el) => el && (imagesRef.current[imgIndex] = el)}
                />
              ))}
            </div>

            <div className="flex urugambo flex-col mt-4 sm:mt-20 w-full sm:w-2/12 pl-4 pr-4 sm:pr-10">
              <div className="text-justify text-xs desc">
                {currentImage === (project[0].images?.length || 0) && nextProject ? (
                  <p className='flex flex-col opac'>
                    <span className='text-xl font-bold next-text'>Next project</span>
                    <span id="nextProject" className='text-base italic underline cursor-pointer lg:absolute lg:bottom-14 pt-4 text-main-dark next-button' onClick={handleNextProjectClick}>{nextProject.title}</span>
                  </p>
                ) : (
                  <div className='fade-in'>
                    <h6 className="text-xl pb-6">{project[0].title}</h6>
                    {project[0].description}
                    <div className='flex flex-row gap-x-4'>
                      <span className='flex flex-col text-sm italic pt-2'>Location <span>{project[0].location}</span></span>
                      <span className='flex flex-col text-sm italic pt-2'>Completion <span>{project[0].end_date}</span></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {project && <SmallFooter />}
    </>
  );
}

export default ProjectInfo;
