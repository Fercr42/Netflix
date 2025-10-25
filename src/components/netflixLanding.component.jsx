"use client";

import {
  usePopularMovies,
  useTrendingMovies,
  useRatedMovies,
  useMovieDetails,
} from "../hooks";

import { useEffect } from "react";

import { MovieSwiperComponent } from "./movieSwiper.component";
import { SelectedMovieContext } from "@/hooks";
import { useContext } from "react";
import { MovieGenresComponent } from "./movieGenres.component";
import { MovieHeaderInfoComponent } from "./movieHeaderInfo.component";
import { MovieBodyInfoComponent } from "./movieBodyInfo.component";
import { MovieOverViewComponent } from "./movieOverView.component";

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

  const { selectedMovieId, isModalOpen, setIsModalOpen, setSelectedMovieId } =
    useContext(SelectedMovieContext);

  const { data: movieDetails, isLoading: isMovieDetailsLoading } =
    useMovieDetails(selectedMovieId);

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

  useEffect(() => {
    if (!isLoadingEverything && !selectedMovieId) {
      setSelectedMovieId(13);
    }
  }, [isLoadingEverything, setSelectedMovieId]);

  return (
    <div className="bg-black h-auto">
      {isModalOpen && selectedMovie && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-5xl max-h-[90vh] bg-black rounded-lg relative text-white overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute  z-50 top-4 right-0 hover:text-gray-700 text-2xl font-bold text-white"
            >
              ×
            </button>

            <MovieHeaderInfoComponent selectedMovie={selectedMovie} />

            <MovieBodyInfoComponent
              selectedMovie={selectedMovie}
              movieDetails={movieDetails}
              isMovieDetailsLoading={isMovieDetailsLoading}
            />
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

      {selectedMovie && (
        <MovieOverViewComponent
          movieDetails={movieDetails}
          selectedMovie={selectedMovie}
        />
      )}

      {isLoadingEverything ? (
        <div className="flex items-center justify-center h-full">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-2">
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
