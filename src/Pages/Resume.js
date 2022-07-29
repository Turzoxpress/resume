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

  const downloadResume = () => {
    // const input = document.getElementById('root');
    // html2canvas(input, {
    //   quality: 2,
    //   scale: 2,
    // })
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'JPEG', 0, 0, 1938, 3414);
    //     // pdf.output('dataurlnewwindow');
    //     pdf.save("download.pdf");
    //   })

    //---------------
    var node = document.getElementById("area-cv");
    var options = {
      quality: 1,
    };

    domtoimage
      .toBlob(node, options)
      .then(function (dataUrl) {
        //--------------
        const file = dataUrl; //new Blob([dataUrl], { type: "application/pdf" });

        // process to auto download it
        const fileURL = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = Data.profile.name + ".pdf";
        link.click();

        //---------------------------
        //console.log(dataUrl)
        // alert(dataUrl)

        // var doc = new jsPDF();
        // //doc.addImage(dataUrl, 'JPEG');
        // doc.addImage(dataUrl,'PNG',0,0,0,0)
        // doc.save('Test.pdf');
      })
      .catch((err) => {
        console.log("Errors : " + err);
      });

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
            <SocialMedia {...socialMedia} />
          </div>
          <div className="resume__right">
            <Works {...experience} />
            <Academic {...experience} />
            <Proyects {...experience} />
          </div>
        </div>
      </main>

      <div className="custom_button_div">
        <DownloadButton downloadResume={downloadResume} />
      </div>
    </>
  );
};
