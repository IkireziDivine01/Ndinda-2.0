import React, {useState} from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
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
    <div className="flex justify-between items-center px-2  bg-gray-100"> 
      <div>
        <a href="/">
          <img src={logo} alt="logo" className="w-16 h-12" />
        </a>
      </div>
      <div className="pr-2 flex gap-10">
        <nav className="relative">
          {isOpen ? <FaTimes style={{color:'white'}} className="absolute -right-5 text-2xl mr-4" onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} style={{color:'white'}} />}
          {isOpen && (
            <ul className="flex gap-10">  
              <li><a href="/design" className="text-main-light uppercase text-xs hover:text-main hover:font-bold active:text-main">Design</a></li>
              <li><a href="/construction" className="text-main-light text-xs uppercase hover:text-main hover:font-bold active:text-main">Construction</a></li>
              <li><a href="/hub" className="text-main-light uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Hub</a></li>
              {/* <li><a href="/contactUs" className="text-main-light uppercase hover:text-main hover:font-bold active:text-main">Premium</a></li> */}
              {/* <li><a href="/aboutUs" className="text-main-light uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Us</a></li> */}
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}