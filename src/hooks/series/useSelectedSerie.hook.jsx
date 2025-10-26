import { useState, createContext } from "react";

export const SelectedSeriesContext = createContext();

export const SelectedSeriesProvider = ({ children }) => {
  const [selectedSeriesId, setSelectedSeriesId] = useState(null);
  const [isModalSeriesOpen, setIsModalSeriesOpen] = useState(false);

  return (
    <SelectedSeriesContext.Provider
      value={{
        selectedSeriesId,
        setSelectedSeriesId,
        isModalSeriesOpen,
        setIsModalSeriesOpen,
      }}
    >
      {children}
    </SelectedSeriesContext.Provider>
  );
};
