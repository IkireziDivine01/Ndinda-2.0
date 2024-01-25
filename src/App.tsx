import './App.css'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/Aboutus';
import ProjectInfo from './pages/ProjectInfo';
import Construction from './pages/Construction';
import Design from './pages/Design';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path= "/projectInfo" element={<ProjectInfo/>} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    </Router>
  )
  
}

export default App
