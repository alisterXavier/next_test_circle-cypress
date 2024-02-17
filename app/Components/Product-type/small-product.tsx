import React, { useContext } from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { components } from '@/shared/types/api';
import { calculateDiscountedPrice } from '@/shared/helpers/utils';

interface SmallProps {
  product: components['schemas']['Products'];
  id: string;
}

const Small = ({ product, id }: SmallProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/Product/${id}`);
  };
  return (
    <div
      className="small-product-container image-transition"
      onClick={() => {
        handleClick();
      }}
      data-cy="test-small-product-card"
    >
      <div
        className="border-transparent w-full h-full hover:border-black cursor-pointer"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <figure className="w-full h-[85%] relative">
          {product.productImages?.map((image, index) => {
            return (
              <Image
                key={index}
                className={` transition-all duration-200 ${
                  index === 1 && 'hover:opacity-0'
                }`}
                alt="asdsad"
                src={image}
                fill
                quality={100}
                style={{
                  objectFit: 'contain',
                }}
              />
            );
          })}
        </figure>
        <div className="h-[15%]">
          <p
            className="h-[50%]"
            style={{
              color: 'black',
              fontSize: 12,
            }}
          >
            {product.productName}
          </p>
          <div className="flex items-center h-[50%]">
            <p
              className="small-product-price"
              style={{
                color: 'black',
                fontSize: 24,
              }}
            >
              ${calculateDiscountedPrice(product.price, product.discount)}
            </p>
            {product.discount && product.discount > 0 ? (
              <div className="relative ml-2 flex flex-col justify-center items-center h-[15px]">
                <span className="w-[2px] h-[35px] absolute bg-[var(--testColor)] rotate-[110deg]" />
                <p className={`discount m-0`}>${product.price}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Small;
