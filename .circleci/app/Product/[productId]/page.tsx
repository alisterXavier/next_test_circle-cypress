'use client';
import products from '@/public/productList.json';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { useProduct } from '@/shared/hooks/products';
import { SkeletonContainer } from '@/app/Components/SkeletonComp';
import { IconChevronRight } from '@tabler/icons-react';
import { useCustomerCart } from '@/shared/hooks/cart';
import { selectAuthState } from '@/shared/redux/authSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { calculateDiscountedPrice } from '@/shared/helpers/utils';
import { Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';
import Link from 'next/link';

const SingleProduct = ({ params }: { params: { productId: string } }) => {
  const user = useSelector(selectAuthState);
  const { data, productIsLoading, productError } = useProduct(params.productId);
  const { cart, updateCart } = useCustomerCart(user?.data.user?.id);
  const [selectedImage, setSelectedImage] = useState<
    string | null | StaticImport
  >(null);
  const [count, handler] = useCounter(0, { min: 1, max: 10 });
  const [isPresent, setIsPresent] = useState<boolean>(false);
  // const { data: products, productIsLoading, productError} = useProducts()
  const similarProducts = products.map((product, index) => (
    <SwiperSlide key={index}></SwiperSlide>
  ));

  const SimilarSkeletonContainer = () => (
    <SkeletonContainer w={260} h={400} mr={5} repeat={5} />
  );

  const modifyCartItems = () => {
    if (isPresent) {
      data.id && updateCart.updateCartItem(data, count);
    } else {
      data.id && updateCart.addCartItem(data, count);
    }
  };

  useEffect(() => {
    if (data && data.productImages) {
      setSelectedImage(data?.productImages?.[0]);
      const isPresent = cart?.products.find((i) => i.id === data.id);
      if (isPresent) {
        setIsPresent(true);
        handler.set(isPresent.quantity);
      }
    }
  }, [data, cart]);

  return (
    <main className="relative w-screen bg-white p-5">
      <div className="flex items-end h-[25px]">
        <h2 className="m-0 h-[25px] text-[var(--testColor)]">
          <Link href="/">HOME</Link>
        </h2>
        <div className="h-[23px]">
          <IconChevronRight />
        </div>
        <h2 className="m-0 uppercase h-[25px] text-[var(--testColor)]">
          <Link href={`/category/${data.category}`}>{data.category}</Link>
        </h2>
        <div className="h-[23px]">
          <IconChevronRight />
        </div>
        <h2 className="m-0 uppercase h-[25px] cursor-pointer text-[var(--testColor)]">
          {data.productName}
        </h2>
      </div>
      <div className="main-header flex flex-wrap justify-center items-center">
        <div className="w-[500px] h-[80%] border-solid border-gray-300 border-r mr-10 flex justify-center items-center">
          <div className="relative flex flex-col items-center justify-end w-[100%] h-[100%]">
            {productIsLoading || productError || !data ? (
              <>
                <SkeletonContainer w={270} h={220} repeat={1} mb={5} />
                <SkeletonContainer w={70} h={70} repeat={4} mr={5} />
              </>
            ) : (
              <>
                <div className="w-full h-[450px]">
                  {selectedImage && (
                    <figure className="relative w-[100%] h-full my-5">
                      <Image
                        alt=""
                        src={selectedImage}
                        fill
                        quality={100}
                        style={{
                          objectFit: 'contain',
                        }}
                        data-cy="test-product-image"
                      />
                    </figure>
                  )}
                </div>
                <div className="w-fit h-[100px] flex my-5">
                  {data.productImages?.map((item) => {
                    return (
                      <figure
                        key={item}
                        className={`relative w-[68px] h-full mt-5 m-1 cursor-pointer`}
                        onClick={() => {
                          setSelectedImage(item);
                        }}
                      >
                        <Image
                          className={`border-2 ${
                            selectedImage === item
                              ? 'border-[var(--testColor)]'
                              : 'border-transparent'
                          }`}
                          alt=""
                          src={item}
                          fill
                          quality={100}
                          style={{
                            objectFit: 'contain',
                          }}
                          data-cy="test-product-image"
                        />
                      </figure>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col w-[40%]">
          {productIsLoading || productError || !data ? (
            <>
              <SkeletonContainer w={500} h={50} repeat={1} mb={5} />
              <SkeletonContainer w={400} h={200} repeat={1} />
            </>
          ) : (
            <>
              <h1
                className="text-[30px] my-5 underline"
                data-cy="test-product-name"
              >
                {data.productName}
              </h1>
              <p className="" data-cy="test-product-description">
                {data.description}
              </p>
            </>
          )}
          <div className="my-10 h-[150px] flex justify-between items-center">
            {productIsLoading || productError || !data ? (
              <>
                <SkeletonContainer w={50} h={40} repeat={1} />
                <SkeletonContainer w={120} h={50} repeat={1} />
              </>
            ) : (
              <>
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <p
                      className="small-product-price"
                      style={{
                        color: 'black',
                        fontSize: 24,
                      }}
                      data-cy={'test-product-price'}
                    >
                      ${calculateDiscountedPrice(data.price, data.discount)}
                    </p>
                    {data.discount && data.discount > 0 ? (
                      <>
                        <div className="relative ml-2 flex flex-col justify-center items-center h-[15px]">
                          <span className="w-[2px] h-[35px] absolute bg-[var(--testColor)] rotate-[110deg]" />
                          <p className={`discount m-0`}>${data.price}</p>
                        </div>
                        <div>
                          <p className="ml-[5px] pl-[5px] border-l-2 border-black">
                            {data.discount}% OFF
                          </p>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="flex items-center justify-center my-1">
                    <div className="flex items-center justify-center w-fit border-[var(--testColor)] border rounded-sm">
                      <Button
                        p={0}
                        radius={3}
                        w={30}
                        h={30}
                        variant="light"
                        bg={'transparent'}
                        color="var(--testColor)"
                        onClick={handler.decrement}
                        data-cy={`test-cart-item-decrement-${data.id}`}
                      >
                        -
                      </Button>
                      <Text
                        m={0}
                        w={30}
                        h={30}
                        className="flex items-center justify-center"
                        data-cy={`test-cart-item-qty-${data.id}`}
                      >
                        {count}
                      </Text>
                      <Button
                        p={0}
                        radius={3}
                        w={30}
                        h={30}
                        variant="light"
                        bg={'transparent'}
                        color="var(--testColor)"
                        onClick={handler.increment}
                        data-cy={`test-cart-item-increment-${data.id}`}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <button
                  className="add-to-cart-button"
                  onClick={() => modifyCartItems()}
                  data-cy="test-add-product"
                >
                  <p>{isPresent ? 'Update cart' : 'Add to cart'}</p>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <div className="products-container">
        <div className="small-products-container">
          <h1 className="new-arrivals uppercase">Similar Items</h1>
          {productsisLoading ? (
            <div className="flex">
              <SimilarSkeletonContainer />
            </div>
          ) : (
            <CarouselComp>{similarProducts}</CarouselComp>
          )}
        </div>
      </div> */}
    </main>
  );
};

export default SingleProduct;
