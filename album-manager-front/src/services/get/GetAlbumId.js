import axios from 'axios';

const GetAlbumId = ({ setAlbumId, id, setInfos }) => {

  const { REACT_APP_API_URL } = process.env;

  axios
    .get(`${REACT_APP_API_URL}/albums/${id}`)
    .then((res) => {
      setAlbumId(res.data);
      setInfos(res.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export default GetAlbumId;