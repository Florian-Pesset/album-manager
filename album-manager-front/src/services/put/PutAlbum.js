import axios from 'axios';

const PutAlbum = ( infos, id ) => {
  const { REACT_APP_API_URL } = process.env;

  axios
    .put(`${REACT_APP_API_URL}/albums/${id}`,
      {
        title: infos.album,
        artist: infos.artist,
        genre: infos.genre,
        date: infos.date,
        picture: infos.picture,
        description: infos.description,
      }
    )
    .then(() => alert('Album Modifié'))
    .catch((error) => {
      console.error(error.message);
    });
};

export default PutAlbum;
