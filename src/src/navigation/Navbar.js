import React, { Fragment } from "react";
import NavLink from "./NavLink";

import "../style.css";

export default function Navbar() {
  const navStyle = {
    maxPaddingInline: "15%",
  };

  return (
    <Fragment>
      <div className="padding"></div>
      <nav
        className="d-flex justify-content-around fixed-top bg-primary"
        style={navStyle}
      >
        <NavLink location={"about"} />
        <NavLink location={"projects"} />
        <NavLink location={"skills"} />
        <NavLink location={"contact"} />
      </nav>
    </Fragment>
  );
}
