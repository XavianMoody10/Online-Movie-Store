import React from "react";

const MovieOverlay = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default MovieOverlay;
