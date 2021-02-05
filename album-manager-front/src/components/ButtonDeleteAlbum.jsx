import React from "react";
import DeleteAlbum from "../services/delete/DeleteAlbum";
import PropTypes from "prop-types";

export default function ButtonDeleteAlbum({ id }) {
  const handleDeleteAlbum = () => {
    DeleteAlbum({ id });
  };

  return (
    <div>
      <button typ="button" onClick={handleDeleteAlbum}>
        Delete this Album
      </button>
    </div>
  );
}

ButtonDeleteAlbum.propTypes = {
  id: PropTypes.string,
};
