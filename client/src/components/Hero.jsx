import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/img1.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Intern"}</h4>
        <h1>Welcome to Intern Intelligence Web Development</h1>
        <p>
          Explore cutting-edge web technologies and best practices for modern web development with Intern Intelligence.
        </p>
      </div>
    </>
  );
};

export default Hero;
