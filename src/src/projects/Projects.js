import React from "react";
import SectionTitle from "../common/SectionTitle";
import ProjectCards from "./ProjectCards";

import "../style.css";

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle title={"projects"} />
      <ProjectCards />
    </section>
  );
}
