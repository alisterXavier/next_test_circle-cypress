import { useEffect, useState } from 'react';
import {
  ProductsResponse,
  SingleProductResponse,
} from '../types/responseTypes';
import { useSwrInstance } from '../swr/swrInit';

type useProductsProps = {
  category: string;
  filterOptions?: {
    type: string[];
    price: string;
  };
};
export const useProducts = (parameters: useProductsProps) => {
  const [data, setData] = useState<ProductsResponse | null>();
  const { queries } = useSwrInstance();

  const {
    data: productsGetData,
    error: productsError,
    isLoading: productsIsLoading,
  } = queries.useGetProducts(parameters);

  useEffect(() => {
    if (!productsIsLoading) {
      if (productsError || !productsGetData)
        console.log(
          '🚀 ~ file: products.ts:36 ~ useEffect ~ productsError:',
          productsError
        );
      else if (productsGetData.data.length === 0) setData(null);
      else setData(productsGetData);
    }
  }, [productsGetData, productsIsLoading, productsError]);

  return {
    data,
    productsError,
    productsIsLoading,
  };
};

export const useProduct = (id: string) => {
  const { queries } = useSwrInstance();
  const [data, setData] = useState<SingleProductResponse['data']>(
    {} as SingleProductResponse['data']
  );
  const {
    data: productGetData,
    isLoading: productIsLoading,
    error: productError,
  } = queries.useGetProductByProductId(id);

  useEffect(() => {
    if (!productIsLoading) {
      if (productError) {
        console.log(
          '🚀 ~ file: products.ts:75 ~ useEffect ~ productError:',
          productError
        );
        return;
      } else if (productGetData) setData(productGetData.data);
    }
  }, [productError, productGetData, productIsLoading]);

  return {
    data,
    productError,
    productIsLoading,
  };
};