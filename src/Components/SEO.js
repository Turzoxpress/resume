import React from "react";
import { Helmet } from "react-helmet";

export const SEO = () => {
  return (
    <Helmet>
      {/* Title */}
      <title>Mahbubur Rahman Turzo - Senior Software Engineer Full Stack</title>

      {/* Meta Tags */}
      <meta
        name="description"
        content="Mahbubur Rahman Turzo - Senior Software Engineer Full Stack"
      />
      <meta
        name="keywords"
        content="Full Stack Developer, React, Node.js, Python, Android, iOS, Game Development, DevOps"
      />
      <meta name="author" content="Mahbubur Rahman Turzo" />

      {/* OpenGraph tags */}
      <meta
        property="og:title"
        content="Mahbubur Rahman Turzo - Senior Software Engineer Full Stack"
      />
      <meta
        property="og:description"
        content="Experienced Full Stack Developer skilled in React, Node.js, Python, and more."
      />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/5907099?v=4"
      />
      <meta
        property="og:url"
        content="https://turzoxpress.github.io/portfolio"
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Mahbubur Rahman Turzo - Senior Software Engineer Full Stack"
      />
      <meta
        name="twitter:description"
        content="Experienced Full Stack Developer skilled in React, Node.js, Python, and more."
      />
      <meta
        name="twitter:image"
        content="https://avatars.githubusercontent.com/u/5907099?v=4"
      />

      {/* Link to the canonical URL */}
      <link rel="canonical" href="https://turzoxpress.github.io/portfolio" />

      {/* Additional meta tags or other SEO optimizations can be added here */}
    </Helmet>
  );
};
