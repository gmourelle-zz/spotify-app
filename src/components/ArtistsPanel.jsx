import React, { Component } from "react";
import SearchInput from "./SearchInput";
import ArtistsList from "./ArtistsList";
import Loading from "../components/loading/Loading";
import { getArtists } from "./../data";
// import { getArtists } from "./../api";
/**<ArtistsList
        artists={artists}
        selectedArtists={this.props.selectedArtists}
        onSelectArtist={this.props.onSelectArtist}
      /> */
const ArtistsPanel = ({ getArtists, artists, fetching }) => {
  //const artists = getArtists();
  //const selectedArtists = [artists[0], artists[2]];
  return (
    <div>
      <SearchInput onSearch={getArtists} />
      <Loading loading={fetching}>
        <ArtistsList artists={artists} />
      </Loading>
    </div>
  );
};

export default ArtistsPanel;
