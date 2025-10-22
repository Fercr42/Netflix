"use client";

import { envServices } from "@/services/envServices";
import { useQuery } from "@tanstack/react-query";

export const useRatedMovies = () => {
  const { apiURL, apiKey } = envServices.getApiInformation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: async () => {
      const pages = [7, 8, 9];
      const results = await Promise.all(
        pages.map(async (page) => {
          const response = await fetch(
            `${apiURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
            {
              headers: {
                Authorization: `Bearer ${apiKey}`,
              },
            }
          );
          const data = await response.json();
          return data.results;
        })
      );
      return {
        results: results.flat(),
        totalPages: pages.length,
      };
    },
  });
  return { data, isLoading, error };
};
