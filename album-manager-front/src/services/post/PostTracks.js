import axios from 'axios';

const PostTracks = ( infosTracks, idAlbum ) => {

  const { REACT_APP_API_URL } = process.env;

  axios
    .post(`${REACT_APP_API_URL}/albums/${idAlbum}/tracks/`, 
    {
      title: infosTracks.title,
      url: infosTracks.url,
      duration: infosTracks.duration,
      id_album: idAlbum,
    }
    )
    .then(() => alert("success"))
    .catch((error) => {
      console.error(error.message);
      console.log(infosTracks);
    });
};

export default PostTracks;