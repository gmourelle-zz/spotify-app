import React, { Component } from "react";
import ArtistsPanel from "../components/ArtistsPanel";
import CollectionsPanel from "../components/CollectionsPanel";
/**selectedArtists={selectedArtists} */
class Main extends Component {
  handleSelectArtist(artist) {
    const without = this.state.selectedArtists.filter(a => a.id !== artist.id);
    if (without.length !== this.state.selectedArtists.length) {
      this.setState({
        selectedArtists: without
      });
    } else {
      this.setState({
        selectedArtists: this.state.selectedArtists.concat(artist)
      });
    }
  }

  render() {
    const {
      artists,
      getArtists,
      fetching,
      total,
      filter,
      selectedArtist,
      selectedArtists,
      getLoadMore,
      loadingMore
    } = this.props;

    return (
      <div>
        <div className="leftPanel">
          <ArtistsPanel
            getArtists={getArtists}
            fetching={fetching}
            artists={artists}
            loading={fetching}
            total={total}
            filter={filter}
            onSelectArtist={selectedArtist}
            getLoadMore={getLoadMore}
            loadingMore={loadingMore}
          />
        </div>
        <div className="rightFixedPanel">
          <CollectionsPanel selectedArtists={selectedArtists} />
        </div>
      </div>
    );
  }
}

export default Main;
