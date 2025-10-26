"use client";

import { useContext } from "react";
import { SelectedSeriesContext, SelectedMovieContext } from "@/hooks";

export const SeriesCard = ({ serie }) => {
  const { setSelectedSeriesId, setIsModalSeriesOpen } = useContext(
    SelectedSeriesContext
  );

  const { setSelectedMovieId } = useContext(SelectedMovieContext);

  return (
    <div
      className="sm:w-[250px] sm:h-[150px] w-[150px] h-[100px] rounded-md overflow-hidden shrink-0 cursor-pointer hover:scale-105 transition-all duration-300"
      onDoubleClick={() => {
        setIsModalSeriesOpen(true);
      }}
      onClick={() => {
        setSelectedSeriesId(serie.id);
        setSelectedMovieId(null);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
        alt={serie.name}
        className="w-full h-full"
      />
    </div>
  );
};
