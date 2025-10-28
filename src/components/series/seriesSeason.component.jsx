import { useSeriesSeasonDetails } from "@/hooks/series/useSeriesSeasonDetails.hook";

export const SeriesSeasonComponent = ({
  selectedSeries,
  seriesDetails,
  isSeasonDetailsLoading,
}) => {
  const { data: seasonDetails, isLoading: isSeasonDetailsLoading } =
    useSeriesSeasonDetails(selectedSeries.id, seriesDetails.season_number);

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
      ) : seasonDetails ? (
        <div className="mt-6">
          <div className="text-gray-400 text-sm">
            {seasonDetails.name}
            {seasonDetails.overview}
            {seasonDetails.episode_count}
            {seasonDetails.air_date}
            {seasonDetails.poster_path}
            {seasonDetails.backdrop_path}
            {seasonDetails.episode_run_time}
            {seasonDetails.vote_average}
            {seasonDetails.vote_count}
          </div>
        </div>
      ) : null}
    </div>
  );
};
