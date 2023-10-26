import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Data } from "../Schemas/Data";

const QRCodeGenerator = () => {
  const [customData, setcustomData] = useState("");
  useEffect(() => {
    let tempS = "";
    const mainData = Data.profile;
    tempS = "Live Resume : " + mainData.resume_direct_site + "\n\n";
    tempS =
      tempS +
      "Portfolio & Projects : " +
      mainData.portfolio_direct_site +
      "\n\n";
    tempS = tempS + "Github : " + mainData.github_repo_link + "\n\n";
    tempS = tempS + "LinkedIn : " + mainData.linkedin_profile_link + "\n\n";
    tempS = tempS + "Facebook : " + mainData.facebook_link + "\n\n";
    setcustomData(tempS);
  }, []); //
  return (
    <section className="social section">
      <div className="social__container bd-grid">
        <QRCode value={customData} size={150} />
      </div>
    </section>
  );
};

export default QRCodeGenerator;
