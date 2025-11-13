import { createContext, useState } from "react";
import {
  SelectedMovieContextType,
  SelectedMovieProviderProps,
} from "@/types";

export const SelectedMovieContext = createContext<SelectedMovieContextType>({
  selectedMovieId: null,
  setSelectedMovieId: () => {},
  isModalMovieOpen: false,
  setIsModalMovieOpen: () => {},
});

export const SelectedMovieProvider = ({ children }: SelectedMovieProviderProps) => {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [isModalMovieOpen, setIsModalMovieOpen] = useState(false);

  return (
    <SelectedMovieContext.Provider
      value={{
        selectedMovieId,
        setSelectedMovieId,
        isModalMovieOpen,
        setIsModalMovieOpen,
      }}
    >
      {children}
    </SelectedMovieContext.Provider>
  );
};

