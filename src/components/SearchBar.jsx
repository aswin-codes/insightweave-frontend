// src/components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-gray-800 text-white p-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
