import { Actions } from "../../constants/actionTypes";

export const initialState = {
  //artists: [],
  filter: {
    name: ""
  },
  fetching: false,
  loadingMore: false,
  total: 0,
  selectedArtists: []
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ARTISTS_REQUEST:
      return { ...state, fetching: true, filter: action.payload };
    case Actions.GET_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.payload.items,
        fetching: false,
        total: action.payload.total,
        offset: action.payload.offset
      };
    case Actions.FILTER_ARTISTS:
      return { ...state, filter: action.payload };
    case Actions.LOAD_MORE_REQUEST:
      return { ...state, loadingMore: true, filter: action.payload };
    case Actions.LOAD_MORE_SUCCESS:
      const { total, offset } = action.payload;
      const artists =
        action.payload.offset > 0
          ? [...state.artists, ...action.payload.items]
          : action.payload.items;
      return {
        ...state,
        artists,
        loadingMore: false,
        total,
        offset
      };

    case Actions.SELECTED_ARTIST:
      return {
        ...state,
        selectedArtists: [...state.selectedArtists, action.payload]
      };
    default:
      return state;
  }
};

export default artistReducer;
