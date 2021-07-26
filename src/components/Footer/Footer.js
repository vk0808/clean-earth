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
              <FaFacebook size={20} />
            </li>
            <li>
              <FaTwitter size={20} />
            </li>
            <li>
              <GrInstagram size={20} />
            </li>
            <li>
              <FaYoutube size={20} />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-credit">
        <div className="footer-left">
          <p className="copyright">Copyright &copy; 2021 Clean Earth</p>
        </div>
        <div className="footer-right">
          <p className="site-author">
            <span>Site by: </span>
            <a
              href="https://github.com/vk0808/"
              target="_blank"
              className="author"
            >
              Vinod Kumar R
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
