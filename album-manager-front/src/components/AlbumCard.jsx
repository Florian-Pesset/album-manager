import React from "react";

export default function AlbumCard({ albumcard }) {
  return (
    <div>
      <img src={albumcard.image} alt={albumcard.title} />
      <p>
        {albumcard.artist} / {albumcard.title}
      </p>
    </div>
  );
}
