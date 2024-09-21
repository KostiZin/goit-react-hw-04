import React from "react";

const SearchBar = ({ onSubmit }) => {
  return (
    <div>
      {/* <input type="text" value={inputValue} onChange={onInputChange} /> */}
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit" onSubmit={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
