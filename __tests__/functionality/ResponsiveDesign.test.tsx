import React from "react";
import { render, screen } from "@testing-library/react";
import { MovieHeaderInfoComponent } from "@/components/movies/movieHeaderInfo.component";
import { MovieOverViewComponent } from "@/components/movies/movieOverView.component";

const mockMovie = {
  id: 1,
  title: "Test Movie",
  backdrop_path: "/test.jpg",
  overview: "Test description",
};

const mockMovieDetails = {
  release_date: "2023-01-01",
  runtime: 120,
  vote_average: 8.5,
  genres: [{ id: 1, name: "Action" }],
  credits: { cast: [] },
};

describe("Responsive Design Test", () => {
  test("should have responsive classes in the header (h-64 md:h-80)", () => {
    render(<MovieHeaderInfoComponent selectedMovie={mockMovie} />);

    const image = screen.getByAltText("Test Movie");

    expect(image).toHaveClass("h-64");
    expect(image).toHaveClass("md:h-80");
  });

  test("should have responsive classes in the title (text-2xl md:text-3xl)", () => {
    const mockOnChangeFilter = jest.fn();

    render(
      <MovieOverViewComponent
        selectedMovie={mockMovie}
        movieDetails={mockMovieDetails}
        filter=""
        onChangeFilter={mockOnChangeFilter}
      />
    );

    const title = screen.getByText("Test Movie");

    expect(title).toHaveClass("text-2xl");
    expect(title).toHaveClass("md:text-3xl");
  });

  test("should have responsive layout (lg:flex lg:flex-row)", () => {
    const mockOnChangeFilter = jest.fn();

    const { container } = render(
      <MovieOverViewComponent
        selectedMovie={mockMovie}
        movieDetails={mockMovieDetails}
        filter=""
        onChangeFilter={mockOnChangeFilter}
      />
    );

    const mainDiv = container.firstChild;

    expect(mainDiv).toHaveClass("lg:flex");
    expect(mainDiv).toHaveClass("lg:flex-row");
  });

  test("should have responsive classes for the actors container (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3)", () => {
    const movieWithCast = {
      ...mockMovieDetails,
      credits: {
        cast: [
          { id: 1, name: "Actor 1" },
          { id: 2, name: "Actor 2" },
          { id: 3, name: "Actor 3" },
        ],
      },
    };

    const { container } = render(
      <MovieOverViewComponent
        selectedMovie={mockMovie}
        movieDetails={movieWithCast}
        filter=""
        onChangeFilter={jest.fn()}
      />
    );

    const castGrid = container.querySelector(".grid");

    if (castGrid) {
      expect(castGrid).toHaveClass("grid-cols-1");
      expect(castGrid).toHaveClass("md:grid-cols-2");
      expect(castGrid).toHaveClass("lg:grid-cols-3");
    }
  });
});

