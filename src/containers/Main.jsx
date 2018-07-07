import React, { Component } from "react";
import ArtistsPanel from "../components/ArtistsPanel";
import CollectionsPanel from "../components/CollectionPanel";
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
      selectedArtist
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
          />
        </div>
        <div className="rightFixedPanel">
          <CollectionsPanel />
        </div>
      </div>
    );
  }
}

export default Main;
