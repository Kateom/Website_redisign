import React from "react";
import "../Styles/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          <NavLink to="/" className="logo footer-title">
            Meena Plastic
          </NavLink>
          <div className="content">
            <p>
              We are Meena Plastics, a business with ISO 9001/2015
              certification. We are well-known and reputable for providing the
              highest quality carry bags, roll garbage bags, bio-hazardous bags,
              and other products.
            </p>
          </div>
        </div>

        <div className="footer-center">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="quick-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h2 className="footer-title">Contact</h2>
          <p className="content">
            <strong>Address:</strong> Meena Plastics
            <br />
            882/5 Makarpura GIDC Industrial estate
            <br />
            Vadodara-390010
          </p>
          <p className="content">
            <strong>Phone:</strong> +91 94083 42280
          </p>
          <p className="content">
            <strong>Email:</strong> meenaplastics882@gmail.com
            <br />
            yashkukreja1309@gmail.com
          </p>
        </div>
      </div>
      <div className="copyrigth-container">
        <p className="copyright">
          Copyright ©2024 Meena Plastics. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
