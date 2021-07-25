import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
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
              <FaFacebook size={25} />
            </li>
            <li>
              <FaTwitter size={25} />
            </li>
            <li>
              <GrInstagram size={25} />
            </li>
            <li>
              <FaYoutube size={25} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
