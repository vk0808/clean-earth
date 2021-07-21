import React from "react";

import { cause } from "./info";

const CauseEffect = () => {
  return (
    <>
      <section className="cause">
        <h3 className="sub-heading">The Cause</h3>
        <ol className="listing">
          {cause.map((item) => {
            const { id, title, description } = item;
            return (
              <li key={id}>
                <h3>{title}</h3>
                <p className="cause-desc">{description}</p>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};

export default CauseEffect;
