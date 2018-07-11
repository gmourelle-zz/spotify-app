import { Actions } from "../../constants/actionTypes";
import { getArtistsApi } from "../../api";

export const selectedArtist = payload => ({
  type: Actions.SELECTED_ARTIST,
  payload
});

export const loadMoreSuccess = payload => ({
  type: Actions.LOAD_MORE_SUCCESS,
  payload
});

export const loadMoreRequest = payload => ({
  type: Actions.LOAD_MORE_REQUEST,
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

export const getLoadMore = (query, offset) => {
  return dispatch => {
    dispatch(loadMoreRequest(query));
    return getArtistsApi(query, offset)
      .then(artist_data => {
        dispatch(loadMoreSuccess(artist_data));
      })
      .catch(err => getArtistError(err));
  };
};
