import React from "react";

export default function Tracks({ track }) {
  return (
    <>
      <p>
        <a href={track.url}>{track.title}:</a>{" "}
        {Math.floor(track.duration / 60) +
          ":" +
          ("0" + Math.floor(track.duration % 60)).slice(-2)}
      </p>
    </>
  );
}
