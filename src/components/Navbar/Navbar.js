import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

import { ReactComponent as Logo } from "./logo.svg";
import "../../styles.scss";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const changeNavbarBg = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 20}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <>
      <nav className={navbar ? "navbar nav-active" : "navbar"}>
        <div className="nav-center">
          <div className="nav-header">
            <Logo className="logo" />
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div className="nav-menu links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <li>
                <Link
                  className="nav-link"
                  to="problem"
                  spy={true}
                  smooth={true}
                >
                  problem
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="solution"
                  spy={true}
                  smooth={true}
                >
                  solution
                </Link>
              </li>
              <li>
                <button className="pledge" type="button">
                  take pledge
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
