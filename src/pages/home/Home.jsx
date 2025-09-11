import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Explore from "../../components/explore/Explore";
import RoadmapSection from "../roadmap/RoadmapSection";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learning Platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="wave-divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      <RoadmapSection />
      <Explore />
    </div>
  );
};

export default Home;
