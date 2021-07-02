import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "../../styles.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <Logo className="logo" />
          <div className="nav-menu">
            <ul>
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
