import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router
import "./explore.css";

const Explore = () => {
  const navigate = useNavigate();

  const courses = [
    { title: "Web Development", gradient: "linear-gradient(135deg,#89f7fe,#66a6ff)", link: "/webdev" },
    { title: "Data Structure & Algorithm", gradient: "linear-gradient(135deg,#f6d365,#fda085)", link: "/dsa" },
    { title: "Artificial Intelligence & Machine Learning", gradient: "linear-gradient(135deg,#a1c4fd,#c2e9fb)", link: "/courses/ai-ml" },
    { title: "Cyber Security", gradient: "linear-gradient(135deg,#84fab0,#8fd3f4)", link: "/courses/cyber-security" },
    { title: "Operating System", gradient: "linear-gradient(135deg,#fccb90,#d57eeb)", link: "/courses/operating-system" },
    { title: "Computer Network", gradient: "linear-gradient(135deg,#fddb92,#d1fdff)", link: "/courses/computer-network" },
  ];

  const [activeImage, setActiveImage] = useState("web");

  const images = {
    web: "../images/Ms-roadmap.png",
    dsa: "../images/DSA.png",
    cs: "../images/Cyber Security.png",
    ai: "../images/AI.png",
    os: "../images/Functions-of-Operating-System-2.jpg.webp",
    cn: "../images/cn roadmap.png",
  };

  // Function to handle Explore button click
  const handleExploreClick = (link) => {
    navigate(link); // Navigate to the course detail page
  };

  return (
    <>
      {/* Courses Section */}
      <section className="explore">
        <div className="explore-container">
          <h2 className="explore-title">Explore Our Courses</h2>
          <div className="explore-grid">
            {courses.map((course, index) => (
              <div
                key={index}
                className="card"
                style={{ background: course.gradient }}
              >
                <p className="heading">{course.title}</p>
                <button
                  className="explore-btn"
                  onClick={() => handleExploreClick(course.link)}
                >
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <div className="roadmap_btns">
          <button
            className={`btn_web ${activeImage === "web" ? "active" : ""}`}
            onClick={() => setActiveImage("web")}
          >
            Web Development
          </button>
          <button
            className={`btn_dsa ${activeImage === "dsa" ? "active" : ""}`}
            onClick={() => setActiveImage("dsa")}
          >
            DSA
          </button>
          <button
            className={`btn_cs ${activeImage === "cs" ? "active" : ""}`}
            onClick={() => setActiveImage("cs")}
          >
            Cyber Security
          </button>
        </div>

        <div className="roadmap_imgs">
          <img src={images[activeImage]} alt={activeImage} />
        </div>

        <div className="roadmap_btns_right">
          <button
            className={`btn_ai ${activeImage === "ai" ? "active" : ""}`}
            onClick={() => setActiveImage("ai")}
          >
            AI ML
          </button>
          <button
            className={`btn_os ${activeImage === "os" ? "active" : ""}`}
            onClick={() => setActiveImage("os")}
          >
            Operating System
          </button>
          <button
            className={`btn_cn ${activeImage === "cn" ? "active" : ""}`}
            onClick={() => setActiveImage("cn")}
          >
            Computer Network
          </button>
        </div>
      </section>
    </>
  );
};

export default Explore;
