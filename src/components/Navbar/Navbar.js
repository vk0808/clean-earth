import React from "react";
import { ReactComponent as Logo } from "./logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <Logo className="logo" />
          <div className="nav-menu">
            <a className="nav-link" href="#problem">
              problem
            </a>
            <a className="nav-link" href="#solution">
              solution
            </a>
            <button className="pledge" type="button">
              take pledge
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
