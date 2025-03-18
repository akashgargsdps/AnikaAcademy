import React from "react";
import { Link } from "react-scroll";
import { FaChalkboardTeacher } from "react-icons/fa";
//import "./Navbar.css"; // Add CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaChalkboardTeacher size={30} />
        <span>Anika Academy</span>
      </div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="courses" smooth={true} duration={500}>Courses</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
