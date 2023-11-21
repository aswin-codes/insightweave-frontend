// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UrlList from "./components/UrlList";
import { data } from "autoprefixer";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch("http://localhost:8000/api/link/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          URL: query,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setSearchResults(data.Links);
    } catch (error) {
      console.error("Error fetching URL details", error);
      // Handle the error as needed, e.g., set an error state.
    }
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
