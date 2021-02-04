import { useState } from "react";
import { TextField } from "@material-ui/core";
import styles from "../css/addtracks.module.css";

import PostTracks from "../services/post/PostTracks";

export default function AddTracks(id) {
  const [infosTracks, setInfosTracks] = useState({
    title: "",
    duration: "",
    url: "",
  });

  const handleChange = (event) => {
    setInfosTracks({
      ...infosTracks,
      [event.target.name]: event.target.value,
    });
  };

  const idAlbum = id.id;

  const handlePostTrack = () => {
    PostTracks(infosTracks, idAlbum);
  };

  return (
    <div>
      <form noValidate autoComplete="off">
        <div className={styles.textfields}>
          <TextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            onChange={handleChange}
            value={infosTracks.title}
            className={styles.input}
          />
          <TextField
            id="duration"
            name="duration"
            label="Duration"
            variant="outlined"
            onChange={handleChange}
            value={infosTracks.duration}
            className={styles.input}
          />
          <TextField
            id="url"
            name="url"
            label="URL"
            variant="outlined"
            onChange={handleChange}
            value={infosTracks.url}
            className={styles.input}
          />
        </div>

        <button type="button" onClick={handlePostTrack}>
          Send
        </button>
      </form>
    </div>
  );
}
