import { Actions } from "../../constants/actionTypes";
import { getArtistsApi } from "../../api";

export const getArtistsSuccess = payload => ({
  type: Actions.GET_ARTISTS_SUCCESS,
  payload
});

export const getArtistsRequest = () => ({ type: Actions.GET_ARTISTS_REQUEST });

export const filterArtists = payload => ({
  type: Actions.FILTER_ARTISTS,
  payload: payload
});

const getArtistError = payload => ({
  type: Actions.GET_PLAYERS_ERROR,
  payload: payload
});

const urlPlayers =
  "https://football-players-b31f2.firebaseio.com/players.json?print=pretty";

export const getArtists = (query, offset = 0) => {
  // export const getArtists = () => {
  return dispatch => {
    dispatch(getArtistsRequest());
    return getArtistsApi(query, offset)
      .then(artist_data => {
        dispatch(getArtistsSuccess(artist_data));
      })
      .catch(err => getArtistError(err));
  };
};
