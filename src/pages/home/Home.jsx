import React from "react";
import heroImg from "../../assets/hero-img.svg";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-left">
          <div className="gradient__text">
            <h1>
              {" "}
              Empower your <span>learning</span> journey with expert{" "}
              <span>tutoring!</span>
            </h1>
          </div>
          <div className="cta-button">
            <button>Get Started</button>
          </div>
        </div>
        <div className="home-right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
