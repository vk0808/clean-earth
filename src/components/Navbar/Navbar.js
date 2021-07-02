import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

import { ReactComponent as Logo } from "./logo.svg";
import "../../styles.scss";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

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
      <nav>
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
                <a className="nav-link" href="#problem">
                  problem
                </a>
              </li>
              <li>
                <a className="nav-link" href="#solution">
                  solution
                </a>
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
