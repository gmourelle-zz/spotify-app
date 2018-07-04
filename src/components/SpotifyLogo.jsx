import React from "react";
import PropTypes from "prop-types";

const SpotifyLogo = ({ size }) => {
  return (
    <img
      src="/spotify.svg"
      alt="Spotify Logo"
      style={{ verticalAlign: "middle" }}
      height={size}
      width={size}
    />
  );
};

SpotifyLogo.propTypes = {};

export default SpotifyLogo;
