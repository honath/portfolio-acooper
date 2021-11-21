import React from "react";
import SectionTitle from "../common/SectionTitle";

import { skills } from "../resources/skills.json";
import ListSkills from "./ListSkills";

export default function Skills() {
  const { languages, frameworks, technologies } = skills;

  return <section id="skills">
      <SectionTitle title={"skills"}/>
      <div id="skills-body">
          <ListSkills title="Languages" list={languages} />
          <ListSkills title="Frameworks" list={frameworks} />
          <ListSkills title="Technologies" list={technologies} />
      </div>
  </section>;
}
