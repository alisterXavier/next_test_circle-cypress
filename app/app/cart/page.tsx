'use client';
import React from 'react';
import { useCustomerCart } from '@/shared/hooks/cart';
import { selectAuthState } from '@/shared/redux/authSlice';
import { useSelector } from 'react-redux';
import { Cart } from './components/children';

export default function CartComponent() {
  const user = useSelector(selectAuthState);
  const { cart, isLoading, error, updateCart } = useCustomerCart(
    user?.data.user?.id ?? undefined
  );

  return (
    <Cart
      user={user}
      cart={cart}
      updateCart={updateCart}
      isLoading={isLoading}
    />
  );
}

// export default CartComponent;
