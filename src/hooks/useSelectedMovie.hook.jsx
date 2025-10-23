import { createContext, useState } from "react";

export const SelectedMovieContext = createContext();

export const SelectedMovieProvider = ({ children }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SelectedMovieContext.Provider
      value={{
        selectedMovieId,
        setSelectedMovieId,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </SelectedMovieContext.Provider>
  );
};
