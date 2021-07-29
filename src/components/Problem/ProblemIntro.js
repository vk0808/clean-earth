import React from "react";

import CauseEffect from "./CauseEffect";
import Gallery from "./Gallery";

const ProblemIntro = () => {
  return (
    <>
      <section id="problem" className="problem">
        <h3 className="sub-heading">The Problem</h3>
        <h2 className="main-heading">India's waste crisis</h2>
        <p className="desc">
          Waste Management is a major problem in India. According to official
          estimations, around 68.8 million tons of Municipal Solid Waste (MSW)
          is generated in the country annually, out of which 51% organic waste,
          17% recyclables, 11% hazardous and 21% inert waste.
        </p>
        <p className="desc second-para">
          In metro cities in India, an individual produces an average of 0.8 kg/
          waste/ person daily. The average collection efficiency of MSW ranges
          from 22% to 60%. However, about 40% of all MSW is not collected at all
          and hence lies littered in the city/town and finds its way to nearby
          drains and water bodies.
        </p>
        <CauseEffect />
        <Gallery />
      </section>
    </>
  );
};

export default ProblemIntro;
