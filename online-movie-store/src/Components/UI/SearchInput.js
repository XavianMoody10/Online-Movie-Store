import React from "react";

const SearchInput = (props) => {
  return (
    <input
      className={props.className}
      placeholder="Search Movie"
      onChange={props.search}
    ></input>
  );
};

export default SearchInput;
