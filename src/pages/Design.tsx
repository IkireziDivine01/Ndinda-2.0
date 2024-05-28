import { useState, useEffect } from 'react';
import logo from "../assets/Ndinda logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/Design.css';
import { Link } from 'react-router-dom';
import { getAllProjects, getAllCategories, BASE_URL } from '../services';
import SmallFooter from '../components/FooterInfo';

const Design = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState<any[]>([]); // Adjust the type as needed
    const [projects, setProjects] = useState<any[]>([]); // Adjust the type as needed
    const [selectedCategory, setSelectedCategory] = useState("All");
    // const [showDetails, setShowDetails] = useState(Array(12).fill(false));
    const [hoveredCard, setHoveredCard] = useState<null | number>(null);
    const [isProjectsLoaded, setIsProjectsLoaded] = useState(false); // Track loading state


    useEffect(() => {
        const fetchData = async () => {
            try {
                const cat = await getAllCategories();
                setCategories(cat);
                const data = await getAllProjects();
                setProjects(data);
                setIsProjectsLoaded(true); // Set loading state to true after projects are loaded
       
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSeeMoreHover = (cardIndex: number) => {
        setHoveredCard(cardIndex);
    };
    handleSeeMoreHover

    const handleDoubleClick = (projectId: number) => {
        window.location.href = `/projectInfo/${projectId}`;
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    //  useEffect(() => {
    //     const gridContainer = document.getElementById('gridContainer');
    //     const onecard=document.getElementById('onecard');
    //     if (gridContainer) {
    //         const gridItems = Array.from(document.querySelectorAll('.grid-item'));
    //         window.addEventListener('scroll', () => {
    //             const scrollY = window.scrollY || window.pageYOffset;
    //             const viewportHeight = window.innerHeight;
    //             const isMobile = window.matchMedia('(max-width: 768px)').matches;

    //             gridItems.forEach((item) => {
    //                 const rect = item.getBoundingClientRect();
    //                 const isVisible = rect.top < viewportHeight && rect.bottom >= 0;
    //                 if(isVisible){
    //                     console.log("");
    //                 }
    //             });

    //             if (scrollY > 0) {
    //                 gridContainer.style.gridTemplateColumns = 'auto';
    //                 onecard?.classList.add("fade");
    //             } else if(isMobile){
    //                 gridContainer.style.gridTemplateColumns = 'auto';
    //                 onecard?.classList.add("fade");
    //             }else {
    //                 gridContainer.style.gridTemplateColumns = 'auto auto auto';
    //                 onecard?.classList.remove("fade");
    //             }
    //         });
    //     }
    // }, []);

    return (
        <div className='ark:bg-main-light mx-auto w-full'>
  
           <div  style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '8%',
            }} className='z-10'>
           <div className='w-full bg-opacity-20 shadow-md backdrop-blur-sm p-2 head'>
                <div className="flex justify-between items-center px-2 bg-gray-100">
                    <div>
                        <a href="/">
                            <img src={logo} alt="logo" className="w-16 h-12" />
                        </a>
                    </div>
                    <div className="pr-2 flex gap-10">
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
           </div>
         
            <div className='w-12/12 absolute lg:top-24 md:top-10 top-20 left-0 sm:left-1/3 md:left-1/3 nav-2 mx-auto'>
                <ul className='flex gap-10'>
                    <li><a onClick={() => handleCategoryClick("All")} className={`text-main-dark capitalize hover:text-main hover:font-bold active:text-main ${selectedCategory === "All" && "font-bold"}`} style={{cursor:'pointer'}}>All</a></li>
                    {categories.map((category, index) => (
                        <li key={index}><a onClick={() => handleCategoryClick(category.title)} className={`text-main-dark capitalize hover:text-main hover:font-bold active:text-main ${selectedCategory === category.title && "font-bold"}`} style={{cursor:'pointer'}}>{category.title}</a></li>
                    ))}
                </ul>
            </div>

           <div className="relative lg:top-36 md:top-28 top-32 cards grid-container" id="gridContainer" style={{paddingBottom:'260px'}}>
    {/* Mapping over projects */}
    {selectedCategory === "All" &&
        projects.map((project, index) => {
            return (
                <div
                    key={index}
                    id='onecard'
                    className={`card ${hoveredCard === index && "hovered"} red w-auto h-auto dark-overlay grid-item`}
                    onDoubleClick={() => handleDoubleClick(project.id)}
                >
                    {project.images?.length > 0 && (
                        <img
                            key={project.images[0].id}
                            src={BASE_URL + '/' + project.images[0].image}
                            alt={`image${index}`}
                            className="w-full h-full object-cover object-center"
                        />
                    )}
                    <p className="tip">{project.title}
                    <span className='block text-left text-xs italic font-normal uppercase text-grey'>{project.location}</span>
                    </p>

                    <Link to={`/projectInfo/${project.id}`} /*className="button-13 transition-effect" role="button"*/ >
                    <div className={`details ${hoveredCard === index && "visible"}`} style={{ }}></div>
                 </Link>

                </div>
            );
        })
    }

    {/* Rendering projects based on selected category */}
    {selectedCategory !== "All" &&
        categories.map(category => {
            if (selectedCategory === category.title) {
                return category.projects.map((project:any, index:any) => (
                    <div
                        key={index}
                        
                        className={`card ${hoveredCard === index && "hovered"} red w-auto h-auto dark-overlay grid-item`}
                        onDoubleClick={() => handleDoubleClick(project.id)}
                    >
                        {project.images?.length > 0 && (
                            <img
                                key={project.images[0].id}
                                src={BASE_URL + '/' + project.images[0].image}
                                alt={`image${index}`}
                                className="w-full h-full object-cover object-center"
                            />
                        )}
                    <p className="tip">{project.title}
                    <span className='block text-left text-xs italic font-normal uppercase'>{project.location}</span>
                    </p>
                    <Link to={`/projectInfo/${project.id}`} /*className="button-13 transition-effect" role="button"*/ >
                    <div className={`details ${hoveredCard === index && "visible"}`} style={{ }}></div>
                 </Link>
                    </div>
                ));
            }
            return null;
        })
    }
</div>
{isProjectsLoaded && (
    <SmallFooter />
)}

</div>
    )
}
export default Design;


  