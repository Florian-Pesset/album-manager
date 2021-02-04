import React from "react";
import ButtonDeleteTrack from "./ButtonDeleteTrack";

export default function Tracks({ track }) {
  return (
    <div>
      <p>
        <a href={track.url}>{track.title}:</a>{" "}
        {Math.floor(track.duration / 60) +
          ":" +
          ("0" + Math.floor(track.duration % 60)).slice(-2)}
      </p>
      <ButtonDeleteTrack track={track} />
    </div>
  );
}
