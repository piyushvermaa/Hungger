import React, { useState } from "react";
import "../components/styles/NavItems.css";
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-wrapper">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`nav-items ${isOpen ? 'active' : ''}`}>
        <ul>
          <li className="nav-link">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', outline: 'none' }}>Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', outline: 'none' }}>About</Link>
          </li>
          <li className="nav-link">
            <Link to="/service" style={{ textDecoration: 'none', color: 'inherit', outline: 'none' }}>Service</Link>
          </li>
          <li className="nav-link">
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', outline: 'none' }}>Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
