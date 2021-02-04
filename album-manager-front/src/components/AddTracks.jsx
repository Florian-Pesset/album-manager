import { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PostTracks from "../services/post/PostAlbum";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      backgroundColor: "whitesmoke",
    },
  },
}));

export default function AddTracks(id) {
  const classes = useStyles();

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
    setInfosTracks({
      title: "",
      duration: "",
      url: "",
    });
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          onChange={handleChange}
          value={infosTracks.title}
        />
        <TextField
          id="duration"
          name="duration"
          label="Duration"
          variant="outlined"
          onChange={handleChange}
          value={infosTracks.duration}
        />
        <TextField
          id="url"
          name="url"
          label="URL"
          variant="outlined"
          onChange={handleChange}
          value={infosTracks.url}
        />
        <button type="button" onClick={handlePostTrack}>
          Send
        </button>
      </form>
    </div>
  );
}
