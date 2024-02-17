import Image from 'next/image';
import image1 from '@/public/images/home/home3.jpeg';
import image4 from '@/public/images/home/home4.jpeg';
import image5 from '@/public/images/home/home5.jpg';
import image8 from '@/public/images/home/home8.jpg';
import image9 from '@/public/images/home/home9.jpg';
import womenSliderImage from '@/public/images/carousel/women-slider-image.jpg';
import Masonry from '@mui/lab/Masonry';
import { useSmallDeviceSize } from '@/shared/hooks/smallScreen';
import Link from 'next/link';

export const MasonryComp = () => {
  const device = useSmallDeviceSize();
  return (
    <div className="flex relative justify-center items-center h-full w-full bg-[var(--testColor)]">
      <div
        className={`${
          device
            ? 'absolute bottom-0 z-10 w-full items-start'
            : 'relative w-[40%] p-10 items-center'
        } flex flex-col justify-between`}
      >
        {device ? (
          <></>
        ) : (
          <>
            <div
              className={`
            w-[50%] flex justify-center items-center`}
            >
              <h1
                className={`text-white text-[100px] w-full leading-[100px] uppercase`}
              >
                {['keep', 'it', 'classy'].map((i, index) => (
                  <span key={index} className={'block'}>
                    {i}
                  </span>
                ))}
              </h1>
            </div>
            <div className="w-[50%]">
              <h1
                className={`text-white  ${
                  device ? 'text-[30px]' : 'text-[100px] w-[10%]'
                }  leading-[90px] uppercase`}
              >
                25% off
              </h1>
            </div>
          </>
        )}
        <div className="w-full text-right">
          <Link className="text-white uppercase hover:underline" href="/discount">
            Check Out now
          </Link>
        </div>
      </div>
      <div
        className={`${
          device ? 'w-full' : 'w-[60%]'
        } relative h-full overflow-hidden`}
      >
        <span className="upper-gradient"></span>
        <span className="lower-gradient"></span>
        <div className="w-full masonry justify-center items-center">
          <Masonry columns={2} spacing={1}>
            <figure className={`relative w-[50%]`}>
              <Image src={image1} alt="image" />
            </figure>
            <figure className={`relative w-[50%]`}>
              <Image src={womenSliderImage} alt="image" />
            </figure>
            <figure className={`relative w-[50%]`}>
              <Image src={image4} alt="image" />
            </figure>
            <figure className={`relative w-[50%]`}>
              <Image src={image5} alt="image" />
            </figure>
            <figure className={`relative w-[50%]`}>
              <Image src={image8} alt="image" />
            </figure>
            <figure className={`relative w-[50%]`}>
              <Image src={image9} alt="image" />
            </figure>
            <figure className={`relative w-[50%]`}>
              <Image src={womenSliderImage} alt="image" />
            </figure>
            <figure className={`relative w-[50%]`}>
              <Image src={image1} alt="image" />
            </figure>
            <figure className={`relative w-[50%]`}>
              <Image src={image5} alt="image" />
            </figure>
            <figure className={`relative w-[50%]`}>
              <Image src={image4} alt="image" />
            </figure>
          </Masonry>
        </div>
      </div>
    </div>
  );
};
