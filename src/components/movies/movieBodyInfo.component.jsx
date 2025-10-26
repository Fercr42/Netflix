import { MovieGenresComponent } from "./movieGenres.component";

export const MovieBodyInfoComponent = ({
  selectedMovie,
  movieDetails,
  isMovieDetailsLoading,
}) => {
  return (
    <div className="relative z-10 w-full p-6 pb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {selectedMovie.title}
      </h2>

      {movieDetails && (
        <div className="mb-6 space-y-3">
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span className="font-semibold bg-gray-800 px-3 py-1 rounded">
              Year: {new Date(movieDetails.release_date).getFullYear()}
            </span>
            <span className="font-semibold bg-gray-800 px-3 py-1 rounded">
              Duration: {movieDetails.runtime} min
            </span>
            <span className="font-semibold bg-gray-800 px-3 py-1 rounded">
              Rating: {movieDetails.vote_average?.toFixed(1)}/10
            </span>
          </div>

          <MovieGenresComponent movieDetails={movieDetails} />
        </div>
      )}

      <p className="text-white text-md leading-relaxed mb-6">
        {selectedMovie.overview}
      </p>

      {isMovieDetailsLoading ? (
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-400 text-sm">Loading cast...</span>
          </div>
        </div>
      ) : movieDetails?.credits?.cast &&
        movieDetails.credits.cast.length > 0 ? (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white mb-4">Main Cast</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movieDetails.credits.cast.slice(0, 6).map((actor) => (
              <div
                key={actor.id}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <div className="text-white text-sm font-medium mb-2">
                  {actor.name}
                </div>
                {actor.character && (
                  <div className="text-gray-400 text-xs">
                    as {actor.character}
                  </div>
                )}
              </div>
            ))}
          </div>
          {movieDetails.credits.cast.length > 6 && (
            <div className="mt-4">
              <span className="text-gray-400 text-sm">
                and {movieDetails.credits.cast.length - 6} more actors...
              </span>
            </div>
          )}
        </div>
      ) : movieDetails ? (
        <div className="mt-6">
          <div className="text-gray-400 text-sm">
            No cast information available
          </div>
        </div>
      ) : null}
    </div>
  );
};
