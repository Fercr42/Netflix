"use client";

import { useQuery } from "@tanstack/react-query";
import { envServices } from "@/services/envServices";

export const useTrendingMovies = () => {
  const { apiURL, apiKey } = envServices.getApiInformation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: async () => {
      const pages = [4, 5, 6];
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
