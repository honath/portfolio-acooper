import React from "react";
import GetStackIcons from "./GetStackIcons";

import { projects } from "../resources/projects.json";
import GetProjectImgs from "./GetProjectImgs";

export default function ProjectCards() {
  const mapProjects = projects.map((project) => {
    const { stack, id, links } = project;

    return (
      <div className="card w-75 mx-auto m-3 p-3" key={id}>
        <h6 className="card-title text-center">{project.name}</h6>
        <h6 className="card-subtitle text-muted text-center pb-1">
          {project.scope}
        </h6>
        <GetProjectImgs id={id} link={links.github} />
        <div className="d-flex justify-content-evenly w-100 py-1">
          <GetStackIcons stack={stack} />
        </div>
        <div className="card-body">
          <p className="card-text">{project.description}</p>
          <a
            className="card-link"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {links.demo ? (
            <a
              className="card-link"
              href={links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    );
  });

  return <div id="project-body">{mapProjects}</div>;
}
