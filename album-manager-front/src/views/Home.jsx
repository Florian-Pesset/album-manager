import { useState, useEffect } from "react";
import AlbumCard from "../components/AlbumCard";
import GetAlbumList from "../services/get/GetAlbumList";
import styles from "../css/home.module.css";

export default function Home() {
  const [albumList, setAlbumList] = useState([]);
  const [sortArtist, setSortArtist] = useState(false);
  const [sortAlbum, setSortAlbum] = useState(false);
  const [sortGenre, setSortGenre] = useState(false);

  useEffect(() => {
    GetAlbumList({ setAlbumList });
  }, []);

  const handleSortArtist = () => {
    setSortArtist(!sortArtist);
  };

  const handleSortAlbum = () => {
    setSortAlbum(!sortAlbum);
  };

  const handleSortGenre = () => {
    setSortGenre(!sortGenre);
  };

  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Welcome to your album manager</h1>
      </div>

      <div className={styles.sort}>
        <p>Sort by: </p>
        <button type="button" onClick={handleSortArtist}>
          Artist
        </button>
        <button type="button" onClick={handleSortAlbum}>
          Album
        </button>
        <button type="button" onClick={handleSortGenre}>
          Genre
        </button>
      </div>
      <div className={styles.cards}>
        {albumList
          .sort((a, b) => {
            if (sortArtist) {
              if (a.artist < b.artist) {
                return -1;
              }
              if (a.artist > b.artist) {
                return 1;
              }
              return 0;
            }
            return albumList;
          })
          .sort((a, b) => {
            if (sortAlbum) {
              if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
            }
            return albumList;
          })
          .sort((a, b) => {
            if (sortGenre) {
              if (a.genre < b.genre) {
                return -1;
              }
              if (a.genre > b.genre) {
                return 1;
              }
              return 0;
            }
            return albumList;
          })
          .map((album) => (
            <AlbumCard key={album.id} albumcard={album} />
          ))}
      </div>
    </div>
  );
}
