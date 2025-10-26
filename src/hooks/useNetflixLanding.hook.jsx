import { usePopularMovies, useTrendingMovies, useRatedMovies } from "@/hooks";
import { usePopularSeries, useTrendingSeries, useRatedSeries } from "@/hooks";
import {
  combineLoadingStates,
  combineErrors,
  getFirstError,
} from "@/utils/loadingHelpers";

export const useNetflixLandingHook = () => {
  const { data: movies, isLoading, error } = usePopularMovies();
  const {
    data: popularSeries,
    isLoading: isPopularSeriesLoading,
    error: popularSeriesError,
  } = usePopularSeries();

  const {
    data: trendingMovies,
    isLoading: isTrendingMoviesLoading,
    error: trendingMoviesError,
  } = useTrendingMovies();
  const {
    data: trendingSeries,
    isLoading: isTrendingSeriesLoading,
    error: trendingSeriesError,
  } = useTrendingSeries();

  const {
    data: ratedMovies,
    isLoading: isRatedMoviesLoading,
    error: ratedMoviesError,
  } = useRatedMovies();
  const {
    data: ratedSeries,
    isLoading: isRatedSeriesLoading,
    error: ratedSeriesError,
  } = useRatedSeries();

  const isLoadingEverything = combineLoadingStates(
    isLoading,
    isTrendingMoviesLoading,
    isRatedMoviesLoading,
    isPopularSeriesLoading,
    isTrendingSeriesLoading,
    isRatedSeriesLoading
  );

  const hasError = combineErrors(
    error,
    trendingMoviesError,
    ratedMoviesError,
    popularSeriesError,
    trendingSeriesError,
    ratedSeriesError
  );

  const firstError = getFirstError(
    error,
    trendingMoviesError,
    ratedMoviesError,
    popularSeriesError,
    trendingSeriesError,
    ratedSeriesError
  );

  const allMovies = [
    ...(movies?.results || []),
    ...(trendingMovies?.results || []),
    ...(ratedMovies?.results || []),
  ];

  const allSeries = [
    ...(popularSeries?.results || []),
    ...(trendingSeries?.results || []),
    ...(ratedSeries?.results || []),
  ];

  return {
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
  };
};
