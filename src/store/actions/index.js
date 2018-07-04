import { Actions } from "../../constants/actionTypes";

export const getArtistsSuccess = payload => ({
  type: Actions.GET_ARTISTS_SUCCESS,
  payload
});
export const getArtistsRequest = () => ({ type: Actions.GET_ARTISTS_REQUEST });

export const filterArtists = payload => ({
  type: Actions.FILTER_ARTISTS,
  payload: payload
});

const getPlayerError = payload => ({
  type: Actions.GET_PLAYERS_ERROR,
  payload: payload
});

const urlPlayers =
  "https://football-players-b31f2.firebaseio.com/players.json?print=pretty";

export const getArtists = () => {
  return dispatch => {
    dispatch(getPlayerRequest());
    return fetch(urlPlayers)
      .then(data => data.json())
      .then(player_data => {
        dispatch(getArtistsRequest(player_data));
      })
      .catch(err => getPlayerError(err));
  };
};
