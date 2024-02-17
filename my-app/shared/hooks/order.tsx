import { useState, useEffect } from 'react';
import { useSwrInstance } from '../swr/swrInit';
import { OrderResponse, ProductsResponse } from '../types/responseTypes';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const useOrders = (ids: { cartId?: string; customerId?: string }) => {
  const [data, setData] = useState<OrderResponse | null>();
  const { queries, requests } = useSwrInstance();
  const router = useRouter();
  const {
    data: orderGetData,
    error: orderErrors,
    isLoading: orderIsLoading,
    mutate,
  } = queries.useGetOrdersByCustomerId(ids.customerId);

  const updateOrder = async (cartId: string, customerId?: string) => {
    if (customerId) {
      const res = requests.useUpdateOrderByCartIdAndCustomerId(
        cartId,
        customerId
      );
      toast
        .promise(mutate(res), {
          loading: 'Placing order',
          success: 'Order placed',
          error: 'Problem when placing order',
        })
        .then((res) => {
          router.push('/orders');
        })
        .catch((err) => {
          return false;
        });
    }
  };
  useEffect(() => {
    const newOrderData = !orderIsLoading && !orderErrors && orderGetData;
    if (newOrderData) {
      setData(orderGetData);
    }
  }, [orderGetData, orderIsLoading, orderErrors]);

  return {
    orderData: data,
    orderErrors,
    orderIsLoading,
    updateOrder,
  };
};
