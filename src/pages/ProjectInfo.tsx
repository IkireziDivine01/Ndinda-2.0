import { useState, useRef, useEffect } from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import logo from "../assets/logo.png";
import "./styles/ProjectInfo.css";
import { FaBars, FaTimes } from 'react-icons/fa';

const ProjectInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(1); // State to track current image

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setProjectsDropdownOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  // Refs for images and text div
  const imagesRef = useRef([]);
  const urugamboRef = useRef();

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

  return (
    <>
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
            <img src={image1} alt="Image 1" className="w-full h-full" ref={(el) => imagesRef.current[0] = el} />
            <img src={image2} alt="Image 2" className="w-full" ref={(el) => imagesRef.current[1] = el} />
            <img src={image3} alt="Image 3" className="w-full" ref={(el) => imagesRef.current[2] = el} />
            <img src={image2} alt="Image 4" className="w-full" ref={(el) => imagesRef.current[3] = el} />
          </div>
          <div className="flex urugambo flex-col mt-20 w-2/12 pl-4 pr-10" ref={urugamboRef}>
            <div className="text-justify text-xs">
              {currentImage === 4 ? (
                <p className='flex flex-col'>
                  <span className='text-xs font-bold'>Next project</span>
                  <span className='text-sm italic underline bottom-0 absolute'>Makuza Residence</span>
                </p>
              ) : (
                <p>
                  <h6 className="text-xl pb-6">Jeff House</h6>
                  <span className='pb-2'>
                    <span className="text-xl">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed eleifend justo ut tempuselementum. Pellentesque ac 
                  pulvinar risus. Proin eget fringilla urna. Integer ultrices, 
                  lectus a suscipit varius, risus augue porta augue, sed
                  volutpat ligula lorem eget est. Nam a turpis justo. 
                  Nunc vel feugiat tortor. Aliquam imperdiet nec 
                  nisl id convallis. Nulla facilisi. Nulla facilisi.
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed eleifend justo ut tempuselementum. Pellentesque ac 
                  pulvinar risus. Proin eget fringilla urna. Integer ultrices, 
                  lectus a suscipit varius, risus augue porta augue, sed
                  volutpat ligula lorem eget est. Nam a turpis justo. 
                  Nunc vel feugiat tortor. Aliquam imperdiet nec 
                  nisl id convallis. Nulla facilisi. Nulla facilisi.
                  <span className='flex flex-row gap-x-4'>
  <span className='flex flex-col text-sm	italic pt-2'>Location <span>Kigali</span></span>
<span className='flex flex-col text-sm	italic pt-2'>Completion <span>2024</span></span>
</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectInfo;
