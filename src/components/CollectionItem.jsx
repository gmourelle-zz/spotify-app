import React from "react";
import ArtistImage from "./ArtistImage";

const CollectionItem = ({ artist, onSelect }) => {
  return (
    <div
      className="smallArtist"
      onClick={() => {
        onSelect(artist);
      }}
    >
      <ArtistImage size={50} artist={artist} />
      <div className="smallArtistName">{artist.name}</div>
    </div>
  );
};

export default CollectionItem;
