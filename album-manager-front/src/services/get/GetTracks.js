import axios from 'axios';

const GetTracks = ({ setTracks, id }) => {

  const { REACT_APP_API_URL } = process.env;

  axios
    .get(`${REACT_APP_API_URL}/albums/${id}/tracks`)
    .then((res) => {
      setTracks(res.data)})
    .catch((error) => {
      console.error(error.message);
    });
};

export default GetTracks;