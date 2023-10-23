import React from "react";
import { Data } from "../Schemas/Data";

const ContactInfo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* <span style={{ fontWeight: "bold", width: "80px" }}>Website:</span> */}
        <a
          href={Data.profile.portfolio_direct_site}
          style={{ color: "blue", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio Website
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* <span style={{ fontWeight: "bold", width: "80px" }}>Website:</span> */}
        <a
          href={Data.profile.portfolio_direct_site}
          style={{ color: "blue", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Resume
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* <span style={{ fontWeight: "bold", width: "80px" }}>Github:</span> */}
        <a
          href={Data.profile.github_repo_link}
          style={{ color: "blue", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repos
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* <span style={{ fontWeight: "bold", width: "80px" }}>LinkedIn:</span> */}
        <a
          href={Data.profile.linkedin_profile_link}
          style={{ color: "blue", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Dashboard
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* <span style={{ fontWeight: "bold", width: "80px" }}>Facebook:</span> */}
        <a
          href={Data.profile.facebook_link}
          style={{ color: "blue", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Profile
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
