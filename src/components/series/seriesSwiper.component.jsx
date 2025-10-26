"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SeriesCard } from "@/components/series/seriesCard.component";

export const SeriesSwiperComponent = ({ title, series, className = "" }) => {
  if (!series || !series.results || series.results.length === 0) {
    return null;
  }

  const validSeries = series.results.filter((serie) => serie && serie.id);

  if (validSeries.length === 0) {
    return null;
  }

  return (
    <div className={`mb-2 ${className}`}>
      <h2 className="text-white text-xl font-bold mb-2 ">{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView="auto"
        navigation={window.innerWidth > 768 ? true : false}
        scrollbar={{ draggable: true }}
        className="px-2"
      >
        {validSeries.map((serie, index) => (
          <SwiperSlide
            key={`${title}-${serie.id}-${index}`}
            className="w-[160px]! sm:w-[260px]! "
          >
            <SeriesCard serie={serie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
