"use client";

import {
  usePopularMovies,
  useTrendingMovies,
  useRatedMovies,
  useWatchListMovies,
} from "../hooks";

import { MovieSwiperComponent } from "./movieSwiper.component";
import { SelectedMovieContext } from "@/hooks";
import { useContext } from "react";

export const NetflixLandingComponent = () => {
  const { data: movies, isLoading, error } = usePopularMovies();
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

  const { selectedMovieId, isModalOpen, setIsModalOpen } =
    useContext(SelectedMovieContext);

  const allMovies = [
    ...(movies?.results || []),
    ...(trendingMovies?.results || []),
    ...(ratedMovies?.results || []),
  ];

  const selectedMovie =
    selectedMovieId && allMovies.length > 0
      ? allMovies.find((movie) => movie.id === selectedMovieId)
      : null;

  const isLoadingEverything =
    isLoading || isTrendingMoviesLoading || isRatedMoviesLoading;

  const isError = error || trendingMoviesError || ratedMoviesError;

  return (
    <div className="bg-black h-auto">
      {isModalOpen && selectedMovie && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="max-w-4xl h-auto max-h-4xl bg-black rounded-lg relative text-white">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute  z-10 top-4 right-4 hover:text-gray-700 text-2xl font-bold text-white"
            >
              ×
            </button>

            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
                alt={selectedMovie.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full h-full ">
              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedMovie.title}
              </h2>
              <p className="text-white text-md leading-relaxed">
                {selectedMovie.overview}
              </p>
            </div>
          </div>
        </div>
      )}

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
        </div>
      )}
    </div>
  );
};
