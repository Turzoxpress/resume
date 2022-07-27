import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Work.scss";
import constants from "../../constants/constants";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(constants.projects);
  }, []);

  const handleWorkFilter = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <h2 className="head-text">My Projects</h2>

      {/* <div className="app__work-filter">
        {["UI/UX", "Node JS", "Next JS", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div> */}

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <div className="row">
          {projects.map((items) => (
            <div
              className="col-12 app__work_item_cursor app__work_project_item_div"
              onClick={() => openInNewTab(items.url)}
            >
              <div className="card">
                <h3 className="app__work_item_title">
                  <strong>
                    <u>{items.name}</u>
                  </strong>
                </h3>

                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  {" "}
                  <img
                    src={items.imagePath}
                    alt="Profile"
                    className="border-2"
                    // className="rounded-circle"
                  />
                  <br></br>
                  <p className="app__work_description">{items.description}</p>
                  <p className="app__work_platform_p">
                    Platform : <strong>{items.platform}</strong>
                  </p>
                  <p className="app__work_platform_p">
                    Technology : <strong>{items.technology}</strong>
                  </p>
                  <div className="social-links mt-2">
                    {" "}
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter"></i>
                    </a>{" "}
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook"></i>
                    </a>{" "}
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram"></i>
                    </a>{" "}
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
