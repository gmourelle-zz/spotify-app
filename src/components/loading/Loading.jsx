import React from "react";
import CircularProgress from "material-ui/CircularProgress";
//import { Container } from "reactstrap";

const Loading = ({ loading, children }) => {
  if (loading) {
    return (
      <div>
        <CircularProgress size={60} thickness={7} />
      </div>
    );
  } else {
    return children;
  }
};

export default Loading;
