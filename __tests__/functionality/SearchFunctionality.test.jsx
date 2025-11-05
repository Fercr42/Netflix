import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MovieOverViewComponent } from "@/components/movies/movieOverView.component";
import { SeriesOverViewComponent } from "@/components/series/seriesOverview.component";

const mockMovie = {
  id: 1,
  title: "The Matrix",
  overview: "A computer hacker learns about the true nature of reality",
  backdrop_path: "/matrix.jpg",
};

const mockMovieDetails = {
  release_date: "1999-01-01",
  runtime: 136,
  vote_average: 8.7,
  genres: [{ id: 1, name: "Action" }],
  credits: { cast: [] },
};

const mockSeries = {
  id: 101,
  name: "The Office",
  overview: "A mockumentary about office workers",
  backdrop_path: "/office.jpg",
};

const mockSeriesDetails = {
  first_air_date: "2005-01-01",
  vote_average: 9.0,
  genres: [{ id: 1, name: "Comedy" }],
  credits: { cast: [] },
};

describe("Search Functionality Test", () => {
  test("should be able to write in the search field of movies", () => {
    const mockOnChangeFilter = jest.fn();

    render(
      <MovieOverViewComponent
        selectedMovie={mockMovie}
        movieDetails={mockMovieDetails}
        filter=""
        onChangeFilter={mockOnChangeFilter}
      />
    );

    const searchInput = screen.getByPlaceholderText(
      /Search for a movie or series/i
    );

    fireEvent.change(searchInput, { target: { value: "matrix" } });

    expect(mockOnChangeFilter).toHaveBeenCalled();
  });

  test("should be able to write in the search field of series", () => {
    const mockOnChangeFilter = jest.fn();

    render(
      <SeriesOverViewComponent
        selectedSeries={mockSeries}
        seriesDetails={mockSeriesDetails}
        filter=""
        onChangeFilter={mockOnChangeFilter}
      />
    );

    const searchInput = screen.getByPlaceholderText(
      /Search for a movie or series/i
    );

    fireEvent.change(searchInput, { target: { value: "office" } });

    expect(mockOnChangeFilter).toHaveBeenCalled();
  });

  test("should display the clear button when there is text in the filter", () => {
    const mockOnChangeFilter = jest.fn();

    const { container } = render(
      <MovieOverViewComponent
        selectedMovie={mockMovie}
        movieDetails={mockMovieDetails}
        filter="test"
        onChangeFilter={mockOnChangeFilter}
      />
    );

    const closeButton = container.querySelector("svg");
    expect(closeButton).toBeInTheDocument();
  });

  test("should keep the filter value in the input", () => {
    const mockOnChangeFilter = jest.fn();

    render(
      <MovieOverViewComponent
        selectedMovie={mockMovie}
        movieDetails={mockMovieDetails}
        filter="search term"
        onChangeFilter={mockOnChangeFilter}
      />
    );

    const searchInput = screen.getByPlaceholderText(
      /Search for a movie or series/i
    );
    expect(searchInput).toHaveValue("search term");
  });
});
