import {useState} from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import logo from "../assets/logo.png";
import "./styles/ProjectInfo.css";
import { FaBars, FaTimes } from 'react-icons/fa';

const ProjectInfo = () => {

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
              {/* <li><a href="/contactUs" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Premium</a></li> */}
              {/* <li><a href="/aboutUs" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Us</a></li> */}
            </ul>
          )}
        </nav>
      </div>
    </div>
            </div>  

      <div className="flex flex-row gap-6 h-screen overflow-hidden">
        <div className="image-scroll overflow-y-scroll relative">
          <img src={image1} alt="Image 1" className="w-full h-full"/>
          <img src={image2} alt="Image 2" className="w-full"/>
          <img src={image3} alt="Image 3" className="w-full"/>
          <img src={image1} alt="Image 4" className="w-full"/>
        </div>
        <div className="flex-1 mr-4 mt-32">
          <h6 className="font-bold text-xl pb-6">Jeff House</h6>
        <span className="text-justify text-xs pr-6 pl-6">
          <span className="text-xl font-bold">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed eleifend justo ut tempuselementum. Pellentesque ac 
pulvinar risus. Proin eget fringilla urna. Integer ultrices, 
lectus a suscipit varius, risus augue porta augue, sed
 volutpat ligula lorem eget est. Nam a turpis justo. 
Nunc vel feugiat tortor. Aliquam imperdiet nec 
nisl id convallis. Nulla facilisi. Nulla facilisi.
        </span>
        <span className="pt-2 text-wrap text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed eleifend justo ut tempuselementum. Pellentesque ac 
pulvinar risus. Proin eget fringilla urna. Integer ultrices, 
lectus a suscipit varius, risus augue porta augue, sed
 volutpat ligula lorem eget est. Nam a turpis justo. 
Nunc vel feugiat tortor. Aliquam imperdiet nec 
nisl id convallis. Nulla facilisi. Nulla facilisi.
        </span>
        </div>
      </div>
    </div>
    );
}

export default ProjectInfo;