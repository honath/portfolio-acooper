import React from "react";

import api from "../resources/images/body/api.jpg";
import discord from "../resources/images/body/discord.jpg";
import flashcard from "../resources/images/body/flashcard.jpg";
import pomodoro from "../resources/images/body/pomodoro.jpg";
import restaurant from "../resources/images/body/restaurant.jpg";

export default function GetProjectImgs({ id, link }) {
  let image;

  function clickHandler({ target }) {
    const link = target.getAttribute("data-link");
    window.open(link);
  }

  switch (id) {
    case "restaurant":
      image = restaurant;
      break;
    case "pomodoro":
      image = pomodoro;
      break;
    case "movie":
      image = api;
      break;
    case "flashcard":
      image = flashcard;
      break;
    case "discord":
      image = discord;
      break;
    default:
      image = null;
  }

  return (
    <img
      src={image}
      className="rounded img-fluid card-img-top proj-img"
      alt="Project preview"
      data-link={link}
      onClick={clickHandler}
    ></img>
  );
}
