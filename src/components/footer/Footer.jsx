import React from "react";
import "./footer.css";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="flex_align">
        <div className="box1">
          <div className="logo">
            <a href="/">
              <img
                src="../images/YL_Black-removebg-preview2.png"
                alt=""
                height="110px"
                width="200px"
              />
            </a>
          </div>
          <div className="header">
            <div className="same">
              <p>Explore</p>
              <a href="/">Home</a> <br />
              <a href="/courses">Courses</a> <br />
              <a href="/paper">Paper</a> <br />
              <a href="/about">About</a> <br />
            </div>
          </div>
          <div className="policies">
            <div className="same">
              <div className="policy">
                <p>Policy</p>
                <a href="">Privacy Policy</a>
                <a href="/about#contact">Contact Us</a>
              </div>
              <div className="media">
                <p>Social:</p>
                <div className="icon_flex">
                  <a href="https://www.linkedin.com/company/yatulearn/">
                    <AiFillLinkedin />
                  </a>
                  <a href="https://www.instagram.com/yatulearn/">
                    <AiFillInstagram />
                  </a>
                  <a href="https://x.com/yatulearn">
                    <AiFillTwitterSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical_line"></div>
          <div className="email_address">
            <div className="same">
              <p className="mail">Address:</p>
              <span>
                Near Panjab University <br /> SSGRC, Bajwara, Una Road <br />
                Hoshiarpur, Punjab, 146021, India
              </span>{" "}
              <br />
              <div className="num">Ph No. : 7068247779</div>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                E-mail: yatulearn@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal_line"></div>
      <div className="copyright">
        <p>© 2025 YATU Learn. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
