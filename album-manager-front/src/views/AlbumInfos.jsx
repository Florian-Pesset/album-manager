import { useState, useEffect } from "react";
import GetAlbumId from "../services/get/GetAlbumId";
import GetTracks from "../services/get/GetTracks";
import styles from "../css/albumInfos.module.css";
import Tracks from "../components/Tracks";

export default function AlbumInfos(props) {
  const [albumId, setAlbumId] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { id } = props.match.params;

  useEffect(() => {
    GetAlbumId({ setAlbumId, id });
    GetTracks({ setTracks, id });
  }, [id]);

  console.log(albumId.date);

  return (
    <div className={styles.main}>
      <h1>Infos Album</h1>

      <img src={albumId.picture} alt={albumId.title} className={styles.image} />

      <div className={styles.infosAlbum}>
        <h2>{albumId.title}</h2>
        <p>Artist: {albumId.artist}</p>
        <p>Genre: {albumId.genre} </p>
        <p>Date: {albumId.date && albumId.date.slice(0, 10)}</p>
        <p>Description: {albumId.description}</p>
      </div>

      <div className={styles.infosTracks}>
        <h2>Tracks</h2>
        {tracks.map((track) => (
          <Tracks key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
