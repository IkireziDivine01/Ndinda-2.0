// src/components/Footer.tsx
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.png'
import X from '../assets/twitter.avif'
import { getSomeProjects, BASE_URL } from '../services';
const Footer = () => {
  const [footerProjects, setFooterProjects] = useState<any[]>([]); // Adjust the type as needed
  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await getSomeProjects();
            setFooterProjects(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    fetchData();
}, []);



  const boxStyle = {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  };

  return (
    <footer className="footer" style={{fontFamily:'Garamond, serif'}}>
      <div className="footer-content">
        <div className="latest-news">
          <h4>DISCOVER MORE</h4>
          <div className="news-items">
             {footerProjects&&
             footerProjects.map((footerProject, index) => {
             return (
            <div className="news-item" style={{justifyContent:'center',alignItems:'center'}}>
              {footerProject.images?.length > 0 && (
              // <Link to={`/projectInfo/${footerProject.id}`} /*className="button-13 transition-effect" role="button"*/ >
              <Link to="#">
              <img 
              // key={footerProject.images[0].id}
              src={BASE_URL + '/' + footerProject.images[0].image}
              alt={`image${index}`}
            />
            </Link>
          )}
              <p style={{textAlign:'center'}}>{footerProject.title}</p>
            </div>
             );
            })
          } *
           
            
          </div>
        </div>
        <div className="footer-info" style={boxStyle}>
          <div className="footer-info-item">
            <p>NDINDA DESIGN STUDIO</p>
          </div>
          <div className="footer-info-item">
            <h4>QUICK LINKS</h4>
            <a href="/aboutUs" className="uppercase text-xs hover:text-main hover:font-bold active:text-main footer-link">Our Team</a><br />
            <a href="/design" className="uppercase text-xs hover:text-main hover:font-bold active:text-main footer-link">Design</a><br />
            
          </div>
          <div className="footer-info-item">
            <h4>CONTACT</h4>
            <p>+250 782 628 921<br />
               ndindadesignstudio@gmail.com<br />
               18 KG 383 Street, Kigali, Rwanda</p>
          </div>
        <div className="footer-social footer-info-item">
          <a href="https://www.instagram.com/ndindadesignstudios/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className='img-col'/>
          </a>
          <a href="https://www.linkedin.com/company/ndinda-design-studio" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn"  className='img-col' />
          </a>
          <a href="https://x.com/ndinda_designs" target="_blank" rel="noopener noreferrer">
            <img src={X} alt="X" className='img-tl'/>
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;