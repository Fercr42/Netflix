"use client";

import { useQuery } from "@tanstack/react-query";
import { envServices } from "@/services/envServices";

export const useWatchListMovies = () => {
  const { apiURL, apiKey } = envServices.getApiInformation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["watchListMovies"],
    queryFn: async () => {
      const pages = [10, 11, 12];
      const results = await Promise.all(
        pages.map(async (page) => {
          const response = await fetch(
            `${apiURL}/watchlist/movie?page=${page}&sort_by=popularity.desc`,
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
