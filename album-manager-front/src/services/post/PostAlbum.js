import axios from 'axios';

const PostAlbum = ( infos ) => {
  const { REACT_APP_API_URL } = process.env;
  
  if(!infos.album || !infos.artist || !infos.genre | !infos.date || !infos.picture || !infos.description) {
    alert('Please fill the fields');
  } else {
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
      .then(() => alert("Album added to collection"))
      .catch((error) => {
        console.error(error.message);
        alert("Verify your informations");
      });
  }

};

export default PostAlbum;