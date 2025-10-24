export const MovieGenresComponent = ({ movieDetails }) => {
  return (
    movieDetails.genres &&
    movieDetails.genres.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {movieDetails.genres.map((genre) => (
          <span
            key={genre.id}
            className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium"
          >
            {genre.name}
          </span>
        ))}
      </div>
    )
  );
};
