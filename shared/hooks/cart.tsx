'use client';
import { useSwrInstance } from '../swr/swrInit';
import { useEffect, useState } from 'react';
import { CartResponse } from '../types/responseTypes';
import { components } from '../types/api';
import { calculateDiscountedPrice } from '../helpers/utils';
import { arraysEqual } from '../helpers/debounce';
import { CartUpdate } from '../types/requestTypes';

const calculateTotalPrice = (
  price: number,
  discount: number,
  quantity: number
) => {
  const discounted = calculateDiscountedPrice(price, discount);
  return parseFloat(discounted) * quantity;
};

export const useCustomerCart = (id?: string) => {
  const { requests, queries } = useSwrInstance();
  const [cart, setCart] = useState<CartResponse>();
  const { data, isLoading, error, mutate } = queries.useGetCartByUserId(id);

  const common = async (
    updatedList: {
      id: string;
      quantity: number;
    }[],
    total: number
  ) => {
    const cartData: CartUpdate = {
      id: data?.data.id,
      customerId: id,
      products: updatedList,
      total: total,
    };
    const res = await requests.useUpdateCartByCartId(cartData);
    mutate(await res);
  };

  const addCartItem = async (
    product: components['schemas']['Products'],
    quantity: number
  ) => {
    const updatedList = data?.data?.products
      ? [
          ...data?.data.products.map((i) => {
            return { id: i.id, quantity: i.quantity };
          }),
          { id: product.id, quantity: quantity },
        ]
      : [{ id: product.id, quantity: 1 }];

    const total =
      (data?.data.total ?? 0) +
      calculateTotalPrice(product.price, product.discount, quantity);
    common(updatedList, total);
  };

  const updateCartItem = async (
    product: components['schemas']['Products'],
    quantity: number
  ) => {
    const updatedList = data?.data.products.map((i) => {
      if (i.id === product.id) return { id: product.id, quantity: quantity };

      return { id: i.id, quantity: i.quantity };
    });

    const total =
      (data?.data.total ?? 0) -
      calculateTotalPrice(product.price, product.discount, quantity);

    common(updatedList ?? [], total);
  };

  const removeCartItem = async (
    product: components['schemas']['Products'],
    quantity: number
  ) => {
    const updatedList: { id: string; quantity: number }[] =
      cart?.data.products
        .filter((prod) => prod.id !== product.id)
        .map((i) => {
          return {
            id: i.id,
            quantity: i.quantity,
          };
        }) ?? [];

    const total =
      cart && cart.data.products.length > 0
        ? (cart?.data.total ?? 0) -
          calculateTotalPrice(product.price, product.discount, quantity)
        : 0;

    common(updatedList, total);
  };

  const existingCartHasData = cart && cart.data;

  useEffect(() => {
    const shouldUpdateCart =
      !isLoading &&
      data &&
      (!existingCartHasData ||
        !arraysEqual(data.data.products, cart.data.products));

    if (shouldUpdateCart) {
      setCart(data);
    }
  }, [isLoading, data, cart, existingCartHasData]);

  return {
    cart: cart?.data,
    isLoading,
    error,
    updateCart: {
      addCartItem,
      removeCartItem,
      updateCartItem,
    },
  };
};
