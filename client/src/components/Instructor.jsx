import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons from react-icons

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1738351846/uploads/zufvxuvzhnhh4rhynb7e.avif' alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Zahid Rahimoon</h1>
          <h4>MERN Stack Developer</h4>
          <p>
          Muhammad Zahid is a skilled MERN Stack Developer with a strong foundation in MongoDB, Express.js, React, and Node.js, crafting dynamic and responsive web applications. With over 1 years of experience in frontend development, he excels in building seamless user interfaces using React, Tailwind CSS, and Material UI while ensuring optimized performance and scalability on the backend. Passionate about clean code, API integrations, and modern web technologies, he constantly enhances his expertise by solving LeetCode problems, contributing to GitHub, and working on real-world projects like Tomato Delivery. His ability to blend aesthetic design with robust functionality makes him a standout developer in the field.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/zahidrahimoon"
              target="_blank"
              rel="noopener noreferrer"
              style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black'}}
            >
              <FaGithub style={{marginRight: '5px'}} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zahidrahimoon/"
              target="_blank"
              rel="noopener noreferrer"
              style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black'}}
            >
              <FaLinkedin style={{marginRight: '5px'}} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
