import { createContext, useState } from "react";

export const SelectedMovieContext = createContext();

export const SelectedMovieProvider = ({ children }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
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
