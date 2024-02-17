import { paths } from './api';

export interface ProductsResponse {
  data: NonNullable<
    paths['/products']['get']['responses']['200']['content']['application/json']
  >;
}

export interface SingleProductResponse {
  data: NonNullable<
    paths['/product/{id}']['get']['responses']['200']['content']['application/json']
  >;
}

export interface CustomerResponse {
  data: NonNullable<
    paths['/customer/{id}']['get']['responses']['200']['content']['application/json']
  >;
}

export interface CartResponse {
  data: NonNullable<
    paths['/get-cart/{id}']['get']['responses']['200']['content']['application/json']
  >;
}

export interface OrderResponse {
  data: NonNullable<
    paths['/get-orders/{id}']['get']['responses']['200']['content']['application/json']
  >;
}

