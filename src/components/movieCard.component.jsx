"use client";

import { useContext } from "react";
import { SelectedMovieContext } from "@/hooks";

export const MovieCard = ({ movie }) => {
  const { setSelectedMovieId, setIsModalOpen } =
    useContext(SelectedMovieContext);

  return (
    <div
      className="w-[250px] h-[150px] rounded-md overflow-hidden shrink-0 cursor-pointer"
      onDoubleClick={() => {
        setSelectedMovieId(movie.id);
        setIsModalOpen(true);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full"
      />
    </div>
  );
};
