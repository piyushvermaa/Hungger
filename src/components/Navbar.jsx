import React, { useState } from "react";
import "../components/styles/NavItems.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-wrapper">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-items ${isOpen ? 'active' : ''}`}>
        
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
