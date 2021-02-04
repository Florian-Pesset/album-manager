import axios from 'axios';

const GetAlbumId = ({ track }) => {
  const { REACT_APP_API_URL } = process.env;

  axios.delete(`${REACT_APP_API_URL}/albums/${track.id_album}/tracks/${track.id}`)
    .catch((error) => {
      console.error(error.message);
    });
};

export default GetAlbumId;