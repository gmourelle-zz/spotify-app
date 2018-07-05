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
      return { ...state, fetching: true };
    case Actions.GET_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.payload,
        fetching: false,
        filter: action.payload
      };
    case Actions.FILTER_ARTISTS:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default artistReducer;
