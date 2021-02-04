import axios from 'axios';

const PostTracks = ( infosTracks, idAlbum ) => {

  const { REACT_APP_API_URL } = process.env;
  if(!infosTracks.title || !infosTracks.url || !infosTracks.duration) {
    alert('Please fill the fields');
  } else {
      axios
      .post(`${REACT_APP_API_URL}/albums/${idAlbum}/tracks/`, 
      {
        title: infosTracks.title,
        url: infosTracks.url,
        duration: infosTracks.duration,
        id_album: idAlbum,
      }
      )
      .then(() => {
        console.log(idAlbum);
        alert("Track added to collection")
      })
      .catch((error) => {
        console.error(error.message);
        alert("Verify your informations");
      });
  }

};

export default PostTracks;