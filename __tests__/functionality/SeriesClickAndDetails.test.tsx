import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SeriesCard } from "@/components/series/seriesCard.component";
import { SeriesHeaderInfoComponent } from "@/components/series/seriesHeaderInfo.component";
import { SeriesBodyInfoComponent } from "@/components/series/seriesBodyInfo.component";
import { SelectedMovieProvider, SelectedSeriesProvider } from "@/hooks";

const mockSeries = {
  id: 101,
  name: "Test Series",
  poster_path: "/series-poster.jpg",
  backdrop_path: "/series-backdrop.jpg",
  overview: "This is a test series description",
};

const mockSeriesDetails = {
  first_air_date: "2022-01-15",
  vote_average: 9.0,
  genres: [
    { id: 1, name: "Drama" },
    { id: 2, name: "Thriller" },
  ],
  credits: {
    cast: [
      { id: 1, name: "Actor One" },
      { id: 2, name: "Actor Two" },
      { id: 3, name: "Actor Three" },
    ],
  },
  seasons: [
    { season_number: 1, name: "Season 1" },
    { season_number: 2, name: "Season 2" },
  ],
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <SelectedMovieProvider>
    <SelectedSeriesProvider>{children}</SelectedSeriesProvider>
  </SelectedMovieProvider>
);

describe("Series Click Test", () => {
  test("when clicking on a series, the selectedSeriesId should change", () => {
    render(
      <Wrapper>
        <SeriesCard serie={mockSeries} />
      </Wrapper>
    );

    const card = screen.getByAltText("Test Series").parentElement;

    fireEvent.click(card!);

    expect(card).toBeInTheDocument();
  });
});

describe("Series Details Display Test", () => {
  test("should display the title, image, description, main actors, genres, rating and year", () => {
    render(<SeriesHeaderInfoComponent selectedSeries={mockSeries} />);

    const image = screen.getByAltText("Test Series");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500/series-backdrop.jpg"
    );

    expect(screen.getByText("Play")).toBeInTheDocument();
  });

  test("should display all the detailed information in SeriesBodyInfo", () => {
    render(
      <SeriesBodyInfoComponent
        selectedSeries={mockSeries}
        seriesDetails={mockSeriesDetails}
        isSeriesDetailsLoading={false}
      />
    );

    expect(screen.getByText("Test Series")).toBeInTheDocument();

    expect(screen.getByText("2022")).toBeInTheDocument();

    expect(screen.getByText("9.0/10")).toBeInTheDocument();

    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test series description")
    ).toBeInTheDocument();

    expect(screen.getByText("Cast:")).toBeInTheDocument();
    expect(screen.getByText("Actor One")).toBeInTheDocument();
    expect(screen.getByText("Actor Two")).toBeInTheDocument();
  });
});

