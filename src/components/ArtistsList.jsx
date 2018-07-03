import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist'
const ArtistsList = props => {
    const artists = props.artists; // Por ahora los dejamos aquí, luego parametrizaremos.
    return (
        <div className="artistsList">
         { props.artists.map((artist) => (
            <div className="artistsListItem">
              <Artist
                artist={artist}
                selected={props.selectedArtists.some(a => a.id === artist.id)}
              />
            </div>
          ))}
        </div>
      )
};

ArtistsList.propTypes = {
    
};

export default ArtistsList;