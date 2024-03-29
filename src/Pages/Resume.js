import React, { useState, useEffect, button } from "react";

import { Profile } from "../Components/Profile";

import { Academic } from "../Components/Academic";
import { Skills } from "../Components/Skills";
import { Proyects } from "../Components/Proyects";
import { Works } from "../Components/Works";
import { SocialMedia } from "../Components/SocialMedia";
import { AboutMe } from "../Components/AboutMe";
import { Menu } from "../Components/Menu";
import { SEO } from "../Components/SEO";

import { Data, Data as dataSchema } from "../Schemas/Data";
import { Menu as menuSchema } from "../Schemas/Menu";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";

import { DownloadButton } from "../Components/DownloadButton";
import { DevOps } from "../Components/DevOps";
import Acheivement from "../Components/Acheivement";
import QRcodeComponent from "../Components/QRcodeComponent.js";

export const Resume = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;

  const downloadResume = async () => {
    //--------------------

    const node = document.getElementById("area-cv");
    if (node) {
      const printWindow = window.open("", "_blank", "width=1280,height=720");

      printWindow.document.open();
      await printWindow.document.write(`
        <html>
        <head>
      <style>
      /*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

/*===== VARIABLES CSS =====*/
:root {
  --header-height: 3rem;

  /*========== Colors ==========*/
  --title-color: #000000;
  --text-color: #000000;
  --text-color-light: #7b88a1;
  --container-color: #ffffff;
  --container-color-alt: #f7f9fb;
  --body-color: #f2f4f8;

  /*========== Font and typography ==========*/
  --body-font: "Poppins", sans-serif;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.875rem;
  --smaller-font-size: 0.813rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margenes ==========*/
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

/*========== BASE ==========*/
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0 0 var(--header-height) 0;
  padding: 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}

h1,
h2,
h3,
ul,
p {
  margin: 0;
}

h1,
h2,
h3 {
  color: var(--title-color);
  font-weight: var(--font-medium);
}

ul {
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

/*========== Variables Dark theme ==========*/
body.dark-theme {
  --title-color: #eceff4;
  --text-color: #b5c4db;
  --container-color: #2e3440;
  --container-color-alt: #3b4252;
  --body-color: #242933;
}

/*========== Options button ==========*/
.change-theme {
  position: absolute;
  right: 0;
  top: 2.2rem;
  display: flex;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
}

.change-theme:hover {
  color: var(--title-color);
}

.enable-snow {
  position: absolute;
  top: 2.2rem;
  left: 0;
  font-size: 1.2rem;
  color: var(--text-color);
  cursor: pointer;
}

.enable-snow:hover {
  color: var(--title-color);
}

/*========== CSS CLASS ==========*/
.section {
  padding: 1.5rem 0;
}

.section-title {
  font-size: var(--h2-font-size);
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  text-transform: uppercase;
  letter-spacing: 0.35rem;
  text-align: center;
  margin-bottom: var(--mb-3);
}

.bd-container {
  max-width: 968px;
  width: calc(100% - 3rem);
  margin-left: var(--mb-3);
  margin-right: var(--mb-3);
}

.bd-grid {
  display: grid;
  gap: 1.5rem;
}

.l-header {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}



.nav__logo,
.nav__toggle {
  color: var(--title-color);
  font-weight: var(--font-medium);
}

.nav__toggle {
  font-size: 1.2rem;
  cursor: pointer;
}

.nav__item {
  text-align: center;
}

.nav__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.nav__link {
  display: flex;
  flex-direction: column;
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
  font-weight: var(--font-medium);
}

.nav__link:hover {
  color: var(--title-color);
}

.nav__icon {
  font-size: 1.2rem;
  margin-bottom: var(--mb-1);
  z-index: -1;
}

.show-menu {
  bottom: var(--header-height);
}

.active-link {
  color: var(--title-color);
}

.home {
  position: relative;
}

.home__container {
  gap: 3rem;
}

.home__data {
  gap: 0.5rem;
  text-align: center;
}

.home__img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  justify-self: center;
  margin-bottom: var(--mb-1);
  border: solid white 4px;
}

.home__title {
  font-size: var(--h2-font-size);
}

.home__profession {
  font-size: var(--normal-font-size);
  margin-bottom: var(--mb-1);
}

.home__address {
  gap: 1rem;
}

.home__information {
  display: flex;
  align-items: center;
  font-size: var(--small-font-size);
}

.home__icon {
  font-size: 1.2rem;
  margin-right: 0.25rem;
}

.home__button-movil {
  display: inline-block;
  border: 2px solid var(--text-color);
  color: var(--title-color);
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  transition: 0.3s;
  font-weight: var(--font-medium);
  margin-top: var(--mb-3);
}

.home__button-movil:hover {
  background-color: var(--text-color);
  color: var(--container-color);
}

.social__container {
  grid-template-columns: max-content;
  gap: 1rem;
}

.social__link {
  display: inline-flex;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--text-color);
}

.social__link:hover {
  color: var(--title-color);
}

.social__icon {
  font-size: 1.2rem;
  margin-right: 0.25rem;
}

.profile__description {
  text-align: center;
}

.education__content,
.experience__content {
  display: flex;
}

.education__time,
.experience__time {
  padding-right: 1rem;
}

.education__rounder,
.experience__rounder {
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  background-color: var(--text-color-light);
  border-radius: 50%;
  margin-top: 0.25rem;
}

.education__line,
.experience__line {
  display: block;
  width: 2px;
  height: 110%;
  background-color: var(--text-color-light);
  transform: translate(7px, 0);
}

.education__data,
.experience__data {
  gap: 0.5rem;
}

.education__title,
.experience__title {
  font-size: var(--h3-font-size);
}

.education__studies,
.experience__company,
.experience__proyect {
  font-size: var(--small-font-size);
  color: var(--title-color);
}

.education__year {
  font-size: var(--smaller-font-size);
}

.skills__content {
  grid-template-columns: repeat(1, 1fr);
}

.skills__name {
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-1);
}

.skills__circle {
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: var(--text-color);
  border-radius: 50%;
  margin-right: 0.75rem;
}

/*========== React-Particles-JS ==========*/
#tsparticles {
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.body-particles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

/*========== MEDIA QUERIES ==========*/


  .bd-container {
    margin-left: auto;
    margin-right: auto;
  }

  .l-header,
  .scrolltop {
    display: none;
  }

  .resume {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    background-color: var(--container-color);
    box-shadow: 0 0 8px rgba(13, 12, 12, 0.15);
  }

  .resume__left {
    background-color: var(--container-color-alt);
  }

  .resume__left,
  .resume__right {
    padding: 0 1.5rem;
  }

  .enable-snow {
    display: inline-block;
  }

  .section-title,
  .profile__description {
    text-align: initial;
  }

  .home__container {
    gap: 1.5rem;
  }
}

.custom_cursor_pointer {
  cursor: pointer;
}

.custom_button_div {
  width: 100%;
  align-items: center;
  align-content: center;
  text-align: center;
}
.custom_button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.custom_button_button1 {
  border-radius: 2px;
}
.custom_button_button2 {
  border-radius: 4px;
}
.custom_button_button3 {
  border-radius: 8px;
}
.custom_button_button4 {
  border-radius: 12px;
}
.custom_button_button5 {
  border-radius: 50%;
}



      </style>
    
    </head>
        <body>
          ${node.outerHTML}
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    }

    //---------------------------

    // const node = document.getElementById("area-cv");
    // const doc = new jsPDF("p", "pt", "a4");

    // html2canvas(node, {
    //   useCORS: true,
    //   scale: 2,
    // }).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const width = node.offsetWidth; // Use the original element's width
    //   const height = (canvas.height * node.offsetWidth) / canvas.width; // Calculate height to maintain aspect ratio
    //   doc.addImage(imgData, "PNG", 0, 0, width, height);
    //   doc.save("sample.pdf");
    // });

    //-----------------------------
  };

  return (
    <>
      <SEO {...profile} {...aboutMe} />
      {!matches && <Menu {...menuSchema} />}
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile {...profile} />
            <AboutMe {...aboutMe} />
            <Skills {...skills} />
            {/* <ContactInfo /> */}
            <DevOps {...skills} />
            <Academic {...experience} />
            <SocialMedia {...socialMedia} />
            <QRcodeComponent />
          </div>
          <div className="resume__right">
            <Works {...experience} />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* <Proyects {...experience} /> */}
          </div>
          {/* <div>
            <Acheivement />
          </div> */}
        </div>
      </main>

      <div className="custom_button_div">
        <DownloadButton downloadResume={downloadResume} />
      </div>
    </>
  );
};
