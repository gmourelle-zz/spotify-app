import React, { Component } from "react";
import ArtistsPanel from "../components/ArtistsPanel";
import CollectionsPanel from "../components/CollectionPanel";

/**
 * handleSelectArtist(artist) {
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
 * selectedArtists={this.state.selectedArtists}
            onSelectArtist={this.handleSelectArtist}

 */
class Main extends Component {
  render() {
    return (
      <div>
        <div className="leftPanel">
          <ArtistsPanel
            selectedArtists={this.state.selectedArtists}
            onSelectArtist={this.handleSelectArtist}
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
