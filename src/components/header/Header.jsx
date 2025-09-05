import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = ({ isAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header>
        <div className="logo"><a href="/">YATU Learn</a></div>

        {/* Desktop Nav */}
        <nav className="link desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/paper">Paper</Link>
          <Link to="/about">About</Link>
          {isAuth ? <Link to="/account">Account</Link> : <Link to="/login">Login</Link>}
        </nav>

        {/* Mobile Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/courses" onClick={closeMenu}>Courses</Link>
          <Link to="/paper" onClick={closeMenu}>Paper</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          {isAuth ? (
            <Link to="/account" onClick={closeMenu}>Account</Link>
          ) : (
            <Link to="/login" onClick={closeMenu}>Login</Link>
          )}
        </nav>
      </header>

      {/* Background Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
