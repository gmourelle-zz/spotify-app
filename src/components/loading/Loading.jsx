import React from "react";
import CircularProgress from "material-ui/CircularProgress";

const Loading = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="loading">
        <CircularProgress size={60} thickness={7} />
      </div>
    );
  } else {
    return children;
  }
};

export default Loading;
