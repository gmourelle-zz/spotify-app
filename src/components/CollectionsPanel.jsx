import React from "react";
import CollectionItem from "./CollectionItem";

/** 
 * 
              onSelect={this.props.onSelectArtist}
 * 
*/
const CollectionsPanel = ({ selectedArtists, onSelectArtist }) => {
  return (
    <div>
      <h2 className="myArtistsTitle">
        Mis Artistas ({selectedArtists.length})
      </h2>

      <ul className="myArtistsList">
        {selectedArtists.map(artist => (
          <li key={artist.id} className="myArtistsListItem">
            <CollectionItem artist={artist} onSelect={onSelectArtist} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionsPanel;
