import React from "react";
import ButtonDeleteTrack from "./ButtonDeleteTrack";
import styles from "../css/tracks.module.css";

export default function Tracks({ track }) {
  return (
    <div className={styles.infosTracks}>
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
