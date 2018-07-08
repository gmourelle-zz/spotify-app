import React from "react";
import ArtistImage from "./ArtistImage";
/** onSelect
 * 
 *  onClick={() => {
        onSelect(artist);
      }}
*/
const CollectionItem = ({ artist }) => {
  return (
    <div className="smallArtist">
      <ArtistImage size={50} artist={artist} />
      <div className="smallArtistName">{artist.name}</div>
    </div>
  );
};

export default CollectionItem;
