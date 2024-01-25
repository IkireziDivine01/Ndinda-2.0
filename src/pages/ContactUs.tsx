import react, {useState} from "react";
import './styles/ContactUs.css';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import image2 from '../assets/Ndinda 2.png';
import logo from '../assets/Ndinda logo.png'
import { IoClose } from "react-icons/io5";
import Header from "../components/header";

const ContactUs = () => {
    const [showForm, setShowForm] = useState(false);

    const handleTalkClick = () => {
        setShowForm(true);
    };

     const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
     setShowForm(false);
  };

    return (
       <div>
        <Header/>
        <div className="main-div-contact">
            <div className="mainContact">
                {/* <img src={logo} alt="logo" className='logo' /> */}
                <div className="header-text">
                    <h6>Project Inquiry</h6>
                    We're here to help. Whether you have a question, a comment, or a suggestion, we're always happy to hear from you.
                </div>
                <div className="icon-with-text">
                    <FaLocationCrosshairs />
                    <span className="text">1 KN 78 St, Kigali Norrsken House Kigali</span>
                </div>
                <div className="icon-with-text">
                    <HiOutlineMail />
                    <span className="text">contact@company.com</span>
                </div>
                <div className="icon-with-text">
                    <FaPhoneAlt />
                    <span className="text">+250788449055</span>
                </div>
                <span className="talk-text" onClick={handleTalkClick}>Let's talk</span>
            </div>
                {showForm ? (
                    <div className="form-container">
                        {/* Your form elements go here */}
                        <form onSubmit={handleSubmit}>
                            <label className="close-icon">
                                <IoClose onClick={() => setShowForm(false)} />
                                Close
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <button className="button-class" type="submit">Submit</button>
                        </form>
                    </div>
                ) : (
                        <div className="image-form">
                            <img src={image2} alt="architectural picture" />
                        </div>
                    )}
        </div>
        </div>
    )
}

export default ContactUs;