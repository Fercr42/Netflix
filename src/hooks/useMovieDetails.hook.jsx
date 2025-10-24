"use client";

import { useQuery } from "@tanstack/react-query";
import { envServices } from "@/services/envServices";

export const useMovieDetails = (movieId) => {
  const { apiURL, apiKey } = envServices.getApiInformation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movieDetails", movieId],
    queryFn: async () => {
      const response = await fetch(
        `${apiURL}/movie/${movieId}?append_to_response=credits`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const data = await response.json();
      return data;
    },
  });

  return { data, isLoading, error };
};
