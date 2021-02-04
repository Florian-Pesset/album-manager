import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import PostAlbum from "../services/post/PostAlbum";
import styles from "../css/addalbum.module.css";
import AddTracks from "../components/AddTracks";
import GetAlbumList from "../services/get/GetAlbumList";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      backgroundColor: "whitesmoke",
    },
  },
}));

export default function AddAlbum() {
  const classes = useStyles();

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

  const handleSelect = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={styles.addalbum}>
      <h1>Add your album</h1>
      <div className={styles.entrees}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="album"
            name="album"
            label="Album"
            variant="outlined"
            onChange={handleChange}
            value={infos.album}
          />
          <TextField
            id="artist"
            name="artist"
            label="Artist"
            variant="outlined"
            onChange={handleChange}
            value={infos.artist}
          />
          <TextField
            id="genre"
            name="genre"
            label="Genre"
            variant="outlined"
            onChange={handleChange}
            value={infos.genre}
          />
          <TextField
            id="date"
            name="date"
            label="Date"
            variant="outlined"
            onChange={handleChange}
            value={infos.date}
          />
          <TextField
            id="picture"
            name="picture"
            label="Picture"
            variant="outlined"
            onChange={handleChange}
            value={infos.picture}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            multiline
            onChange={handleChange}
            value={infos.description}
          />

          <button type="button" onClick={handleClick}>
            Send
          </button>
        </form>

        <h2>Add tracks</h2>
        <select name="albums" id="albums" onChange={handleSelect}>
          <option value="">--Please choose an album--</option>
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
