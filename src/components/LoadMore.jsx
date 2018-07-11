import React from "react";
import PropTypes from "prop-types";

const LoadMore = ({ loadingMore, onClick }) => {
  return (
    <button
      type="button"
      className="loadMore"
      onClick={loadingMore ? null : onClick}
    >
      {loadingMore ? "Cargando..." : "Cargar más"}
    </button>
  );
};

LoadMore.propTypes = {
  loadingMore: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default LoadMore;
