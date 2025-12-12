import React from "react";

const MovieCard = ({ poster, title, year, rating }) => {
  return (
    <div className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 transition-transform">
      <img
        src={poster}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">Release Year: {year}</p>
        <p className="text-sm text-yellow-600 font-semibold">⭐ {rating}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;