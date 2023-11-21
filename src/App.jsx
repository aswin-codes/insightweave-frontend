// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UrlList from "./components/UrlList";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Mock data for demonstration purposes
    const mockUrls = [
      "https://www.example.com",
      "https://www.sample.com",
      "https://www.demo.com",
    ];

    // Filter URLs based on the search query
    const filteredUrls = mockUrls.filter((url) =>
      url.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredUrls);
  };

  return (
    <div className="  bg-gray-900 text-black min-h-screen ">
      <h1 className="text-white text-3xl p-4 font-semibold">InsightWeave</h1>
      <SearchBar onSearch={handleSearch} />
      <UrlList urls={searchResults} />
    </div>
  );
};

export default App;
