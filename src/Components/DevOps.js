import React, { useState, useEffect } from "react";
import { Description } from "./Description";
import { Data } from "../Schemas/Data";

export const DevOps = ({ devOps }) => {
  const [innerdevOps, setinnerdevOps] = useState("");

  useEffect(() => {
    let tempString = "";
    for (let i = 0; i < devOps.data.length; i++) {
      if (i < devOps.data.length - 1) {
        tempString = tempString + devOps.data[i] + ", ";
      } else {
        tempString = tempString + devOps.data[i];
      }
    }

    setinnerdevOps(tempString);
  }, []);

  return (
    <section className="proyects-experience section" id="proyects">
      <h2 className="section-title">DevOps</h2>
      <div className="experience__container bd-grid">
        {/* {proyects.map((proyect) => (
          <Proyect key={proyect.company} {...proyect} />
        ))} */}
        <div>
          {/* <h4 className="experience__title">
            Please visit my website for all projects.
          </h4> */}
          {/* <a href={Data.profile.portfolio_direct_site} target="_blank" rel="noopener noreferrer"><span className="home__information">
            <i className="bx bx-globe home__icon" /> {Data.profile.website}
          </span></a>

          <br></br> */}

          <p>{innerdevOps}</p>
        </div>
      </div>
    </section>
  );
};
