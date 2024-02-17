import { useEffect, useState } from 'react';
import { useSwrInstance } from '../swr/swrInit';
import { ProductsResponse } from '../types/responseTypes';

export const useSearch = (search: string) => {
  const { queries } = useSwrInstance();
  const [data, setData] = useState<ProductsResponse['data']| undefined>(undefined);
  
  const {
    data: productGetData,
    isLoading: productsIsLoading,
    error: productsError,
  } = queries.useGetProductsBySearch(search);

  useEffect(() => {
    if (!productsIsLoading) {
      if (productsError) {
        console.log(
          '🚀 ~ file: products.ts:75 ~ useEffect ~ productError:',
          productsError
        );
        return;
      } else if (productGetData) setData(productGetData.data);
    }
  }, [productsError, productGetData, productsIsLoading]);

  return {
    data,
    productsError,
    productsIsLoading,
  };
};