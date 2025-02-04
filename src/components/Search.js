import React, {useState} from "react";

function Search({onSearchChange, search}) {

  
  
  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearchChange}
        value={search}
      />
    </div>
  );
}

export default Search;
