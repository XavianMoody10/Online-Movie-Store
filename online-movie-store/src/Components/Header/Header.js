import React from "react";
import Button from "../UI/Button";
import SearchInput from "../UI/SearchInput";
import styles from "./Header.module.css";

const Header = (props) => {
  const getSearchInput = (value) => {
    props.getData(value);
  };

  return (
    <header className={styles.header}>
      <SearchInput
        className={styles.search}
        search={getSearchInput}
      ></SearchInput>
      <Button className={styles.button}>Cart</Button>
    </header>
  );
};

export default Header;
