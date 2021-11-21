import React from "react";
import capitalizeFirst from "../common/capitalizeFirst";

import "../style.css";

export default function ListSkills({ title, list }) {
  const mapSkills = list.map((skill, index) => {
    const upperSkill = capitalizeFirst(skill);

    return <li className="list-group-item" key={index}>{upperSkill}</li>;
  });

  return (
    <ul className="list-group list-group-flush m-3">
      <li className="list-group-item active">{title}</li>
      {mapSkills}
    </ul>
  );
}
