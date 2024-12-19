import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles//Navbar.css"; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav>
      <NavLink to="/" className="logo">Meena Plastic</NavLink>

    
      <div className="hamburger" onClick={toggleMenu}>
      {isMobileMenuOpen ? "X" : "☰"}
      </div>

     
      <ul className={`navlink ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={closeMenu} 
            
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={closeMenu} 
            
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            onClick={closeMenu} 
            
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu} 
           
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
