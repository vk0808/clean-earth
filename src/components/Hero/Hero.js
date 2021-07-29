import React from "react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left"></div>
      <div className="right">
        <h1 className="hero-title">think before throwing waste</h1>
        <p className="hero-desc">
          The total MSW generated in urban India has been estimated at
          <strong> 68.8 million tons per year</strong>, out of which about
          <strong> 40% </strong> is not collected at all, littering in the
          city/town and finds its way to nearby drains and water bodies. Take a
          pledge to reduce waste by incorporating
          <strong> 5 R principle</strong>.
        </p>
        <HashLink smooth to="pledge">
          <button type="button" className="pledge">
            Take pledge
          </button>
        </HashLink>
      </div>
    </section>
  );
};

export default Hero;
