import "./styles/Projects.css";
import Slider from "../components/Slider";
import Header from "../components/header";

const slides = [
  {
    city: "Jeff House",
    country: "Residential",
    img: house1,
  },
  {
    city: "Kigali Heights",
    country: "Commercial",
    img: house2,
  },
  {
    city: "One and Only",
    country: "Hospitality",
    img: image3,
  },
  {
    city: "Jeff Hotel",
    country: "Hospitality",
    img: image2,
  },
  {
    city: "KABC House",
    country: "Residential",
    img: image1,
  },
];

const Projects = () => {

  return (
    <div>
      <div className="absolute top-4 left-4">
        <Header />
      </div>
      <div style={{ padding: "10px" }}>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default Projects;