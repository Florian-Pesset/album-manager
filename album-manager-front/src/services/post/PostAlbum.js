import axios from 'axios';

const PostAlbum = ( infos ) => {

  const { REACT_APP_API_URL } = process.env;

  axios
    .post(`${REACT_APP_API_URL}/albums/`, 
    {
      title: infos.album,
      artist: infos.artist,
      genre: infos.genre,
      date: infos.date,
      picture: infos.picture,
      description: infos.description,
    }
    )
    .then(() => alert("success"))
    .catch((error) => {
      console.error(error.message);
      console.log(infos);
    });
};

export default PostAlbum;