import React from "react";
import "./SearchInput.css";

const SearchInput = ({ onChange, focus }) => {
  return (
    <div className={"searchWrapper"}>
      <input
        autoFocus={focus}
        className={"search"}
        onChange={onChange || null}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};
export default SearchInput;
