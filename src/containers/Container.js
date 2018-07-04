import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFilteredPlayers } from "../reducers/selectors";

import Main from "./Main";
import { getArtists, getArtistsSuccess } from "./../store/actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getArtistsSuccess
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
