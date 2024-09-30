import React from "react";
import { Parallax } from "react-scroll-parallax";

const AboutPage = () => {
  return (
    <div className="about_container" id="about">
      <Parallax
        className="about_parallax"
        translateX={["100vw", "0vw"]}
        startScroll={0}
        endScroll={1300}
        easing="easeOutQuad"
      >
        <h1>A Bit About Me . . .</h1>
        <h3>
          {" "}
          I'm a recent{" "}
          <span style={{ color: "var(--blue)", fontWeight: "bold" }}>
            Computer Science
          </span>{" "}
          graduate from the Pamantasan ng Lungsod ng Maynila, with a strong
          focus on Frontend Development. Over the past few months, I’ve been
          dedicated to building side projects, expanding my skills in
          technologies like{" "}
          <span style={{ color: "var(--blue)", fontWeight: "bold" }}>
            React, Tailwind, HTML, CSS,{" "}
          </span>{" "}
          and{" "}
          <span style={{ color: "var(--blue)", fontWeight: "bold" }}>
            Javascript
          </span>
          . I’m committed to continuous learning and always seeking new
          opportunities to enhance my craft."
        </h3>
      </Parallax>
    </div>
  );
};

export default AboutPage;
