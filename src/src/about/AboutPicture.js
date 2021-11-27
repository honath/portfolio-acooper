import React from "react";

import "../style.css";
import portrait from "../resources/images/body/seedspark_me.png";

export default function AboutPicture() {
  return (
    <div className="mx-auto pfp-container">
      <img src={portrait} className="img-fluid" alt="Me"></img>
    </div>
  );
}
