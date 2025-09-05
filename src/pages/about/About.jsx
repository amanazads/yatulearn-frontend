import React from "react"

"use client"

import "./about.css"
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";

const About = () => {
  const handleExploreResources = () => {
    window.open("/courses", "_blank")
  }

  const handleContactAction = (actionType) => {
    switch (actionType) {
      case "Visit Us":
        window.open("https://maps.app.goo.gl/98BDV6tzBFqT74CR9?g_st=ipc", "_blank")
        break
      case "Chat Now":
        window.open("https://wa.me/917068247779", "_blank")
        break
      case "Ask Question":
        window.open("mailto:yatulearn@gmail.com?subject=Question about YATU Learn", "_blank")
        break
      default:
        console.log("Action:", actionType)
    }
  }

  const handleContactSupport = () => {
    window.open("mailto:yatulearn@gmail.com?subject=Support Request", "_blank")
  }

  const stats = [
    { number: "345", label: "Total Users" },
    { number: "223", label: "Total Learning Resources" },
    { number: "50+", label: "Total Doubts Asked" },
    { number: "15+", label: "Expert Doubt Solvers" },
  ]

  const teamMembers = [
    {
      name: "Aman Azad",
      role: "Founder & CEO",
      image: "../images/amanpic.jpeg",
      social: { twitter: "https://x.com/amanazads", github: "https://github.com/amanazads", linkedin: "https://linkedin.com/in/amanazads", instagram: "https://instagram.com/amanazads" },
    },
    {
      name: "Yash Chobad",
      role: "Co-Founder & CTO",
      image: "../images/yashu.jpg",
      social: { linkedin: "https://www.linkedin.com/in/yash-chichad/", github: "https://github.com/programyash" },
    },
    {
      name: "Tariq Nabeel",
      role: "Lead Developer",
      image: "../images/tariqdp1.jpg",
      social: { linkedin: "https://www.linkedin.com/in/tariq-nabeel-903976295/", github: "https://github.com/TariqNabeel0" },
    },
  ]

  const contactOptions = [
    {
      icon: "📍",
      title: "Get in touch with us",
      description: "Connect with our friendly team",
      details: "Near Panjab University SSRGC, Hoshiarpur, Punjab, 146021, India",
      action: "Visit Us",
    },
    {
      icon: "💬",
      title: "24/7 Help Support",
      description: "We are here to help",
      details: "For WhatsApp",
      action: "Chat Now",
    },
    {
      icon: "❓",
      title: "Doubts or Requests",
      description: "Get help with your queries",
      details: "For Inquiries & Help",
      action: "Ask Question",
    },
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            YATU Learn is an ed-tech platform that provides college students with previous years' question papers,
            notes, and comprehensive roadmaps
          </h1>
          <p className="hero-description">
            Helping students develop skills in specific technologies or programming languages through accessible,
            high-quality educational resources.
          </p>
          <button className="hero-button" onClick={handleExploreResources}>
            Explore Resources
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <h2 className="section-title">ABOUT US</h2>
            <div className="about-card">
              <p className="about-slogan">"Empowering Every Student, Every Step of the Way"</p>
              <p className="slogan-attribution">- ( Yatu Learn's Slogan )</p>
              <p className="about-description">
                This motto reflects YATU Learn's commitment to supporting students throughout their academic journey,
                ensuring they have the resources and guidance necessary to succeed.
              </p>
            </div>
          </div>

          <div className="origin-section">
            <div className="origin-header">
              <div className="origin-icon">O</div>
              <h3 className="origin-title">Origin</h3>
            </div>
            <p className="origin-description">
              Born from the recognition that many students face significant difficulties in accessing quality education,
              we simplify learning with access to past question papers, detailed notes, and skill-building roadmaps in
              various fields. From the start, we've focused on delivering practical and relevant content to ensure
              students' academic and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon vision-icon">💡</div>
                <h3 className="card-title vision-title">Our Vision</h3>
              </div>
              <div className="card-content">
                <p>
                  We envision a future where all students have seamless access to essential resources and guidance for
                  academic success. Our goal is to become the leading platform that empowers students to excel, develop
                  critical skills, and confidently pursue their career goals in an inclusive, accessible learning
                  environment.
                </p>
              </div>
            </div>

            <div className="mission-card">
              <div className="card-header">
                <div className="card-icon mission-icon">🎯</div>
                <h3 className="card-title mission-title">Our Mission</h3>
              </div>
              <div className="card-content">
                <p>
                  Our aim is to simplify the educational journey for college students by providing accessible,
                  high-quality resources that enhance their learning experience. We equip students with the tools they
                  need to excel academically, master essential skills, and confidently prepare for their future careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">OUR TEAM</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-social">
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="social-link">
                      <AiFillTwitterSquare/>
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="social-link">
                      <FaSquareGithub />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="social-link">
                      <AiFillLinkedin />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="social-link">
                      <AiFillInstagram />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {contactOptions.map((option, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{option.icon}</div>
                <h3 className="contact-title">{option.title}</h3>
                <p className="contact-description">{option.description}</p>
                <p className="contact-details">{option.details}</p>
                <button className="contact-action" onClick={() => handleContactAction(option.action)}>
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Find answers to common questions about YATU Learn and our educational resources.
            </p>
          </div>
          <div className="faq-card">
            <h3 className="faq-card-title">Have more questions? We're here to help!</h3>
            <p className="faq-card-description">
              Contact our support team for personalized assistance with your learning journey.
            </p>
            <button className="faq-button" onClick={handleContactSupport}>
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
