import { createSelector } from "reselect";

export const getArtist = state => state.finder.artists;
export const getFilter = state => state.finder.filter;

export const getFetching = state => state.finder.fetching;
export const getTotal = state => state.finder.total;
export const getSelectedArtists = state => state.finder.selectedArtists;
const getSelectedArtist = state => state.finder.selectedArtist;

const getPlayerByName = (p, name) =>
  name ? p.name.toLowerCase().includes(name.toLowerCase()) : true;

export const getFilteredArtists = createSelector(
  [getArtist, getSelectedArtist],
  artists => artists.filter(p => p.id !== artists.id)
);
