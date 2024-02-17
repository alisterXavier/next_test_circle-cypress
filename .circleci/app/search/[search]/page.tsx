'use client';
import Small from '@/app/Components/Product-type/small-product';
import { SkeletonContainer } from '@/app/Components/SkeletonComp';
import { useSearch } from '@/shared/hooks/search';

const Search = ({ params }: { params: { search: string } }) => {
  const { data, productsIsLoading, productsError } = useSearch(params.search);
  return (
    <div className="main-wrapper">
      <div className="flex flex-wrap justify-between relative pt-5">
        <div className="small-products-container">
          {productsError ? (
            <p>No products to display.</p>
          ) : productsIsLoading ? (
            <SkeletonContainer
              w={250}
              h={500}
              repeat={8}
              mr={5}
              ml={5}
              mb={5}
              mt={5}
              wrap={true}
            />
          ) : (
            data?.map((product, index) => (
              <Small id={product.id} key={index} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;