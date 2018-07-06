import { createSelector } from "reselect";

const getArtists = state => state.finder.artists;
const getFilter = state => state.finder.filter;

const getPlayerByName = (p, name) =>
  name ? p.name.toLowerCase().includes(name.toLowerCase()) : true;

export const getFilteredArtists = createSelector(
  [getArtists, getFilter],
  (artists, filter) => artists.filter(p => getPlayerByName(p, filter))
);
