import React from "react";
import Filter from "./Filter";
import Videos from "./videos";
import { Link, Route, Routes } from "react-router-dom";
import "./css/style.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <Filter />

      <div className="grid">
        <Videos
          thumbnail="./images/youtubethumbnail.png"
          image="./images/profile.png"
          title="Bella Shmurda - New Born Fela | ECHOOROOM LIVE..."
          username="Echo Room"
          views="14k views • 1 day ago"
        />
        <Videos
          thumbnail="./images/youtubethumbnail.png"
          image="./images/profile.png"
          title="Bella Shmurda - New Born Fela | ECHOOROOM LIVE..."
          username="Echo Room"
          views="14k views • 1 day ago"
        />
        <Videos
          thumbnail="./images/youtubethumbnail.png"
          image="./images/profile.png"
          title="Bella Shmurda - New Born Fela | ECHOOROOM LIVE..."
          username="Echo Room"
          views="14k views • 1 day ago"
        />
        <Videos
          thumbnail="./images/youtubethumbnail.png"
          image="./images/profile.png"
          title="Bella Shmurda - New Born Fela | ECHOOROOM LIVE..."
          username="Echo Room"
          views="14k views • 1 day ago"
        />
        <Videos
          thumbnail="./images/youtubethumbnail.png"
          image="./images/profile.png"
          title="Bella Shmurda - New Born Fela | ECHOOROOM LIVE..."
          username="Echo Room"
          views="14k views • 1 day ago"
        />
      </div>
      {/* <Link to="/testing">Go to testing</Link> */}
    </div>
  );
}
