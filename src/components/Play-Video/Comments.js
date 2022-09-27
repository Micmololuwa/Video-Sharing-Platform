import React from "react";

export default function comments({ profile, name, message, time }) {
  return (
    <div className="comment">
      <div>
        <img src={profile} />
      </div>
      <div>
        <h3>
          {name} <span>{time}</span>
        </h3>
        <p>{message}</p>
        <div className="thumbs-up">
          <img src="./images/thumbs-up" /> <p>151</p>
        </div>
        <div className="thumbs-down">
          <img src="./images/thumbs-down" /> <p>REPLY</p>
        </div>
      </div>
    </div>
  );
}
