import { useState, useEffect } from "react";
import AlbumCard from "../components/AlbumCard";
import GetAlbumList from "../services/get/GetAlbumList";
import styles from "../css/home.module.css";

export default function Home() {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    GetAlbumList({ setAlbumList });
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Welcome to your album manager</h1>
      </div>
      <div>
        {albumList.map((album) => (
          <AlbumCard key={album.id} albumcard={album} />
        ))}
      </div>
    </div>
  );
}
