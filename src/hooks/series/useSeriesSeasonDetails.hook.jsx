"use client";

import { useQuery } from "@tanstack/react-query";
import { envServices } from "@/services/envServices";

export const useSeriesSeasonDetails = (seriesId, seasonNumber) => {
  const { apiURL, apiKey } = envServices.getApiInformation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["seriesSeasonDetails", seriesId, seasonNumber],
    queryFn: async () => {
      const response = await fetch(
        `${apiURL}/tv/${seriesId}/season/${seasonNumber}?append_to_response=credits`,
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
