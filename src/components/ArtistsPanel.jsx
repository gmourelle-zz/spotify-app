import React, { Component } from "react";
import SearchInput from "./SearchInput";
import ArtistsList from "./ArtistsList";
import { getArtists } from "./../data";
// import { getArtists } from "./../api";

const ArtistsPanel = () => {
  const artists = getArtists();
  const selectedArtists = [artists[0], artists[2]];
  return (
    <div>
      <SearchInput />
      <ArtistsList
        artists={artists}
        selectedArtists={this.props.selectedArtists}
        onSelectArtist={this.props.onSelectArtist}
      />
    </div>
  );
};

export default ArtistsPanel;
