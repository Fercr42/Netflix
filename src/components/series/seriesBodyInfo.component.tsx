import { SeriesGenderComponent } from "./seriesGender.component";
import { SeriesSeasonComponent } from "./seriesSeason.component";
import { SeriesBodyInfoComponentProps } from "@/types";

export const SeriesBodyInfoComponent = ({
  selectedSeries,
  seriesDetails,
  isSeriesDetailsLoading,
}: SeriesBodyInfoComponentProps) => {
  return (
    <div className="relative z-10 w-full p-6 pb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {selectedSeries.name}
      </h2>

      {seriesDetails && (
        <div className="mb-6 space-y-3">
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span className="font-semibold bg-gray-800 px-3 py-1 rounded">
              {new Date(seriesDetails.first_air_date).getFullYear()}
            </span>

            <span className="font-semibold bg-gray-800 px-3 py-1 rounded">
              {seriesDetails.vote_average?.toFixed(1)}/10
            </span>
          </div>
        </div>
      )}

      {isSeriesDetailsLoading ? (
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-400 text-sm">Loading cast...</span>
          </div>
        </div>
      ) : seriesDetails?.credits?.cast &&
        seriesDetails.credits.cast.length > 0 ? (
        <div className="mt-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-white text-lg font-semibold mb-3">
                Overview
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {selectedSeries.overview}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-row gap-2">
                <span className="font-semibold text-gray-400 text-sm">
                  Cast:
                </span>
                <div className="flex flex-wrap gap-2">
                  {seriesDetails.credits.cast
                    .slice(0, 3)
                    .map((actor, index) => (
                      <span key={actor.id} className="text-white text-sm">
                        {actor.name}
                        {index < 2 ? ", " : ""}
                      </span>
                    ))}
                  {seriesDetails.credits.cast.length > 3 && (
                    <span className="text-gray-400 text-sm">and more...</span>
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <span className="font-semibold text-gray-400 text-sm">
                  Genre:
                </span>
                <SeriesGenderComponent seriesDetails={seriesDetails} />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <SeriesSeasonComponent
        selectedSeries={selectedSeries}
        seriesDetails={seriesDetails}
      />
    </div>
  );
};

