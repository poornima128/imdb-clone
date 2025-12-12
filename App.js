import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";

const sections = [
  // ... your favourites / tamil / family arrays
];

function App() {
  const [query, setQuery] = useState("");

  const allMovies = sections.flatMap((section) => section.movies);
  const filteredMovies = query
    ? allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  return (
    <div className="app">
      {/* header, hero, etc. */}
      {query && (
        <section className="app__section">
          <h2 className="app__section-title">
            Search results for: <span>{query}</span>
          </h2>
          <div className="app__row">
            {filteredMovies.length === 0 && (
              <p className="app__empty">No movies found.</p>
            )}
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
              />
            ))}
          </div>
        </section>
      )}

      {sections.map((section) => (
        <section key={section.id} className="app__section">
          <h2 className="app__section-title">{section.title}</h2>
          <div className="app__row">
            {section.movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
