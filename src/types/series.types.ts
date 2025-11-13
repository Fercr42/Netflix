import React from "react";
import { Genre, Credits } from "./common.types";

export interface Series {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path?: string;
  overview?: string;
}

export interface SeriesDetails {
  first_air_date: string;
  episode_run_time?: number[];
  vote_average: number;
  genres: Genre[];
  credits: Credits;
  seasons: Array<{
    season_number: number;
    name: string;
  }>;
}

export interface SeriesCardProps {
  serie: {
    id: number;
    name: string;
    poster_path: string;
  };
}

export interface SeriesHeaderInfoComponentProps {
  selectedSeries: {
    backdrop_path: string;
    name: string;
  };
}

export interface SeriesGenderComponentProps {
  seriesDetails: {
    genres: Genre[];
  };
}

export interface SeriesBodyInfoComponentProps {
  selectedSeries: {
    name: string;
    overview: string;
  };
  seriesDetails: {
    first_air_date: string;
    vote_average: number;
    credits: {
      cast: Array<{
        id: number;
        name: string;
      }>;
    };
    seasons: Array<{
      season_number: number;
      name: string;
    }>;
  } | null;
  isSeriesDetailsLoading: boolean;
}

export interface SeriesOverViewComponentProps {
  seriesDetails: {
    first_air_date: string;
    episode_run_time?: number[];
    vote_average: number;
    genres: Genre[];
    credits: {
      cast: Array<{
        id: number;
        name: string;
      }>;
    };
  } | null;
  selectedSeries: {
    name: string;
    overview: string;
    backdrop_path: string;
  };
  filter: string;
  onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SeriesSeasonComponentProps {
  selectedSeries: {
    id: number;
  };
  seriesDetails: {
    seasons: Array<{
      season_number: number;
      name: string;
    }>;
  } | null;
}

export interface SeriesSwiperComponentProps {
  title: string;
  series: {
    results: Array<{
      id: number;
      name: string;
      poster_path: string;
    }>;
  };
  className?: string;
}
