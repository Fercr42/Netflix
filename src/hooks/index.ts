export * from "./movies/usePopularMovies.hook";
export * from "./movies/useTrendingMovies.hook";
export * from "./movies/useRatedMovies.hook";
export * from "./movies/useMovieDetails.hook";
export {
  SelectedMovieContext,
  SelectedMovieProvider,
} from "./movies/useSelectedMovieAndSeries.hook";

export * from "./series/usePopularSeries.hook";
export * from "./series/useTrendingSeries.hook";
export * from "./series/useRatedSeries.hook";
export * from "./series/useSeriesDetails.hook";
export {
  SelectedSeriesContext,
  SelectedSeriesProvider,
} from "./series/useSelectedSerie.hook";

export * from "./useNetflixLanding.hook";
export { useNetflixLandingHook } from "./useNetflixLanding.hook";

