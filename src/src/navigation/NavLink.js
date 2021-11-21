import capitalizeFirst from "../common/capitalizeFirst";

import "../style.css";

export default function NavLink({ location }) {
  const displayLocation = capitalizeFirst(location);

  return (
    <a href={`#${location}`} className="nav-link w-100 h-100 text-center">
      {displayLocation}
    </a>
  );
}
