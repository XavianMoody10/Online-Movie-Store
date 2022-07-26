import React from "react";

const SearchInput = (props) => {
  const searchCheck = (e) => {
    const value = e.target.value;

    if (value.length < 0) {
      return;
    } else {
      props.search(value);
    }
  };

  return (
    <input
      className={props.className}
      placeholder="Search Movie"
      onChange={searchCheck}
    ></input>
  );
};

export default SearchInput;
