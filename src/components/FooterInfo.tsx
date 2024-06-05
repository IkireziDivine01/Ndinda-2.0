// src/components/Footer.tsx
import { useState,useEffect } from 'react';
import img from '../assets/3.jpg'
import './styles/Footer.css';
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.png'
import X from '../assets/twitter.avif'
import { getAllProjects} from '../services';
import "./styles/FooterInfo.css";


const SmallFooter = () => {
  const [, setFooterProjects] = useState<any[]>([]); // Adjust the type as needed
  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await getAllProjects();
            setFooterProjects(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, []);

const smalStyles = {
    paddingBottom:'0px',
    marginTop:'110px'
    
  };


  return (
    <footer className="footero" style={{fontFamily:'cursive',backgroundColor:'#fff'}}>
      <div className="footer-content">
      <div className="latest-news" style={{height:'0px',opacity:'0',position:'relative',padding:'0',marginBottom:'0',backgroundColor:'#fff'}}>
          <div className="news-items">
            {/* {footerProjects&&
             footerProjects.map((footerProject, index) => {
             return (
            <div className="news-item">
              {footerProject.images?.length > 0 && (
              <img 
              // key={footerProject.images[0].id}
              src={BASE_URL + '/' + footerProject.images[0].image}
              alt={`image${index}`}
            />
          )}
              <p style={{textAlign:'center'}}>{footerProject.title}</p>
            </div>
             );
            })
          } */}
           <div className="news-item">
              <img 
              // key={footerProject.images[0].id}
              src={img}
            />
              <p style={{textAlign:'center'}}></p>
            </div>
            <div className="news-item">
              <img 
              // key={footerProject.images[0].id}
              src={img}
            />
              <p style={{textAlign:'center'}}></p>
            </div>
            <div className="news-item">
              <img 
              // key={footerProject.images[0].id}
              src={img}
            />
              <p style={{textAlign:'center'}}></p>
            </div>
            <div className="news-item">
              <img 
              // key={footerProject.images[0].id}
              src={img}
            />
              <p style={{textAlign:'center'}}></p>
            </div>
            <div className="news-item">
              <img 
              // key={footerProject.images[0].id}
              src={img}
            />
              <p style={{textAlign:'center'}}></p>
            </div>
            <div className="news-item">
              <img 
              // key={footerProject.images[0].id}
              src={img}
            />
              <p style={{textAlign:'center'}}></p>
            </div>
            <div className="news-item">
              <img 
              // key={footerProject.images[0].id}
              src={img}
            />
              <p style={{textAlign:'center'}}></p>
            </div>
          </div>
        </div>
        <div className="footer-infoo" style={smalStyles}>
          <div className="footer-info-itemo">
            <p>NDINDA DESIGN STUDIO</p>
          </div>
          <div className="footer-info-itemo">
            <h4>QUICK LINKS</h4>
            <a href="/aboutUs" className="uppercase text-xs hover:text-main hover:font-bold active:text-main footer-link">Our Team</a><br />
            <a href="/design" className="uppercase text-xs hover:text-main hover:font-bold active:text-main footer-link">Design</a><br />
            
          </div>
          <div className="footer-info-itemo">
            <h4>CONTACT</h4>
            <p>+250 782 628 921<br />
               ndindadesignstudio@gmail.com<br />
               18 KG 383 Street, Kigali, Rwanda</p>
          </div>
        <div className="footer-socialo footer-info-itemo">
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

export default SmallFooter;
