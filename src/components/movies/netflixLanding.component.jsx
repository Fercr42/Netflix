"use client";

import { useEffect, useState, useContext } from "react";

import {
  MovieHeaderInfoComponent,
  MovieBodyInfoComponent,
  MovieOverViewComponent,
  SeriesSwiperComponent,
  MovieSwiperComponent,
  SeriesOverViewComponent,
  SeriesHeaderInfoComponent,
  SeriesBodyInfoComponent,
} from "@/components";

import {
  useMovieDetails,
  useSeriesDetails,
  SelectedMovieContext,
  SelectedSeriesContext,
  useNetflixLandingHook,
} from "@/hooks";

export const NetflixLandingComponent = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredTrendingMovies, setFilteredTrendingMovies] = useState([]);
  const [filteredRatedMovies, setFilteredRatedMovies] = useState([]);
  const [filteredPopularSeries, setFilteredPopularSeries] = useState([]);
  const [filteredTrendingSeries, setFilteredTrendingSeries] = useState([]);
  const [filteredRatedSeries, setFilteredRatedSeries] = useState([]);
  const [filter, setFilter] = useState("");

  const {
    isLoadingEverything,
    hasError,
    firstError,
    allMovies,
    allSeries,
    movies,
    popularSeries,
    trendingMovies,
    trendingSeries,
    ratedMovies,
    ratedSeries,
  } = useNetflixLandingHook();

  const {
    selectedMovieId,
    isModalMovieOpen,
    setIsModalMovieOpen,
    setSelectedMovieId,
  } = useContext(SelectedMovieContext);

  const {
    selectedSeriesId,
    isModalSeriesOpen,
    setIsModalSeriesOpen,
    setSelectedSeriesId,
  } = useContext(SelectedSeriesContext);

  const { data: movieDetails, isLoading: isMovieDetailsLoading } =
    useMovieDetails(selectedMovieId);

  const { data: seriesDetails, isLoading: isSeriesDetailsLoading } =
    useSeriesDetails(selectedSeriesId);

  const selectedMovie =
    selectedMovieId && allMovies.length > 0
      ? allMovies.find((movie) => movie.id === selectedMovieId)
      : null;

  const selectedSeries =
    selectedSeriesId && allSeries.length > 0
      ? allSeries.find((series) => series.id === selectedSeriesId)
      : null;

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    if (
      !isLoadingEverything &&
      allMovies.length > 0 &&
      allSeries.length > 0 &&
      !selectedMovieId &&
      !selectedSeriesId
    ) {
      setSelectedMovieId(13);
    }
  }, [isLoadingEverything]);

  useEffect(() => {
    if (filter.length > 0) {
      const filteredPopularMovies = (movies?.results || []).filter((movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredMovies(filteredPopularMovies);
    } else {
      setFilteredMovies(movies?.results || []);
    }

    if (filter.length > 0) {
      const filteredTrendingMovies = (trendingMovies?.results || []).filter(
        (movie) => movie.title.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredTrendingMovies(filteredTrendingMovies);
    } else {
      setFilteredTrendingMovies(trendingMovies?.results || []);
    }

    if (filter.length > 0) {
      const filteredRatedMovies = (ratedMovies?.results || []).filter((movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredRatedMovies(filteredRatedMovies);
    } else {
      setFilteredRatedMovies(ratedMovies?.results || []);
    }

    if (filter.length > 0) {
      const filteredPopularSeries = (popularSeries?.results || []).filter(
        (series) => series.name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredPopularSeries(filteredPopularSeries);
    } else {
      setFilteredPopularSeries(popularSeries?.results || []);
    }

    if (filter.length > 0) {
      const filteredTrendingSeries = (trendingSeries?.results || []).filter(
        (series) => series.name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredTrendingSeries(filteredTrendingSeries);
    } else {
      setFilteredTrendingSeries(trendingSeries?.results || []);
    }

    if (filter.length > 0) {
      const filteredRatedSeries = (ratedSeries?.results || []).filter(
        (series) => series.name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredRatedSeries(filteredRatedSeries);
    } else {
      setFilteredRatedSeries(ratedSeries?.results || []);
    }
  }, [
    filter,
    movies,
    popularSeries,
    trendingMovies,
    ratedMovies,
    trendingSeries,
    ratedSeries,
    popularSeries,
  ]);

  return (
    <div className="bg-black h-full">
      {isModalMovieOpen && selectedMovie && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-5xl max-h-[90vh] bg-black rounded-lg relative text-white overflow-y-auto">
            <button
              onClick={() => setIsModalMovieOpen(false)}
              className="absolute  z-50 top-4 right-0 hover:text-gray-700 text-2xl font-bold border-2 border-red-600 text-white p-2 rounded-full "
            >
              X
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

      {isModalSeriesOpen && selectedSeries && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-5xl max-h-[90vh] bg-black rounded-lg relative text-white overflow-y-auto">
            <button
              onClick={() => setIsModalSeriesOpen(false)}
              className="absolute  z-50 top-4 right-0   hover:text-gray-700 text-2xl font-bold border-2 border-red-600 text-white p-2 rounded-full "
            >
              X
            </button>

            <SeriesHeaderInfoComponent selectedSeries={selectedSeries} />

            <SeriesBodyInfoComponent
              selectedSeries={selectedSeries}
              seriesDetails={seriesDetails}
              isSeriesDetailsLoading={isSeriesDetailsLoading}
            />
          </div>
        </div>
      )}

      {hasError && (
        <div className="text-white text-4xl font-bold">
          {firstError?.message}
        </div>
      )}

      {selectedMovie ? (
        <MovieOverViewComponent
          movieDetails={movieDetails}
          selectedMovie={selectedMovie}
          filter={filter}
          onChangeFilter={onChangeFilter}
        />
      ) : selectedSeries ? (
        <SeriesOverViewComponent
          seriesDetails={seriesDetails}
          selectedSeries={selectedSeries}
          filter={filter}
          onChangeFilter={onChangeFilter}
        />
      ) : null}

      {isLoadingEverything ? (
        <div className="flex items-center justify-center h-full">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-2">
          <MovieSwiperComponent
            title="Popular Movies"
            movies={{ results: filteredMovies }}
          />

          <SeriesSwiperComponent
            title="Popular Series"
            series={{ results: filteredPopularSeries }}
          />

          <MovieSwiperComponent
            title="Trending Movies"
            movies={{ results: filteredTrendingMovies }}
          />

          <SeriesSwiperComponent
            title="Trending Series"
            series={{ results: filteredTrendingSeries }}
          />

          <MovieSwiperComponent
            title="Top Rated Movies"
            movies={{ results: filteredRatedMovies }}
          />

          <SeriesSwiperComponent
            title="Top Rated Series"
            series={{ results: filteredRatedSeries }}
          />
        </div>
      )}
    </div>
  );
};
