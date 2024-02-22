import { useState, useEffect } from 'react';
import logo from "../assets/Ndinda logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/Design.css';
import { Link } from 'react-router-dom';
import { getAllProjects, getAllCategories, BASE_URL } from '../services';

const Design = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState<any[]>([]); // Adjust the type as needed
    const [projects, setProjects] = useState<any[]>([]); // Adjust the type as needed
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showDetails, setShowDetails] = useState(Array(12).fill(false));
    const [clickedCard, setClickedCard] = useState<null | number>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cat = await getAllCategories();
                setCategories(cat);
                const data = await getAllProjects();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // console.log("categories are: ",categories);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSeeMoreClick = (cardIndex: number) => {
        setShowDetails((prevDetails) => {
            const updatedDetails = [...prevDetails];
            updatedDetails[cardIndex] = !updatedDetails[cardIndex];
            return updatedDetails;
        });
        setClickedCard(cardIndex);
    };

    const handleDoubleClick = (projectId: number) => {
        window.location.href = `/projectInfo/${projectId}`;
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div className='dark:bg-main-light'>
            <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2'>
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
                                    <li><a href="/design" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Design</a></li>
                                    <li><a href="/construction" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Construction</a></li>
                                    <li><a href="/hub" className="text-main-dark uppercase text-xs hover:text-main hover:font-bold active:text-main">Hub</a></li>
                                    <li><a href="/aboutUs" className="text-main-light uppercase text-xs hover:text-main hover:font-bold active:text-main pr-14">Us</a></li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            </div>
        
            <div className='w-12/12 absolute top-16 pb-16 left-1/3 pt-10'>
                <ul className='flex gap-10'>
                    <li><a onClick={() => handleCategoryClick("All")} className={`text-main-dark capitalize hover:text-main hover:font-bold active:text-main ${selectedCategory === "All" && "font-bold"}`}>All</a></li>
                    {categories.map((category, index) => (
                        <li key={index}><a onClick={() => handleCategoryClick(category.title)} className={`text-main-dark capitalize hover:text-main hover:font-bold active:text-main ${selectedCategory === category.title && "font-bold"}`}>{category.title}</a></li>
                    ))}
                </ul>
            </div>

           <div className="absolute top-1/4 left-0 cards w-full gap-4 pr-4 pl-4">
    {/* Mapping over projects */}
    {selectedCategory === "All" &&
        projects.map((project, index) => {
            return (
                <div
                    key={index}
                    className={`card ${clickedCard === index && "clicked"} red w-auto h-auto pb-2`}
                    onClick={() => handleSeeMoreClick(index)}
                    onDoubleClick={() => handleDoubleClick(project.id)}
                >
                    {project.images?.length > 0 && (
                        <img
                            key={project.images[0].id}
                            src={BASE_URL + '/' + project.images[0].image}
                            alt={`image${index}`}
                            className="w-full h-48 object-cover object-center"
                        />
                    )}
                    <p className="tip">{project.title}</p>
                    {showDetails[index] && (
                        <div className='absolute bottom-0 left-0 bg-main-light p-2 drop-shadow-md h-auto w-full z-'>
                            <p className="second-text">{project.description}</p>
                            <Link to={`/projectInfo/${project.id}`} className="button-13" role="button">See more</Link>
                        </div>
                    )}
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
                        className={`card ${clickedCard === index && "clicked"} red w-auto h-auto pb-2`}
                        onClick={() => handleSeeMoreClick(index)}
                        onDoubleClick={() => handleDoubleClick(project.id)}
                    >
                        {project.images?.length > 0 && (
                            <img
                                key={project.images[0].id}
                                src={BASE_URL + '/' + project.images[0].image}
                                alt={`image${index}`}
                                className="w-full h-48 object-cover object-center"
                            />
                        )}
                        <p className="tip">{project.title}</p>
                        {showDetails[index] && (
                            <div className='absolute bottom-0 left-0 bg-main-light p-2 drop-shadow-md h-auto w-full z-'>
                                <p className="second-text">{project.description}</p>
                                <Link to={`/projectInfo/${project.id}`} className="button-13" role="button">See more</Link>
                            </div>
                        )}
                    </div>
                ));
            }
            return null;
        })
    }
</div>

        </div>
    )
}

export default Design;
