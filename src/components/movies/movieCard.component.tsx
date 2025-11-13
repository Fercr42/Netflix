"use client";

import { useContext } from "react";
import { SelectedMovieContext, SelectedSeriesContext } from "@/hooks";
import { MovieCardProps } from "@/types";

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { setSelectedMovieId, setIsModalMovieOpen } =
    useContext(SelectedMovieContext);

  const { setSelectedSeriesId } = useContext(SelectedSeriesContext);

  return (
    <div
      className="sm:w-[250px] sm:h-[150px] w-[150px] h-[100px] rounded-md overflow-hidden shrink-0 cursor-pointer hover:scale-105 transition-all duration-300"
      onDoubleClick={() => {
        setIsModalMovieOpen(true);
      }}
      onClick={() => {
        setSelectedMovieId(movie.id);
        setSelectedSeriesId(null);
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
