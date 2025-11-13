import { useState, createContext } from "react";
import {
  SelectedSeriesContextType,
  SelectedSeriesProviderProps,
} from "@/types";

export const SelectedSeriesContext = createContext<SelectedSeriesContextType>({
  selectedSeriesId: null,
  setSelectedSeriesId: () => {},
  isModalSeriesOpen: false,
  setIsModalSeriesOpen: () => {},
});

export const SelectedSeriesProvider = ({ children }: SelectedSeriesProviderProps) => {
  const [selectedSeriesId, setSelectedSeriesId] = useState<number | null>(null);
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

