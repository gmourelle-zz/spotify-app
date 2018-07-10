import React from "react";
import PropTypes from "prop-types";
import Artist from "./Artist";
import Loading from "./loading/Loading";
import CircularProgress from "material-ui/CircularProgress";

/** selected={selectedArtists.some(a => a.id === artist.id)}
 onSelect={onSelectArtist} */
const ArtistsList = ({
  artists,
  selectedArtists,
  onSelectArtist,
  fetching
}) => {
  if (artists.length > 0) {
    return (
      <div className="artistsList">
        {artists.map(artist => (
          <div key={artist.id} className="artistsListItem">
            <Artist
              key={artist.id}
              artist={artist}
              onSelectArtist={onSelectArtist}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return <div className="noResults">No se obtuvieron resultados</div>;
  }
};

ArtistsList.propTypes = {
  artist: PropTypes.object
};

export default ArtistsList;
