import React from "react";
import PropTypes from "prop-types";

const ArtistImage = ({ size, artist }) => {
  const image = artist.images
    .sort((a, b) => a.width - b.width)
    .find(i => i.width >= size);
  const imageUrl = image ? `url('${image.url}')` : null;

  return (
    <div
      className="artistImage"
      style={{
        width: size,
        height: size,
        borderRadius: size,
        backgroundImage: imageUrl
      }}
    />
  );
};

ArtistImage.propTypes = {};

export default ArtistImage;
