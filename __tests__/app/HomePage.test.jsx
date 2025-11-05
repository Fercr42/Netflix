import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("@/components", () => ({
  NetflixLandingComponent: () => (
    <div data-testid="netflix-landing">
      <h1>Netflix Landing</h1>
      <div data-testid="popular-movies">
        <h2>Popular Movies</h2>
        <div>Movie 1</div>
        <div>Movie 2</div>
      </div>
      <div data-testid="popular-series">
        <h2>Popular Series</h2>
        <div>Series 1</div>
        <div>Series 2</div>
      </div>
    </div>
  ),
  MovieSwiperComponent: () => <div>Movie Swiper</div>,
  SeriesSwiperComponent: () => <div>Series Swiper</div>,
  MovieHeaderInfoComponent: () => <div>Movie Header</div>,
  MovieBodyInfoComponent: () => <div>Movie Body</div>,
  MovieOverViewComponent: () => <div>Movie Overview</div>,
  SeriesHeaderInfoComponent: () => <div>Series Header</div>,
  SeriesBodyInfoComponent: () => <div>Series Body</div>,
  SeriesOverViewComponent: () => <div>Series Overview</div>,
}));

describe("Home Page Load Test", () => {
  test("should load the home page without errors", () => {
    render(<Home />);

    const landing = screen.getByTestId("netflix-landing");
    expect(landing).toBeInTheDocument();
  });

  test("should display the Netflix Landing title", () => {
    render(<Home />);

    expect(screen.getByText("Netflix Landing")).toBeInTheDocument();
  });

  test("should have a container for popular movies", () => {
    render(<Home />);

    const popularMovies = screen.getByTestId("popular-movies");
    expect(popularMovies).toBeInTheDocument();
    expect(popularMovies).toHaveTextContent("Popular Movies");
  });

  test("should have a container for popular series", () => {
    render(<Home />);

    const popularSeries = screen.getByTestId("popular-series");
    expect(popularSeries).toBeInTheDocument();
    expect(popularSeries).toHaveTextContent("Popular Series");
  });

  test("should display example movie content", () => {
    render(<Home />);

    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });

  test("should display example series content", () => {
    render(<Home />);

    expect(screen.getByText("Series 1")).toBeInTheDocument();
    expect(screen.getByText("Series 2")).toBeInTheDocument();
  });
});
