import React from "react";
import DeleteAlbum from "../services/delete/DeleteAlbum";

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
