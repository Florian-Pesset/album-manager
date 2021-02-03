import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/albumCard.module.css";

export default function AlbumCard({ albumcard }) {
  return (
    <div className={styles.card}>
      <Link to={`/${albumcard.id}`}>
        <img
          src={albumcard.image}
          alt={albumcard.title}
          className={styles.image}
        />
      </Link>
      <p>
        {albumcard.artist} / {albumcard.title}
      </p>
    </div>
  );
}
