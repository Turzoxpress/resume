// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, button } from "react";
import resumeToDownload from "../assets/Mahbubur_Rahman_Turzo_Full_Stack_Software_Engineer.pdf";

export const DownloadButton = ({ downloadResume }) => (
  <section className="profile section" id="profile">
    {/* <button
      onClick={downloadResume}
      className="custom_button custom_button_button4"
      type="button"
    >
      Download Resume
    </button> */}
    <a
      href={resumeToDownload}
      className="custom_button custom_button_button4"
      type="button"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Resume
    </a>
  </section>
);
