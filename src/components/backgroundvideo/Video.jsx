import React from "react";
import backgroundVideo from "../pictures/background.mp4";
import "./VideoBackground.css";

export default function VideoBackground() {
  return (
    <div className="video-bg" aria-hidden="true">
      <video
        className="video-bg__media"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
