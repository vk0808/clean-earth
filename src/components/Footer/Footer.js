import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import { ReactComponent as Logo } from "../Navbar/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-img"></div>
      <div className="footer-content">
        <div className="footer-left">
          <Logo className="logo" />
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <GrInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
