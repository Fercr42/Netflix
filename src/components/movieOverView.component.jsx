export const MovieOverViewComponent = ({ movieDetails, selectedMovie }) => {
  return (
    <div className=" relative w-full flex flex-row p-2">
      <div className="w-full flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {selectedMovie.title}
        </h2>

        {movieDetails && (
          <div className="flex flex-row gap-2 mb-4">
            <span className="font-semibold bg-gray-400 px-3 py-1 rounded">
              {new Date(movieDetails.release_date).getFullYear()}
            </span>
            <span className="font-semibold bg-gray-400 px-3 py-1 rounded">
              {movieDetails.runtime} min
            </span>
            <span className="font-semibold bg-gray-400 px-3 py-1 rounded">
              {movieDetails.vote_average?.toFixed(1)}/10
            </span>
          </div>
        )}

        <p className="text-sm text-gray-300 whitespace-normal break-word">
          {selectedMovie.overview}{" "}
        </p>

        <div className="flex flex-col mt-4 mb-4">
          {movieDetails && (
            <div className="flex flex-row  gap-2">
              {movieDetails.genres.map((genre, index) => (
                <span
                  key={genre.id}
                  className="font-semibold text-gray-300 text-sm"
                >
                  {genre.name}
                  {index < 2 ? ", " : ""}
                </span>
              ))}
            </div>
          )}

          {movieDetails?.credits?.cast?.length > 0 && (
            <div className="flex flex-row gap-2">
              {movieDetails?.credits?.cast?.slice(0, 3).map((cast, index) => (
                <span
                  key={cast.id}
                  className="font-semibold text-gray-300 text-sm"
                >
                  {cast.name}
                  {index < 2 ? ", " : ""}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
        alt={selectedMovie.title}
        className="w-full h-64 rounded-2xl "
      />

      <div className="absolute left-0 right-0 bottom-0 h-64 bg-gradient-to-t from-black/90 to-transparent"></div>
    </div>
  );
};
