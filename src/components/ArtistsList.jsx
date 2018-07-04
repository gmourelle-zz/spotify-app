import React from "react";
import PropTypes from "prop-types";
import Artist from "./Artist";

const ArtistsList = ({ artists, selectedArtists, onSelectArtist }) => {
  return (
    <div className="artistsList">
      {artists.map(artist => (
        <div key={artist.id} className="artistsListItem">
          <Artist
            artist={artist}
            selected={selectedArtists.some(a => a.id === artist.id)}
            onSelect={onSelectArtist}
          />
        </div>
      ))}
    </div>
  );
};

ArtistsList.propTypes = {};

export default ArtistsList;
