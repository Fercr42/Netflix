"use client";

export const MovieCard = ({ movie }) => {
  return (
    <div className="w-[250px] h-[150px] rounded-md overflow-hidden shrink-0">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full"
      />
    </div>
  );
};
