import React from "react";
import { Options } from "./Options";
import profile_image from "../assets/resume_photo.jpg";

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
  website,
  github,
  github_repo_link,
  portfolio_direct_site,
}) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={profile_image} alt="profile_image" className="home__img" />
          <h1 className="home__title">
            <strong>{name}</strong>
          </h1>
          <h3 className="home__profession">{ocupation}</h3>
        </div>

        <div className="home__address bd-grid">
          <span className="home__information">
            <b style={{ width: "68px", display: "inline-block" }}>Address: </b>
            {location}
          </span>
          <span className="home__information">
            <b style={{ width: "52px", display: "inline-block" }}>Email:</b>
            <a href={`mailto:${email}`}>{email}</a>
          </span>
          <span className="home__information">
            {/* <i className="bx bx-phone home__icon" />  */}
            <b style={{ width: "52px", display: "inline-block" }}>Phone: </b>

            {telephone}
          </span>

          <a
            href="https://turzoxpress.github.io/resume/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="home__information">
              {/* <i className="bx bx-globe home__icon" />{" "} */}
              {/* {"turzoxpress.github.io/resume"} */}
              <b
                style={{
                  width: "68px",
                  display: "inline-block",
                  color: "#000000",
                }}
              >
                Resume:{" "}
              </b>
              <u
                style={{
                  color: "blue",
                }}
              >
                {"Click Here"}
              </u>
            </span>
          </a>

          <a
            href="https://turzoxpress.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="home__information">
              {/* <i className="bx bx-globe home__icon" />{" "}
              {"turzoxpress.github.io/portfolio"} */}
              <b
                style={{
                  width: "68px",
                  display: "inline-block",
                  color: "#000000",
                }}
              >
                Portfolio:{" "}
              </b>
              <u
                style={{
                  color: "blue",
                }}
              >
                {"Click Here"}
              </u>
            </span>
          </a>
          <a href={github_repo_link} target="_blank" rel="noopener noreferrer">
            <span className="home__information">
              {/* <i className="bx bxl-github home__icon" />
               {github} */}
              <b
                style={{
                  width: "60px",
                  display: "inline-block",
                  color: "#000000",
                }}
              >
                Github:{" "}
              </b>
              <u
                style={{
                  color: "blue",
                }}
              >
                {"Click Here"}
              </u>
            </span>
          </a>
        </div>
      </div>
      <Options />
    </section>
  );
};
