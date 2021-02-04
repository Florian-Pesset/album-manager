import React from "react";
import DeleteTrack from "../services/delete/DeleteTrack";

export default function ButtonDeleteTrack({ track }) {
  const handleDeleteTrack = () => {
    DeleteTrack({ track });
    window.location.reload();
  };

  return (
    <div>
      <button typ="button" onClick={handleDeleteTrack}>
        Delete this track
      </button>
    </div>
  );
}
