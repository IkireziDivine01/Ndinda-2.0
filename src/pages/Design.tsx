import {useState, useEffect} from 'react';
import logo from "../assets/Ndinda logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import image1 from '../assets/image1.png';
import './styles/Design.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../services';

const Design = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(Array(12).fill(false)); // Array to track details for each card
    const [clickedCard, setClickedCard] = useState(null);
    const [projects, setProjects] = useState();

    useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProjects();
        console.log("Data fetched:", data); // Logging the fetched data
        console.log("Data type:", typeof data); // Logging the type of data received
        setProjects(data); // Fetching the first element of the array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log('====================================');
  console.log('Projects:', projects);
  console.log('====================================');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
     setProjectsDropdownOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

      const handleSeeMoreClick = (cardIndex) => {
        setShowDetails((prevDetails) => {
            const updatedDetails = [...prevDetails];
            updatedDetails[cardIndex] = !updatedDetails[cardIndex];
            return updatedDetails;
        });
        setClickedCard(cardIndex);
    };

    const handleDoubleClick = (cardIndex) => {
        // Redirect to details page on double click
        window.location.href = "/projectInfo";
    };


    return (
        <>
           <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm'>
                <div className="flex justify-between items-center px-2 bg-gray-100"> 
      <div>
        <a href="/">
          <img src={logo} alt="logo" className="w-20 h-20" />
        </a>
      </div>
      <div className="pr-2 flex gap-10">
        <nav className="relative">
          {isOpen ? <FaTimes className="absolute -right-5 text-2xl mr-4" onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} />}
          {isOpen && (
            <ul className="flex gap-10">
              <li><a href="/design" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Design</a></li>
              <li><a href="/construction" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Construction</a></li>
              <li><a href="/hub" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Hub</a></li>
              <li><a href="/contactUs" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Premium</a></li>
              <li><a href="/aboutUs" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Us</a></li>
            </ul>
          )}
        </nav>
      </div>
    </div>
            </div>  
            <div className='w-12/12 absolute top-20 left-1/4 pt-4'>
                <ul className='flex gap-10'>
                    <li><a className="text-main-dark font-bold capitalize hover:text-main hover:font-bold active:text-main">All</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Residential</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Hospitality</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Commercial</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Education</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Health</a></li>
                </ul>
            </div>
            
        {projects && ( // Add null check for projects 
         <div className="cards w-full pt-8 pr-8 mt-32 gap-4">
                {[...Array(12)].map((_, index) => (
                    <div
                        key={index}
                        className={`card ${clickedCard === index && "clicked"} red w-auto h-auto pb-2`}
                        onClick={() => handleSeeMoreClick(index)}
                        onDoubleClick={() => handleDoubleClick(index)}
                    >
                        <img src={image1} alt={`image${index}`} className="w-48 h-48 object-cover object-center " />
                        <p className="tip">{projects[0].title}</p>
                        {showDetails[index] && (
                            <div className='absolute top-20 left-0 bg-main-light p-2 drop-shadow-md h-auto w-full z-'>
                              {/* <img src={image1} alt={`image${index}`} className="w-48 h-48 object-cover object-center " /> */}
                                <p className="second-text">{projects[0].description}</p>
                                <Link to="/projectInfo" className="button-13" role="button">See more</Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        )}
          
        </>
    )
}

export default Design