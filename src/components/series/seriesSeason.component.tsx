"use client";

import { useState } from "react";
import { useSeriesSeasonDetails } from "@/hooks/series/useSeriesSeasonDetails.hook";
import { SeriesSeasonComponentProps } from "@/types";

export const SeriesSeasonComponent = ({
  selectedSeries,
  seriesDetails,
}: SeriesSeasonComponentProps) => {
  const [selectedSeason, setSelectedSeason] = useState(1);

  const { data: seasonDetails, isLoading: isSeasonDetailsLoading } =
    useSeriesSeasonDetails(selectedSeries.id, selectedSeason);

  const handleSelectSeason = (seasonId: number) => {
    setSelectedSeason(seasonId);
  };

  return (
    <div>
      {isSeasonDetailsLoading ? (
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-400 text-sm">
              Loading season details...
            </span>
          </div>
        </div>
      ) : (
        seasonDetails && (
          <div className="mt-6 flex flex-row justify-between gap-4 items-center">
            <h1>Episodes</h1>

            <div className="text-gray-400 text-sm">
              <select
                className="p-2 rounded-md border border-gray-300 bg-gray-800 text-white"
                value={selectedSeason}
                onChange={(e) => handleSelectSeason(parseInt(e.target.value))}
              >
                {seriesDetails?.seasons.map((season) => (
                  <option
                    key={season.season_number}
                    value={season.season_number}
                  >
                    {season.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )
      )}

      {seasonDetails?.episodes && (
        <div className="flex flex-col gap-4 p-4">
          {seasonDetails.episodes.map((episode: any) => (
            <div
              key={episode.id}
              className="flex flex-row gap-2 bg-gray-800 w-full rounded-md p-4 items-center"
            >
              <span className="text-white text-sm mr-4">
                {episode.episode_number}
              </span>
              <img
                src={
                  episode.still_path
                    ? `https://image.tmdb.org/t/p/w500${episode.still_path}`
                    : "/placeholder-episode.jpg"
                }
                alt={episode.name}
                className="size-24 sm:w-40 sm:h-24 object-cover rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder-episode.jpg";
                }}
              />

              <div className="flex flex-col gap-2">
                <h2 className="text-xs xs:text-sm font-bold text-white">
                  {episode.name}
                </h2>
                <p className="text-gray-400  text-sm line-clamp-3">
                  {episode.overview}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{episode.runtime} min</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

