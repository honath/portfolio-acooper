import React from "react";
import capitalizeFirst from "./capitalizeFirst";

import "../style.css";

export default function SectionTitle({ title }) {
  const capitalTitle = capitalizeFirst(title);

  return <h2 className="section-title">{capitalTitle}</h2>;
}
