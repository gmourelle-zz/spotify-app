import React from "react";
import PropTypes from "prop-types";

const LoadMore = ({ loading, onClick }) => {
  return (
    <button
      type="button"
      className="loadMore"
      onClick={loading ? null : onClick}
    >
      {loading ? "Cargando..." : "Cargar más"}
    </button>
  );
};

LoadMore.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default LoadMore;
