import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import { getFilteredPlayers } from "../reducers/selectors";

import Main from "./Main";
import { getArtists, filterArtists } from "./../store/actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getArtists,
      filterArtists
    },
    dispatch
  );

const mapStateToProps = state => ({
  //artists: getFilteredPlayers(state),
  artists: state.finder.artists,
  filter: state.finder.filter,
  fetching: state.finder.fetching
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
