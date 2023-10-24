import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

const RichTextComponent = () => {
  const [richText, setRichText] = useState("");

  useEffect(() => {
    const fetchRichText = async () => {
      try {
        // Fetch content from ./data.txt
        const response = await fetch("../Schemas/acheivement.txt");

        if (!response.ok) {
          throw new Error("Failed to fetch rich text content");
        }

        const textContent = await response.text();
        setRichText(textContent);
      } catch (error) {
        console.error("Error fetching rich text content:", error.message);
      }
    };

    fetchRichText();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h1>Rich Text Component</h1>
      <ReactQuill readOnly theme="snow" value={richText} />
    </div>
  );
};

export default RichTextComponent;
