"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { MovieCard } from "./movieCard.component";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MovieSwiperComponent = ({ title, movies, className = "" }) => {
  if (!movies || !movies.results || movies.results.length === 0) {
    return null;
  }

  const validMovies = movies.results.filter((movie) => movie && movie.id);

  if (validMovies.length === 0) {
    return null;
  }

  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-white text-xl font-bold mb-4 px-4">{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={6}
        slidesPerView="auto"
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="px-4"
      >
        {validMovies.map((movie, index) => (
          <SwiperSlide
            key={`${title}-${movie.id}-${index}`}
            className="w-[300px]!"
          >
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
