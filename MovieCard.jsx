import React from "react";
import "./MovieCard.css";

function MovieCard({ poster, title, year, rating }) {
  return (
    <div className="movie-card">
      <img className="movie-card__poster" src={poster} alt={title} />
      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__meta">Year: {year}</p>
        <p className="movie-card__meta">Rating: {rating}/10</p>
      </div>
    </div>
  );
}

export default MovieCard;
