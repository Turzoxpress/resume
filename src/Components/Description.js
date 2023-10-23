import React from "react";

export const Description = ({ desc }) => {
  // Find the index of the first colon
  const colonIndex = desc.indexOf(":");

  // Extracting the title from the text after the first colon
  const title = colonIndex !== -1 ? desc.substring(colonIndex + 1).trim() : "";

  return (
    <div>
      <p
        className="experience__description"
        dangerouslySetInnerHTML={{
          __html: `<b>${desc.substring(0, colonIndex + 1)}</b> ${title}`,
        }}
      />
      {/* <p>Title: {title}</p> */}
    </div>
  );
};
