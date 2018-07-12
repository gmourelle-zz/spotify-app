import React, { Component } from "react";
import ArtistsPanel from "../components/ArtistsPanel";
import CollectionsPanel from "../components/CollectionsPanel";
/**selectedArtists={selectedArtists} */
class Main extends Component {
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
            selectedArtists={selectedArtists}
          />
        </div>
        <div className="rightFixedPanel">
          <CollectionsPanel
            selectedArtists={selectedArtists}
            onSelectArtist={selectedArtist}
          />
        </div>
      </div>
    );
  }
}

export default Main;
