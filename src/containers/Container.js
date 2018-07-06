import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFilteredArtists } from "../store/reducers/selectors";

import Main from "./Main";
import { getArtists } from "./../store/actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getArtists
    },
    dispatch
  );

const mapStateToProps = state => ({
  //artists: getFilteredArtists(state),
  artists: state.finder.artists,
  filter: state.finder.filter,
  fetching: state.finder.fetching,
  total: state.finder.total
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
