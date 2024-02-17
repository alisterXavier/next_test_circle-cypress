'use client';
import * as React from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

type CarouselProps = {
  children: JSX.Element | JSX.Element[];
};

export const CarouselComp = ({ children }: CarouselProps) => {
  return (
    <div className="main-carousel">
      <MainCarousel>{children}</MainCarousel>
    </div>
  );
};

const MainCarousel = ({ children }: CarouselProps) => {
  return (
    <Swiper
      autoplay={{
        delay: 1800,
      }}
      loop
      modules={[Autoplay, Navigation]}
      breakpoints={{
        200: {
          width: 350,
          slidesPerView: 1,
          spaceBetween: 40,
        },
        800: {
          slidesPerView: 2,
          spaceBetween:10,
        },
        1024: {
          width: 1350,
          slidesPerView: 4.3,
          spaceBetween: 10,
        },
      }}
      className="mySwiper transition-all duration-75"
    >
      {children}
    </Swiper>
  );
};
