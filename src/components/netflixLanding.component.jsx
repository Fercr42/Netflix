"use client";

import {
  useMovies,
  useTrendingMovies,
  useRatedMovies,
  useWatchListMovies,
} from "../hooks";
import { useState } from "react";
import { MovieSwiperComponent } from "./movieSwiper.component";

export const NetflixLandingComponent = () => {
  const { data: movies, isLoading, error } = useMovies();
  const {
    data: trendingMovies,
    isLoading: isTrendingMoviesLoading,
    error: trendingMoviesError,
  } = useTrendingMovies();
  const {
    data: ratedMovies,
    isLoading: isRatedMoviesLoading,
    error: ratedMoviesError,
  } = useRatedMovies();
  const {
    data: watchListMovies,
    isLoading: isWatchListMoviesLoading,
    error: watchListMoviesError,
  } = useWatchListMovies();

  const isLoadingEverything =
    isLoading ||
    isTrendingMoviesLoading ||
    isRatedMoviesLoading ||
    isWatchListMoviesLoading;

  const isError =
    error || trendingMoviesError || ratedMoviesError || watchListMoviesError;

  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="bg-black h-auto">
      {isError && (
        <div className="text-white text-4xl font-bold">
          {error?.message ||
            trendingMoviesError?.message ||
            ratedMoviesError?.message ||
            watchListMoviesError?.message}
        </div>
      )}

      {isLoadingEverything && (
        <div className="flex items-center justify-center h-full">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!isLoadingEverything && (
        <div className="space-y-8">
          <MovieSwiperComponent title="Popular on Netflix" movies={movies} />

          <MovieSwiperComponent
            title="Trending Movies"
            movies={trendingMovies}
          />

          <MovieSwiperComponent title="Top Rated Movies" movies={ratedMovies} />

          <MovieSwiperComponent
            title="Watchlist Movies"
            movies={watchListMovies}
          />
        </div>
      )}
    </div>
  );
};
