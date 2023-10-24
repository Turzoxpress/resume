import React, { useState, useEffect } from "react";
import { Description } from "./Description";
import { Data } from "../Schemas/Data";

export const DevOps = ({ devOps }) => {
  const [innerdevOps, setinnerdevOps] = useState([]);

  useEffect(() => {
    setinnerdevOps(devOps.data);
  }, []);

  return (
    <section className="proyects-experience section" id="proyects">
      <h2 className="section-title">DevOps</h2>
      <div className="experience__container bd-grid">
        <div>
          <ul className="skills__data">
            {innerdevOps.map((dataPoint, index) => (
              // <li key={index}>{dataPoint}</li>
              <li className="skills__name">
                <span className="skills__circle" /> {dataPoint}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
