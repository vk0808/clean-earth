import React from "react";

import { cause, effect } from "./info";

const CauseEffect = () => {
  return (
    <div className="cause-effect">
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
      <section className="effect">
        <h3 className="sub-heading">The Effect</h3>
        <ol className="listing">
          {effect.map((item) => {
            const { id, title, description } = item;
            return (
              <li key={id}>
                <h3>{title}</h3>
                <p className="effect-desc">{description}</p>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
};

export default CauseEffect;
