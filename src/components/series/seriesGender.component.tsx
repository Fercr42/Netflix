import { SeriesGenderComponentProps } from "@/types";

export const SeriesGenderComponent = ({
  seriesDetails,
}: SeriesGenderComponentProps) => {
  return (
    seriesDetails.genres &&
    seriesDetails.genres.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {seriesDetails.genres.map((genre) => (
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

