import { Actions } from "../../constants/actionTypes";
import { getArtistsApi } from "../../api";

export const selectedArtist = payload => ({
  type: Actions.SELECTED_ARTIST,
  payload
});

export const getArtistsSuccess = payload => ({
  type: Actions.GET_ARTISTS_SUCCESS,
  payload
});

export const getArtistsRequest = payload => ({
  type: Actions.GET_ARTISTS_REQUEST,
  payload
});

export const filterArtists = payload => ({
  type: Actions.FILTER_ARTISTS,
  payload: payload
});

const getArtistError = payload => ({
  type: Actions.GET_PLAYERS_ERROR,
  payload: payload
});

export const getArtists = (query, offset) => {
  return dispatch => {
    dispatch(getArtistsRequest(query));
    return getArtistsApi(query, offset)
      .then(artist_data => {
        dispatch(getArtistsSuccess(artist_data));
      })
      .catch(err => getArtistError(err));
  };
};
