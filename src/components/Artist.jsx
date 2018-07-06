import React from "react";
import PropTypes from "prop-types";
import ArtistImage from "./ArtistImage";
import SpotifyLogo from "./SpotifyLogo";

const formatter = new Intl.NumberFormat("es-AR");
/*

onClick={() => {
        onSelect(artist);
      }}*/
const Artist = ({ artist, selected, onSelect }) => {
  return (
    <div className={`artist ${selected ? "isSelected" : null}`}>
      <ArtistImage size={200} artist={artist} />
      <span className="artistName">{artist.name}</span>

      <span>
        {formatter.format(artist.followers.total)} Seguidores
        {artist.genres.length > 0 && " · " + artist.genres.join(", ")}
        {" · "}
        <a
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          title="Abrir en Spotify"
        >
          <SpotifyLogo size={20} />
        </a>
      </span>
    </div>
  );
};

Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
