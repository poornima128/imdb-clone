import React from "react";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div>
      <h1>My Movie App</h1>
      <MovieCard
        title="Inception"
        posterUrl="https://m.media-amazon.com/images/I/51s+zQfZl-L._AC_.jpg"
        year={2010}/>
    </div>
  );
}

export default App;