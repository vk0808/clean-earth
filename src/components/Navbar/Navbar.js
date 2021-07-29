import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { HashLink, NavHashLink } from "react-router-hash-link";

import { ReactComponent as Logo } from "./logo.svg";
import "../../style/main.scss";

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

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

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
            <HashLink smooth to="/">
              <Logo className="logo" />
            </HashLink>
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
                <NavHashLink
                  className="nav-link"
                  to={"/#problem"}
                  smooth
                  activeClassName="active"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  problem
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  className="nav-link"
                  to={"/#solution"}
                  smooth
                  activeClassName="active"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  solution
                </NavHashLink>
              </li>
              <li>
                <HashLink smooth to="pledge">
                  <button className="pledge" type="button">
                    take pledge
                  </button>
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
