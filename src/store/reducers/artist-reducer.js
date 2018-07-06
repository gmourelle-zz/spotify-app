import { Actions } from "../../constants/actionTypes";

export const initialState = {
  artists: [],
  filter: {
    name: ""
  },
  fetching: false,
  total: 0,
  selectedArtists: []
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ARTISTS_REQUEST:
      return { ...state, fetching: true, filter: action.payload };
    case Actions.GET_ARTISTS_SUCCESS:
      let artists = [];

      artists =
        action.payload.offset > 0
          ? state.artists.concat(action.payload.items)
          : action.payload.items;

      return {
        ...state,
        artists: artists,
        fetching: false,
        total: action.payload.total,
        offset: action.payload.offset
      };
    case Actions.FILTER_ARTISTS:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default artistReducer;
