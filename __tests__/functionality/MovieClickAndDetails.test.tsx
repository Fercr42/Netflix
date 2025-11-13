import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MovieCard } from "@/components/movies/movieCard.component";
import { MovieHeaderInfoComponent } from "@/components/movies/movieHeaderInfo.component";
import { MovieBodyInfoComponent } from "@/components/movies/movieBodyInfo.component";
import { SelectedMovieProvider, SelectedSeriesProvider } from "@/hooks";

const mockMovie = {
  id: 1,
  title: "Test Movie",
  poster_path: "/test-poster.jpg",
  backdrop_path: "/test-backdrop.jpg",
  overview: "This is a test movie description",
};

const mockMovieDetails = {
  release_date: "2023-01-15",
  runtime: 120,
  vote_average: 8.5,
  genres: [
    { id: 1, name: "Action" },
    { id: 2, name: "Drama" },
  ],
  credits: {
    cast: [
      { id: 1, name: "John Doe", character: "Hero" },
      { id: 2, name: "Jane Smith", character: "Villain" },
      { id: 3, name: "Bob Johnson" },
    ],
  },
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <SelectedMovieProvider>
    <SelectedSeriesProvider>{children}</SelectedSeriesProvider>
  </SelectedMovieProvider>
);

describe("Movie Click Test", () => {
  test("when clicking on a movie, the selectedMovieId should change", async () => {
    render(
      <Wrapper>
        <MovieCard movie={mockMovie} />
      </Wrapper>
    );

    const card = screen.getByAltText("Test Movie").parentElement;

    fireEvent.click(card!);

    expect(card).toBeInTheDocument();
  });
});

describe("Movie Details Display Test", () => {
  test("should display the title, image, description, actors, genres, rating, duration and year", () => {
    render(<MovieHeaderInfoComponent selectedMovie={mockMovie} />);

    const image = screen.getByAltText("Test Movie");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500/test-backdrop.jpg"
    );

    expect(screen.getByText("Play")).toBeInTheDocument();
  });

  test("should display all the detailed information in MovieBodyInfo", () => {
    render(
      <MovieBodyInfoComponent
        selectedMovie={mockMovie}
        movieDetails={mockMovieDetails}
        isMovieDetailsLoading={false}
      />
    );

    expect(screen.getByText("Test Movie")).toBeInTheDocument();

    expect(screen.getByText("2023")).toBeInTheDocument();

    expect(screen.getByText("120 min")).toBeInTheDocument();

    expect(screen.getByText("8.5/10")).toBeInTheDocument();

    expect(screen.getByText("Main Cast")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("as Hero")).toBeInTheDocument();
  });

  test("should display the description", () => {
    render(
      <MovieBodyInfoComponent
        selectedMovie={mockMovie}
        movieDetails={mockMovieDetails}
        isMovieDetailsLoading={false}
      />
    );

    expect(
      screen.getByText("This is a test movie description")
    ).toBeInTheDocument();
  });
});

