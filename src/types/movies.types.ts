import React from "react";
import { Genre, Credits } from "./common.types";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path?: string;
  overview?: string;
}

export interface MovieDetails {
  release_date: string;
  runtime: number;
  vote_average: number;
  genres: Genre[];
  credits: Credits;
}

export interface MovieCardProps {
  movie: Movie;
}

export interface MovieHeaderInfoComponentProps {
  selectedMovie: {
    backdrop_path: string;
    title: string;
  };
}

export interface MovieGenresComponentProps {
  movieDetails: {
    genres: Genre[];
  };
}

export interface MovieBodyInfoComponentProps {
  selectedMovie: {
    title: string;
    overview: string;
  };
  movieDetails: MovieDetails | null;
  isMovieDetailsLoading: boolean;
}

export interface MovieOverViewComponentProps {
  movieDetails: {
    release_date: string;
    runtime: number;
    vote_average: number;
    genres: Genre[];
    credits: {
      cast: Array<{
        id: number;
        name: string;
      }>;
    };
  } | null;
  selectedMovie: {
    title: string;
    overview: string;
    backdrop_path: string;
  };
  filter: string;
  onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MovieSwiperComponentProps {
  title: string;
  movies: {
    results: Array<{
      id: number;
      title: string;
      poster_path: string;
    }>;
  };
  className?: string;
}
