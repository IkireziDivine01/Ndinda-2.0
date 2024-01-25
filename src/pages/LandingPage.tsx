import react, {useState, useEffect}  from 'react'
import './styles/LandingPage.css'
import Loader from '../components/loader';
import Header from '../components/header';
import landingGif from '../assets/landingGif.gif'

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000); 
  }, []);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <>
        <div className="landing">
          <div>
            <img src={landingGif} alt="gif" className='gif' />
          </div>
          <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2'>
              <Header/>
          </div>
        </div>
    </>
  )
}

export default LandingPage; 