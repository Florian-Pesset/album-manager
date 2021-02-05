import axios from 'axios';

const GetAlbumId = ({ id }) => {
  const { REACT_APP_API_URL } = process.env;

  axios.delete(`${REACT_APP_API_URL}/albums/${id}`)
    .then(()=> alert('Album Deleted'))
    .catch((error) => {
      console.error(error.message);
    });
};

export default GetAlbumId;