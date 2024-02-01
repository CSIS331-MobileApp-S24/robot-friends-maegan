import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba bg-lightest-blue bw2 b--green"
        type="search"
        placeholder="search robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
