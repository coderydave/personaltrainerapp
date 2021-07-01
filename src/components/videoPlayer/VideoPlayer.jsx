import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ link }) => {
  return (
    // Lazy load the YouTube player
    <ReactPlayer controls url={link} />
  );
};

export default VideoPlayer;
