import { ReactNode } from "react";

export interface SelectedMovieContextType {
  selectedMovieId: number | null;
  setSelectedMovieId: (id: number | null) => void;
  isModalMovieOpen: boolean;
  setIsModalMovieOpen: (open: boolean) => void;
}

export interface SelectedMovieProviderProps {
  children: ReactNode;
}

export interface SelectedSeriesContextType {
  selectedSeriesId: number | null;
  setSelectedSeriesId: (id: number | null) => void;
  isModalSeriesOpen: boolean;
  setIsModalSeriesOpen: (open: boolean) => void;
}

export interface SelectedSeriesProviderProps {
  children: ReactNode;
}
