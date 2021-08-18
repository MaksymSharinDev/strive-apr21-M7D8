import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";

/*
Exercise Theme: Music Search Engine
  Page:
  - Homepage
    - Search Input
    - Results
  - Details Page
    - song information

    Search API: https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever
    Track Details API: https://striveschool-api.herokuapp.com/api/deezer/track/:id

 */

function App() {
  return (
    <div className="App">
      <SearchBar callback={a => console.log( a )}/>
    </div>
  );
}

export default App;
