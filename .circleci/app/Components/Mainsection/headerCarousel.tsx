import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import womenSliderImage from '@/public/images/carousel/women-slider-image.jpg';
import menSliderImage from '@/public/images/carousel/men-slider-image.jpg';
import electronicSliderImage from '@/public/images/carousel/electronics-slider-image.jpeg';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Button } from '@mantine/core';
import { useSmallDeviceSize } from '@/shared/hooks/smallScreen';
import Link from 'next/link';

export const HeaderCarousel = () => {
  const device = useSmallDeviceSize();
  return (
    <Swiper
      className="large-carousel"
      effect="fade"
      loop
      modules={[Autoplay, EffectFade]}
      autoplay={{
        delay: 5000,
      }}
    >
      <SwiperSlide
        style={{
          position: 'relative',
          background: '#ece4dd',
        }}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="relative flex items-center justify-center w-[100%] h-[100%]">
            <div
              className={`${
                device ? 'absolute z-[1] p-5' : 'relative'
              } flex flex-col items-end justify-center w-full h-full header-carousel-wrapper`}
            >
              <div
                className={`mr-[60px] flex flex-col justify-end ${
                  device ? 'items-start' : 'items-end'
                }`}
              >
                <h1
                  className={`${
                    device ? 'text-[40px]' : 'text-[50px]'
                  } text-white capitalize`}
                >
                  Explore Men&apos;s Fashion
                </h1>
                <Button
                  mt={device ? 5 : 0}
                  w={125}
                  h={40}
                  radius={2}
                  variant="white"
                  className="shop-now-btn"
                >
                  <Link href="/category/Men">Explore</Link>
                </Button>
              </div>
            </div>

            <div
              className={`relative ${device ? 'w-[100%]' : 'w-[55%]'}  h-full`}
            >
              <figure className="absolute w-full h-full">
                <Image alt="red" src={menSliderImage} fill />
              </figure>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{
          position: 'relative',
          background: '#ece4dd ',
        }}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="relative flex items-center justify-center w-[100%] h-[100%]">
            <div
              className={`relative ${
                device ? 'w-[90%] h-[60%]' : 'w-[90%] h-full'
              }`}
            >
              <figure className="absolute w-full h-full">
                <Image alt="red" src={womenSliderImage} fill />
              </figure>
            </div>

            <div
              className={`${
                device ? 'absolute' : 'relative'
              } flex flex-col items-start justify-center w-full h-full header-carousel-wrapper`}
            >
              <div className={`${device ? 'p-5' : 'ml-[60px]'}`}>
                <h1
                  className={`${
                    device ? 'text-[40px]' : 'text-[50px]'
                  } text-white capitalize`}
                >
                  Fresh new start
                </h1>
                <Button
                  variant="white"
                  radius={2}
                  w={125}
                  h={40}
                  className="shop-now-btn mr-1"
                >
                  <Link href="/category/Women">Start</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide style={{ position: 'relative', background: 'black' }}>
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="relative flex items-center justify-center w-[98%] h-[95%]">
            <div
              className={`${
                device ? '' : ''
              } relative w-full h-full flex flex-col justify-center items-end z-[1] p-4`}
            >
              <div
                className={`flex flex-col ${device ? 'items-start' : 'items-center'} w-[100%]`}
              >
                <div className="transparent-gradient">
                  <h1
                    className={`text-gradient-transparent ${
                      device ? 'text-[40px]' : 'text-[50px]'
                    } capitalize text-white`}
                  >
                    Discover the Latest Gadgets.
                  </h1>
                </div>
                <Button
                  variant="transparent"
                  className="large-carousel-btn mr-1 !w-fit"
                >
                  <Link href="/category/Electronics" className="text-white">
                    Discover
                  </Link>
                </Button>
              </div>
            </div>
            <figure
              className={`absolute ${
                device ? 'w-full h-[50%]' : 'right-0 top-0 w-[60%] h-[90%]'
              }`}
            >
              <Image alt="red" src={electronicSliderImage} fill />
            </figure>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
