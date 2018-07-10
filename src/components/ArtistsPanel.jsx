import React, { Component } from "react";
import SearchInput from "./SearchInput";
import ArtistsList from "./ArtistsList";
import Loading from "../components/loading/Loading";
import LoadMore from "../components/LoadMore";

/**<ArtistsList
        artists={artists}
        selectedArtists={this.props.selectedArtists}
        onSelectArtist={this.props.onSelectArtist}
        <Loading loading={fetching}>
          <ArtistsList artists={artists} />
        </Loading>
      /> */

class ArtistsPanel extends Component {
  handleLoadMore = () => {
    //this.fetchArtists(searchText, artists.length);
    this.props.getArtists(this.props.filter, this.props.artists.length);
  };

  render() {
    const { getArtists, artists, fetching, total, onSelectArtist } = this.props;
    return (
      <div>
        <SearchInput onSearch={getArtists} />
        {artists ? (
          <div>
            {fetching ? (
              <Loading loading={fetching}>
                <ArtistsList
                  artists={artists}
                  fetching={fetching}
                  onSelectArtist={onSelectArtist}
                />
              </Loading>
            ) : null}
          </div>
        ) : (
          <div> {fetching ? <Loading loading={fetching} /> : null}</div>
        )}

        {artists && total > artists.length ? (
          <div className="loadMoreLayout">
            <LoadMore loading={fetching} onClick={this.handleLoadMore} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ArtistsPanel;
