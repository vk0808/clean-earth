import React, { useState } from "react";

import { cause, effect } from "./info";
import List from './List';

const CauseEffect = () => {
  const [causeList, setCauseList] = useState(cause);
  const [effectList, setEffectList] = useState(effect);
  return (
    <div className="cause-effect">
      <section className="cause">
        <h3 className="sub-heading">The Cause</h3>
        <ol className="listing">
          {causeList.map((item) => {
            return (
              <List key={item.id} {...item} ></List>
            );
          })}
        </ol>
      </section>
      <section className="effect">
        <h3 className="sub-heading">The Effect</h3>
        <ol className="listing">
          {effectList.map((item) => {
            return (
              <List key={item.id} {...item}></List>
            );
          })}
        </ol>
      </section>
    </div>
  );
};

export default CauseEffect;
