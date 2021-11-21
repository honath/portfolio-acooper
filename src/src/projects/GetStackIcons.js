import React from "react";

import "../style.css";

import reactimg from "../resources/images/icons/react-icon.png";
import bootstrap from "../resources/images/icons/bootstrap-icon.png";
import node from "../resources/images/icons/node-icon.png";
import express from "../resources/images/icons/express-icon.png";
import postgres from "../resources/images/icons/postgres-icon.png";
import knex from "../resources/images/icons/knex-icon.png";

export default function GetStackIcons({ stack }) {
  const mapStack = stack.map((id) => {
    let icon = null;

    switch (id) {
      case "react":
        icon = reactimg;
        break;
      case "bs":
        icon = bootstrap;
        break;
      case "node":
        icon = node;
        break;
      case "ex":
        icon = express;
        break;
      case "pg":
        icon = postgres;
        break;
      case "knex":
        icon = knex;
        break;
      default:
        icon = null;
    }

    return (
      <div className="stack-icon-container mt-3" key={id}>
        <img src={icon} className="img-fluid stack-icon" alt="Tech icon"></img>
      </div>
    );
  });

  if (mapStack.length) return mapStack;

  return <p>Loading...</p>;
}
