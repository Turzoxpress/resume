import React from "react";

export const Skills = ({
  technicalLabel,
  softLabel,
  technicalSkills,
  softSkills,
  backend,
  frontend,
  language
}) => {
  return (
    <>
      <section className="technical-skills section" id="skills">
        <h2 className="section-title">{backend.title}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {backend.data.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
      <section className="soft-skills section">
        <h2 className="section-title">{frontend.title}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {frontend.data.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>

      <section className="soft-skills section">
        <h2 className="section-title">{language.title}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {language.data.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
    </>
  );
};

const Skill = ({ skill }) => (
  <li className="skills__name">
    <span className="skills__circle" /> {skill}
  </li>
);
