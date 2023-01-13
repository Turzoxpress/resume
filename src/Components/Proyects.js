import React from "react";
import { Description } from "./Description";
import { Data } from "../Schemas/Data";

export const Proyects = ({ proyects }) => {
  return (
    <section className="proyects-experience section" id="proyects">
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {/* {proyects.map((proyect) => (
          <Proyect key={proyect.company} {...proyect} />
        ))} */}
        <div>
          <h4 className="experience__title">
            Please visit my website for all projects.
          </h4>
          {/* <a
            href={"https://turzoxpress.github.io/portfolio/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="home__information">
              <i className="bx bx-globe home__icon" /> {"turzoxpress.github.io/portfolio/"}
            </span>
          </a>

          <br></br> */}

          <a
            href={Data.profile.portfolio_direct_site}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="home__information">
              <i className="bx bx-globe home__icon" />{" "}
              {Data.profile.portfolio_direct_site}
            </span>
          </a>
          <br></br>
        </div>
      </div>
    </section>
  );
};

const Proyect = ({ name, company, period, description }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {name} - {company}
        </h3>
        <span className="experience__proyect">{period}</span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};
