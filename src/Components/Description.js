import React, { useEffect } from "react";

export const Description = ({ sl, desc, url }) => {
  // Find the index of the first colon
  const colonIndex = desc.indexOf(":");

  // Extracting the title from the text after the first colon
  const title = colonIndex !== -1 ? desc.substring(colonIndex + 1).trim() : "";

  // Extracting the text before the colon
  const textBeforeColon = desc.substring(0, colonIndex + 1).trim();

  console.log("sl : " + sl);

  return (
    <div>
      <span
        className="experience__description"
        dangerouslySetInnerHTML={{
          __html: `<a href="${url[sl]}" target="_blank" style="color: #007FFF; cursor: pointer;">${textBeforeColon}</a> <span>${title}</span>`,
        }}
      />
    </div>
  );
};
