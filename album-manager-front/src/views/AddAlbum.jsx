import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import PostAlbum from "../services/post/PostAlbum";
import styles from "../css/addalbum.module.css";
import AddTracks from "../components/AddTracks";
import GetAlbumList from "../services/get/GetAlbumList";
import GetAlbumId from "../services/get/GetAlbumId";
import PutAlbum from "../services/put/PutAlbum";

export default function AddAlbum() {
  const [infos, setInfos] = useState({
    album: "",
    artist: "",
    genre: "",
    date: "",
    picture: "",
    description: "",
  });
  const [albumList, setAlbumList] = useState([]);
  const [category, setCategory] = useState(0);
  const [albumId, setAlbumId] = useState([]);

  useEffect(() => {
    GetAlbumList({ setAlbumList });
  }, []);

  const handleChange = (event) => {
    setInfos({
      ...infos,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    PostAlbum(infos);
    setInfos({
      album: "",
      artist: "",
      genre: "",
      date: "",
      picture: "",
      description: "",
    });
  };
  const modifyAlbum = () => {
    const id = albumId.id;
    PutAlbum(infos, id);
  };

  const handleSelectModify = (e) => {
    const id = e.target.value;
    GetAlbumId({ setAlbumId, id, setInfos });
  };

  const handleSelect = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={styles.addalbum}>
      <h1>Add your album</h1>
      <div className={styles.entrees}>
        <form noValidate autoComplete="off">
          <div className={styles.textfields}>
            <TextField
              id="album"
              name="album"
              label="Album"
              variant="standard"
              defaultValue=" "
              onChange={handleChange}
              value={infos.album || albumId.title}
              className={styles.input}
            />
            <TextField
              id="artist"
              name="artist"
              label="Artist"
              variant="standard"
              defaultValue=" "
              onChange={handleChange}
              value={infos.artist || albumId.artist}
              className={styles.input}
            />
            <TextField
              id="genre"
              name="genre"
              label="Genre"
              variant="standard"
              defaultValue=" "
              onChange={handleChange}
              value={infos.genre || albumId.genre}
              className={styles.input}
            />
            <TextField
              id="date"
              name="date"
              label="Date"
              variant="standard"
              defaultValue=" "
              onChange={handleChange}
              value={infos.date || albumId.date}
              className={styles.input}
            />
            <TextField
              id="picture"
              name="picture"
              label="Picture"
              variant="standard"
              defaultValue=" "
              onChange={handleChange}
              value={infos.picture || albumId.picture}
              className={styles.input}
            />
            <TextField
              id="description"
              name="description"
              label="Description"
              variant="standard"
              defaultValue=" "
              multiline
              onChange={handleChange}
              value={infos.description || albumId.description}
              className={styles.input}
            />

            <button type="button" onClick={handleClick}>
              Add
            </button>
          </div>

          <select name="albums" id="albums" onChange={handleSelectModify}>
            <option value="">Choose an album to modify</option>
            {albumList.map((album) => (
              <option value={album.id}>
                {album.artist} / {album.title}
              </option>
            ))}
          </select>
          <button type="button" onClick={modifyAlbum}>
            Modify
          </button>
        </form>

        <h2>Add tracks</h2>
        <select name="albums" id="albums" onChange={handleSelect}>
          <option value="">Choose an album to add a track</option>
          {albumList.map((album) => (
            <option value={album.id}>
              {album.artist} / {album.title}
            </option>
          ))}
        </select>
        <AddTracks id={category} />
      </div>
    </div>
  );
}
