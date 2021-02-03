import axios from 'axios';

const GetAlbumList = ({ setAlbumList }) => {

  // const { REACT_APP_API_URL } = process.env;

  axios
    .get(`http://localhost:8080/albums`)
    .then((res) => setAlbumList(res.data))
    .catch((error) => {
      console.error(error.message);
    });
};

export default GetAlbumList;