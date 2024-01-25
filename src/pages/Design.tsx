import {useState} from 'react';
import logo from "../assets/Ndinda logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import image1 from '../assets/image1.png';
import './styles/Design.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';

const Design = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
     setProjectsDropdownOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
  };
    return (
        <>
           <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2'>
                <div className="flex justify-between items-center px-4 py-2 bg-gray-100"> 
      <div>
        <a href="/">
          <img src={logo} alt="logo" className="w-14 h-8" />
        </a>
      </div>
      <div className="pr-4 flex gap-10">
        <nav className="relative">
          {isOpen ? <FaTimes className="absolute -right-5 text-2xl mr-4" onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} />}
          {isOpen && (
            <ul className="flex gap-10">
              <li><a href="/design" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main">Design</a></li>
              <li><a href="/construction" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main">Construction</a></li>
              <li><a href="/contactUs" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main">Hub</a></li>
              <li><a href="/contactUs" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main">Premium</a></li>
              <li><a href="/contactUs" className="text-main-dark uppercase hover:text-main hover:font-bold active:text-main pr-14">Us</a></li>
            </ul>
          )}
        </nav>
      </div>
    </div>
            </div>  
            <div className='w-12/12 absolute top-20 left-1/4 pt-4'>
                <ul className='flex gap-10'>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">All</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Residential</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Hospitality</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Commercial</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Education</a></li>
                    <li><a className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">Health</a></li>
                </ul>
            </div>

            <div className="cards w-full h-full pt-10 pr-10 mt-32">
    <div className="card red w-96 h-80 pb-2">
      <img src={image1} alt="image1" className="w-full h-full object-cover object-center" />
        <p className="tip">Jeff House</p>
        <p className="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae 
aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna.
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. 
Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci.</p>
<Link to="/projectInfo" className="button-13" role="button">
  See more
</Link>
    </div>
    <div className="card blue w-96 h-80 pb-2">
       <img src={image1} alt="image1" className="w-full h-full object-cover object-center" />
        <p className="tip">Jeff House</p>
        <p className="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae 
aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna.
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. 
Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci.</p>
<Link to="/projectInfo" className="button-13" role="button">
  See more
</Link>
    </div>
    <div className="card green w-96 h-80 pb-2">
       <img src={image1} alt="image1" className="w-full h-full object-cover object-center" />
        <p className="tip">Jeff House</p>
        <p className="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae 
aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna.
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. 
Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci.</p>
<Link to="/projectInfo" className="button-13" role="button">
  See more
</Link>
    </div>
    <div className="card green w-96 h-80 pb-2">
       <img src={image1} alt="image1" className="w-full h-full object-cover object-center" />
        <p className="tip">Jeff House</p>
        <p className="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae 
aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna.
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. 
Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci.</p>
<Link to="/projectInfo" className="button-13" role="button">
  See more
</Link>
    </div>
    <div className="card green w-96 h-80 pb-2">
       <img src={image1} alt="image1" className="w-full h-full object-cover object-center" />
        <p className="tip">Jeff House</p>
        <p className="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae 
aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna.
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. 
Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci.</p>
<Link to="/projectInfo" className="button-13" role="button">
  See more
</Link>
    </div>
    <div className="card green w-96 h-80 pb-2">
       <img src={image1} alt="image1" className="w-full h-full object-cover object-center" />
        <p className="tip">Jeff House</p>
        <p className="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae 
aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna.
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. 
Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci.</p>
<Link to="/projectInfo" className="button-13" role="button">
  See more
</Link>
    </div>
</div>

            
        </>
    )
}

export default Design