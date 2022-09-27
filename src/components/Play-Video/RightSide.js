import React from "react";

export default function RightSide({ image }) {
  return (
    <div className="video">
      <div className="thumbnail">
        {" "}
        <img alt="thumnail" src={thumbnail} />{" "}
      </div>

      <div className="video-info">
        <div className="poster-img">
          <img src={image} />
        </div>

        <div className="info">
          <h3>{title}</h3>
          <p>{username}</p>
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
}
