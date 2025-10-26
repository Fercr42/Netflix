export const SeriesOverViewComponent = ({
  seriesDetails,
  selectedSeries,
  filter,
  onChangeFilter,
}) => {
  return (
    <div className=" relative w-full lg:flex  lg:flex-row p-2">
      <div className="w-full flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {selectedSeries.name}
        </h2>

        {seriesDetails && (
          <div className="flex flex-row gap-2 mb-4">
            <span className="font-semibold bg-gray-400 px-3 py-1 rounded">
              {seriesDetails.first_air_date
                ? new Date(seriesDetails.first_air_date).getFullYear()
                : "N/A"}
            </span>
            <span className="font-semibold bg-gray-400 px-3 py-1 rounded">
              {seriesDetails.episode_run_time?.[0]
                ? `${seriesDetails.episode_run_time[0]} min`
                : ""}
            </span>
            <span className="font-semibold bg-gray-400 px-3 py-1 rounded">
              {seriesDetails.vote_average?.toFixed(1)}/10
            </span>
          </div>
        )}

        <p className="text-sm text-white whitespace-normal break-word">
          {selectedSeries.overview}{" "}
        </p>

        <div className="flex flex-col mt-4 mb-4">
          {seriesDetails && (
            <div className="flex flex-row  gap-2">
              {seriesDetails.genres.map((genre, index) => (
                <span
                  key={genre.id}
                  className="font-semibold text-white text-sm"
                >
                  {genre.name}
                  {index < 2 ? ", " : ""}
                </span>
              ))}
            </div>
          )}

          {seriesDetails?.credits?.cast?.length > 0 && (
            <div className="flex flex-row gap-2">
              {seriesDetails?.credits?.cast?.slice(0, 3).map((cast, index) => (
                <span
                  key={cast.id}
                  className="font-semibold text-white text-sm"
                >
                  {cast.name}
                  {index < 2 ? ", " : ""}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full gap-2">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
            <svg
              className="w-5 h-5 text-gray-500 group-focus-within:text-red-600 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={filter}
            onChange={onChangeFilter}
            className="w-full text-white text-sm bg-gray-900/90 px-3 py-3 pl-10 pr-10 rounded-lg border-2 border-gray-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-all duration-200 placeholder-gray-500 shadow-lg"
            placeholder="Search for a movie or series..."
          />
          {filter.length > 0 && (
            <button
              onClick={() => onChangeFilter({ target: { value: "" } })}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-red-600 transition-colors duration-200 z-10"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <img
          src={`https://image.tmdb.org/t/p/w500${selectedSeries.backdrop_path}`}
          alt={selectedSeries.name}
          className="w-full h-64 rounded-2xl "
        />
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-64 bg-gradient-to-t from-black/90 to-transparent"></div>
    </div>
  );
};
