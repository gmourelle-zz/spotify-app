import React from "react";
import PropTypes from "prop-types";
import Artist from "./Artist";
/** selected={selectedArtists.some(a => a.id === artist.id)}
 onSelect={onSelectArtist} */
const ArtistsList = ({ artists, selectedArtists, onSelectArtist }) => {
  return (
    <div className="artistsList">
      {artists.items.length > 0 ? (
        artists.items.map(artist => (
          <div className="artistsListItem">
            <Artist key={artist.id} artist={artist} />
          </div>
        ))
      ) : (
        <div />
      )}
    </div>
  );
};

ArtistsList.propTypes = {};

export default ArtistsList;
