import { createSelector } from "reselect";

const getArtists = state => state.finder.artists;
const getSelectedArtist = state => state.finder.selectedArtist;

const getPlayerByName = (p, name) =>
  name ? p.name.toLowerCase().includes(name.toLowerCase()) : true;

export const getFilteredArtists = createSelector(
  [getArtists, getSelectedArtist],
  artists => artists.filter(p => p.id !== artists.id)
);
