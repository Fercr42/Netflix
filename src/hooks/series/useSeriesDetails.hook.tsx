"use client";

import { useQuery } from "@tanstack/react-query";
import { envServices } from "@/services/envServices";

export const useSeriesDetails = (seriesId: number | null) => {
  const { apiURL, apiKey } = envServices.getApiInformation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["seriesDetails", seriesId],
    queryFn: async () => {
      const response = await fetch(
        `${apiURL}/tv/${seriesId}?append_to_response=credits`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const data = await response.json();
      return data;
    },
    enabled: !!seriesId,
  });

  return { data, isLoading, error };
};

