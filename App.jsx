import React, { useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard.jsx";

const movies = [
  {
    id: 1,
    title: "The Lion King",
    year: 2019,
    rating: 7.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0NTI3ODQyOV5BMl5BanBnXkFtZTgwNzU1NzU3NzE@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 2,
    title: "Mowgli: Legend of the Jungle",
    year: 2018,
    rating: 6.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTkzMTg0NTU2OF5BMl5BanBnXkFtZTgwODMzNDk2NjM@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 3,
    title: "Doctor Strange",
    year: 2016,
    rating: 7.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU3NV5BMl5BanBnXkFtZTgwMzE4NjUxMDI@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 4,
    title: "John Wick",
    year: 2014,
    rating: 7.4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTA0MzQ0ODQ2NzReQTJeQWpwZ15BbWU4MDk0NDY0ODEx._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 5,
    title: "The Notebook",
    year: 2004,
    rating: 7.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE1NDQwNDYwMV5BMl5BanBnXkFtZTcwNzIxMzUyMw@@._V1_FMjpg_UX1000_.jpg"
  }
];

function App() {
  const [query, setQuery] = useState("");

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  const singleMatch = filtered.length === 1 ? filtered[0] : null;

  return (
    <div className="page">
      <h1 className="page__title">Welcome to laraveller.</h1>

      <input
        className="page__search"
        type="text"
        placeholder="search movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* text reply with rating */}
      {singleMatch && (
        <p className="page__reply">
          You searched for <strong>{singleMatch.title}</strong>. Its rating is{" "}
          <strong>{singleMatch.rating}/10</strong>.
        </p>
      )}

      {!singleMatch && query && filtered.length === 0 && (
        <p className="page__reply">No movie found for “{query}”.</p>
      )}

      {/* list text lines like your screenshot */}
      <div className="page__list">
        {filtered.map((movie) => (
          <p key={movie.id} className="page__item">
            My favorite movie is {movie.title} {movie.year} – Rating{" "}
            {movie.rating}/10
          </p>
        ))}
      </div>

      {/* Movie cards with posters */}
      <div className="page__cards">
        {filtered.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
