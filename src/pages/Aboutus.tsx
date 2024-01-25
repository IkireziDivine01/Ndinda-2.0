import React, { useEffect } from "react";
import logo from "../assets/Ndinda logo.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import { FcGoogle } from "react-icons/fc";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import './styles/Aboutus.css'
import Header from "../components/header";
import avatar from "../assets/avatar.jpg";
import house2 from "../assets/house2.jpg";

const Aboutus = () => {
  
  useEffect(() => {
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.section');
    const sectionWidth = sections[0].offsetWidth;
    
    // Clone the sections and append them to the end
    sections.forEach((section, index) => {
      const clone = section.cloneNode(true);
      container.appendChild(clone);
    });

    let scrollPosition = 0;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;

      // Check if the user has scrolled to the last section
      if (scrollLeft + container.offsetWidth >= container.scrollWidth) {
        // Move the scroll position to the beginning
        container.scrollLeft = 0;
        scrollPosition = 0;
      } else {
        scrollPosition = scrollLeft;
      }
    };

    // Attach the scroll event listener
    container.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once on mount

    return(
      <div>
         <Header/>
        <div className="container">
            {/* <img src={logo} className="logo" /> */}
    <div className="section flex  gap-10 pt-10">
        <img src={image1} className="w-full h-full" />
        <div className="pt-24">
            <h2 className="font-bold pb-4">About us</h2>
            <span className="text-wrap break-words text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.</span>
        </div>
    </div>
    
     <div className="section relative">
      <div className="h-full gap-4 w-full">
        <div className="h-full w-full bg-blue-400 absolute z-10">
    {/* <!-- big image --> */}
    <img src={image2} className="h-full w-full object-cover object-center" />
  </div>
    <div className="w-2/5 items-center bg-main relative z-20 h-full p-20">
        <h2 className="font-bold pb-4 pt-10 text-main-light">Our process</h2>
        <span className="text-wrap break-words text-justify text-main-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.</span>
    </div>
      </div>
    </div>
    
    
         <div className="section relative">
         <div className="flex h-full flex-row gap-4 w-full">
  <div className="h-96 w-2/12 bg-blue-400">
    {/* <!-- big image --> */}
    <img src={house2} className="h-full w-full object-cover object-center absolute z-10" />
  </div>

  <div className="w-2/5 items-center bg-main-light relative z-20 right-56 p-10 ">
    <h2 className="font-bold pb-4 pt-10">Leadership team</h2>
    <span className="text-wrap break-words text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.</span>
    <span className="absolute bottom-4 underline left-1/3"><a href="/contactUs" className="text-main-dark">Let's work together</a></span>
  </div>

  <div className="flex w-auto flex-col items-center bg-main-light relative z-20 p-4 left-[7.2em]">
    {/* <!-- our team --> */}
    <h2 className="p-8">Our Team</h2>

    <div className="flex flex-col items-center justify-center">
      <div className="h-12 w-12 rounded-full bg-red-400">
        <img src={avatar} className="h-full w-full object-cover object-center rounded-full" />
      </div>
      <span>Lorem Ipsum</span>
        <span className="w-full text-sm">Managing Director</span>
    </div>

    <div className="flex justify-between gap-14 pt-10">
      <div className="flex flex-col items-center  justify-center">
        <div className="h-12 w-12 rounded-full bg-red-400">
           <img src={avatar} className="h-full w-full object-cover object-center rounded-full" />
        </div>
        <span>Lorem Ipsum</span>
        <span className="w-full text-sm">Managing Director</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-red-400">
           <img src={avatar} className="h-full w-full object-cover object-center rounded-full" />
        </div>
        <span>Lorem Ipsum</span>
        <span className="w-full text-sm">Managing Director</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-red-400">
           <img src={avatar} className="h-full w-full object-cover object-center rounded-full" />
        </div>
        <span>Lorem Ipsum</span>
        <span className="w-full text-sm">Managing Director</span>
      </div>
    </div>
  </div>

  <div className="h-96 w-1/12 bg-blue-400">
    {/* <!-- small image --> */}
     <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph" className="h-full w-full object-cover object-center" />
  </div>
</div>

    </div>
    
    
         <div className="section relative flex">
          <div className="h-full w-full bg-blue-400 absolute z-10">
    {/* <!-- big image --> */}
    <img src={image1} className="h-full w-full object-cover object-center" />
  </div>
  <div className="w-2/5 items-center bg-main relative z-20 p-10 h-full ml-auto ">
    <h2 className="font-bold text-xl text-main-light">Our paterns</h2>
      <div className="flex flex-row gap-x-10 pt-10 pb-10">
        <FcGoogle size="60px" />
        <BiLogoMicrosoftTeams size="60px" />
        <FcGoogle size="60px" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold pb-4 text-main-light">What they say about us</span>
        <span className="text-wrap break-words text-justify text-main-light">"Lorem ipsum dolor sit amet, consectetur adipiscing elit.ipsum dolor sit amet, consectetur adipiscing elit.ipsum dolor sit amet, consectetur adipiscing elit."</span>
        <div className="flex flex-col pt-2">
          <span className="font-bold text-main-light">Lorem Ipsum</span>
        <span className="w-full text-sm text-main-light">Managing Director</span>
        </div>
      </div>
  </div>
    </div>
    
         <div className="section relative flex">
          <div className="h-full w-full bg-blue-400 absolute z-10">
    {/* <!-- big image --> */}
    <img src={image1} className="h-full w-full object-cover object-center" />
  </div>
  <div className="w-2/5 items-center bg-main-light relative z-20 h-full p-10 ml-auto">
    <h2 className="font-bold pb-4 pt-10">Leadership team</h2>
    <span className="text-wrap break-words text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.</span>
    <span className="absolute bottom-4 underline left-1/3"><a href="/contactUs" className="text-main-dark">Let's work together</a></span>
  </div>
    </div>
  </div>
  </div>
    )
};

export default Aboutus;