import React from "react";
import { useState, useEffect } from "react";
import { Description } from "./Description";
import moment from "moment";
export const Works = ({ works, start_time }) => {
  let tempExpYears = 0; // [, settotalExperienceYears] = useState(0);
  const [totalExperienceYears, settotalExperienceYears] = useState(0);

  useEffect(() => {
    dateConverter(start_time, new Date());
    settotalExperienceYears(tempExpYears);
  }, []);

  const dateConverter = (startDate, endDate) => {
    let tempEndDate = endDate;
    if (tempEndDate === "now") {
      tempEndDate = new Date();
    }
    // console.log("Start Date : " + startDate + "  End date : " + tempEndDate);
    const date1 = moment(startDate);
    const date2 = moment(tempEndDate);

    // console.log("Start Date : " + date1 + "  End date : " + date2);

    let result = moment(date2).diff(date1, "days");
    //var ms = moment(date2).diff(moment(date1));
    let years = (result / 365).toFixed(1);
    tempExpYears = tempExpYears + parseFloat(years);
    return years;
  };
  return (
    <section className="work-experience section" id="experience">
      <h2 className="section-title">Experience</h2>
      <h4 className="experience__title">
        Total Experience : <strong>{totalExperienceYears}</strong> years
      </h4>
      <div className="experience__container bd-grid">
        {works.map((work) => (
          <Work key={work.company} {...work} />
        ))}
      </div>
    </section>
  );
};

const Work = ({ title, period, company, description }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title" style={{ color: "blue" }}>
          {title}
        </h3>

        <span className="experience__company">
          {period} | {company}
        </span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};
