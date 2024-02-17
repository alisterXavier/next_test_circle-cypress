'use client';
import Small from '@/app/Components/Product-type/small-product';
import { useProducts } from '@/shared/hooks/products';
import { SkeletonContainer } from '@/app/Components/SkeletonComp';
import { IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';

const Category = ({ params }: { params: { category: string } }) => {
  const [filterByType, setFilterByType] = useState<string[]>([]);
  const [filterByPrice, setFilterByPrice] = useState<string>('');
  // const [filterByPriceRange, setFilterByPriceRange] = useState<number[]>([10, 2000]);

  const parameters = {
    category: params.category,
    filterOptions: {
      type: filterByType,
      price: filterByPrice,
      // priceMin: filterByPriceRange[0],
      // priceMax: filterByPriceRange[1],
    },
  };
  const { data, productsIsLoading, productsError } = useProducts({
    category: params.category,
    filterOptions: {
      type: filterByType,
      price: filterByPrice,
    },
  });

  return (
    <div className="main-wrapper">
      {params && (
        <div className="flex items-end h-[25px]" data-cy="test-category-title">
          <h2 className="m-0 h-[25px] text-[var(--testColor)]">
            <Link href="/">HOME</Link>
          </h2>
          <div className="h-[23px]">
            <IconChevronRight />
          </div>
          <h2 className="m-0 uppercase h-[25px] cursor-pointer">
            {params.category}
          </h2>
        </div>
      )}
      <div className="flex flex-wrap justify-between relative pt-5">
        <div className="small-products-container">
          {(!data && productsIsLoading) || productsError ? (
            <SkeletonContainer
              w={250}
              h={500}
              repeat={10}
              mr={5}
              ml={5}
              mb={5}
              mt={5}
              wrap={true}
            />
          ) : !data ? (
            <p>No products to display.</p>
          ) : (
            data.data.map((product, index) => (
              <Small id={product.id} key={index} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
