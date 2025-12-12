import React from "react";
import "./MovieCard.css";

function MovieCard({ poster, title, year, rating }) {
  return (
    <div className="movie-card">
      <div className="movie-card__image-wrap">
        <img className="movie-card__poster" src={poster} alt={title} />
        <span className="movie-card__badge">{rating}</span>
      </div>
      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__meta">Year: {year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
