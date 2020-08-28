import React, { useState } from "react";
import styles from "./form.module.scss";
const Form = ({ handleState }) => {
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    // setQuery(search);
    handleState(search);
    console.log(search);
  };

  return (
    <form onSubmit={getSearch} className={styles.form}>
      <h1>
        Welcome to dish-finder. Type an ingredient that will be the basis of
        your dish!
      </h1>
      <input
        type="text"
        className="search-bar"
        value={search}
        onChange={handleInput}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default Form;
