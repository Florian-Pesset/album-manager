import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/albumCard.module.css";
import PropTypes from "prop-types";

export default function AlbumCard({ albumcard }) {
  return (
    <div className={styles.card}>
      <Link to={`/album/${albumcard.id}`}>
        <img
          src={albumcard.picture}
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

AlbumCard.propTypes = {
  albumcard: PropTypes.shape({
    id: PropTypes.string,
    picture: PropTypes.string,
    title: PropTypes.string,
    artist: PropTypes.string,
  }),
};
