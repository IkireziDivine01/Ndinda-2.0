import {useEffect, useState} from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { getAllConfigs, BASE_URL } from "../services";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [configs, setConfigs] = useState<any>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    //  setProjectsDropdownOpen(false);
  };

   useEffect(() => {
    const fetchData = async () => {
      try { 
        const data = await getAllConfigs();
        setConfigs(data);
        // console.log("Data fetched:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="flex justify-between items-center px-2  bg-gray-100"> 
      <div>
        {configs&&(
        <a href="/">
          <img src={BASE_URL+ '/' +configs?.logo} alt="logo" className="w-16 h-12" />
        </a>
        )}
      </div>
      <div className="pr-2 flex gap-10">
        <nav className="relative">
          {isOpen ? <FaTimes style={{color:'white'}} className="absolute -right-5 text-2xl mr-4" onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} style={{color:'white'}} />}
          {isOpen && (
            <ul className="flex gap-10 flex-row">  
             <li><a href="/aboutUs" className="text-main-light uppercase text-xs hover:text-main hover:font-bold active:text-main">We</a></li>
              <li><a href="/design" className="text-main-light uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Design</a></li>
              {/* <li><a href="/construction" className="text-main-light text-xs uppercase hover:text-main hover:font-bold active:text-main">Construction</a></li> */}
              {/* <li><a href="/hub" className="text-main-light uppercase text-xs hover:text-main hover:font-bold active:text-main">Hub</a></li> */}
              {/* <li><a href="/contactUs" className="text-main-light uppercase hover:text-main hover:font-bold active:text-main">Premium</a></li> */}
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}