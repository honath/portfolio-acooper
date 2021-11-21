import React from "react";
import AboutBody from "./AboutBody";
import AboutPicture from "./AboutPicture";
import AboutGreetings from "./AboutGreetings";

import "../style.css";

export default function About() {
  return (
    <section id="about">
      <AboutPicture />
      <AboutGreetings />
      <AboutBody />
    </section>
  );
}
