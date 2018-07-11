import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getArtist,
  getFilter,
  getTotal,
  getFetching,
  getSelectedArtists
} from "../store/reducers/selectors";

import Main from "./Main";
import { getArtists, selectedArtist, getLoadMore } from "./../store/actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getArtists,
      selectedArtist,
      getLoadMore
    },
    dispatch
  );

const mapStateToProps = state => ({
  artists: getArtist(state),
  filter: getFilter(state),
  fetching: getFetching(state),
  total: getTotal(state),
  selectedArtists: getSelectedArtists(state),
  loadingMore: state.finder.loadingMore
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
