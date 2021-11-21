import React from "react";

import github from "../resources/images/icons/charcoal/github-icon-charcoal.png";
import linkedin from "../resources/images/icons/charcoal/linkedin-icon-charcoal.png";

import "../style.css";

export default function ContactImages() {
  const links = {
    github: "https://github.com/honath",
    linkedin: "https://www.linkedin.com/in/alexander-cooper97/",
  };

  function clickHandler({ target }) {
    switch (target.id) {
      case "github":
        window.open(links.github);
        break;
      case "linkedin":
        window.open(links.linkedin);
        break;
      default:
        break;
    }
  }

  return (
    <div className="d-flex justify-content-around w-75 mx-auto">
      <img src={github} id="github" className="img-fluid contact-img" onClick={clickHandler} alt="GitHub link"></img>
      <img src={linkedin} id="linkedin" className="img-fluid contact-img" onClick={clickHandler} alt="LinkedIn link"></img>
    </div>
  );
}
