import { AxiosInstance } from 'axios';
import useSwr, { SWRConfiguration, SWRResponse } from 'swr';
import {
  CartResponse,
  CustomerResponse,
  OrderResponse,
  ProductsResponse,
  SingleProductResponse,
} from '../types/responseTypes';
import { CartUpdate } from '../types/requestTypes';

export type Queries = ReturnType<typeof MakeQueries>;
export type Response<Test extends keyof Queries> = Awaited<
  ReturnType<Queries[Test]>
>;

type productFilterOption = {
  type: string[];
  price: string;
};

export type Session = { session: { token: any; rtoken: any } };
function Queries(queries: Queries, session?: Session) {
  return {
    useGetProducts: (
      params: {
        category: string;
        filterOptions?: productFilterOption;
      },
      options?: SWRConfiguration
    ): SWRResponse<ProductsResponse> => {
      return useSwr(['useGetProducts' + params.category], () =>
        queries.useGetProducts(params)
      );
    },
    useGetCustomerByCustomerId: (
      id: string | null
    ): SWRResponse<CustomerResponse> => {
      return useSwr(
        ['useGetCustomerByCustomerId'],
        () =>
          session?.session && queries.useGetCustomerByCustomerId(id, session)
      );
    },
    useGetOrdersByCustomerId: (id?: string): SWRResponse<OrderResponse> => {
      return useSwr(
        session && id && ['getOrderByOrderId'],
        () =>
          session?.session &&
          id &&
          queries.useGetOrdersByCustomerId(id, session)
      );
    },
    useGetProductByProductId: (
      id: string
    ): SWRResponse<SingleProductResponse> =>
      useSwr(['useGetProductByProductId' + id], () =>
        queries.useGetProductByProductId(id)
      ),
    useGetCartByUserId: (id?: string): SWRResponse<CartResponse> => {
      return useSwr(
        session && id && ['useGetCartByUserId'],
        () => session && id && queries.useGetCartByUserId(id, session)
      );
    },
    useGetProductsBySearch: (
      search?: string
    ): SWRResponse<ProductsResponse> => {
      return useSwr(
        search && [`useGetProductsBySearch${search}`],
        () => search && queries.useGetProductsBySearch(search)
      );
    },
  };
}

function MakeQueries(axios: AxiosInstance) {
  return {
    useGetProducts: (params: {
      category: string;
      filterOptions?: productFilterOption;
    }) =>
      axios
        .request({
          method: 'get',
          url: `${
            process.env.NEXT_PUBLIC_SERVER_URL
          }/products/${params.category.toLowerCase()}`,
          params: {
            ...(params.filterOptions !== undefined && {
              ...Object.entries(params.filterOptions).reduce(
                (acc, [key, value]) =>
                  value !== undefined ? { ...acc, [key]: value } : acc,
                {}
              ),
            }),
          },
        })
        .then((res) => res.data),
    useGetProductByProductId: (id: string) =>
      axios
        .request({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/product/${id}`,
        })
        .then((res) => res.data),
    useGetCustomerByCustomerId: (id: string | null, session: Session) =>
      axios
        .request({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/customer/${id}`,
          headers: {
            token: session?.session.token,
            rtoken: session?.session.rtoken,
          },
        })
        .then((res) => res.data),
    // useUpdateCustomerByCustomerId: (id: string, data: CustomerResponse) =>
    //   axios.request({
    //     method: 'patch',
    //     url: `${process.env.NEXT_PUBLIC_SERVER_URL}/customer/${id}`,
    //     data: data,
    //   }),
    // useUpdateCartByCartId: (data: CartResponse['data']) =>
    //   axios
    //     .request({
    //       method: 'patch',
    //       url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cart`,
    //       data: data,
    //     })
    //     .then((res) => res.data),
    useGetCartByUserId: (id: string, session: Session) =>
      axios
        .request({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cart/${id}`,
          headers: {
            token: session?.session.token,
            rtoken: session?.session.rtoken,
          },
        })
        .then((res) => res.data),
    useGetOrdersByCustomerId: (id: string, session: Session) =>
      axios
        .request({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/orders/${id}`,
          headers: {
            token: session?.session.token,
            rtoken: session?.session.rtoken,
          },
        })
        .then((res) => res.data),
    useGetProductsBySearch: (search: string) =>
      axios
        .request({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/search/${search}`,
        })
        .then((res) => res.data),
  };
}

function MakeRequests(axios: AxiosInstance, session?: Session) {
  return {
    useUpdateCustomerByCustomerId: (id: string, data: CustomerResponse) =>
      axios.request({
        method: 'patch',
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/customer/${id}`,
        data: data,
        headers: {
          token: session?.session.token,
          rtoken: session?.session.rtoken,
        },
      }),
    useUpdateCartByCartId: (data: CartUpdate) =>
      axios
        .request({
          method: 'patch',
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cart`,
          data: data,
          headers: {
            token: session?.session.token,
            rtoken: session?.session.rtoken,
          },
        })
        .then((res) => res.data),
    useUpdateOrderByCartIdAndCustomerId: (cartId: string, customerId: string) =>
      axios
        .request({
          method: 'post',
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/order/${customerId}/${cartId}`,
          headers: {
            token: session?.session.token,
            rtoken: session?.session.rtoken,
          },
        })
        .then((res) => res.data),
  };
}

export function Initilize(axios: AxiosInstance, session?: Session) {
  const queriesInit = MakeQueries(axios);
  const requestInit = MakeRequests(axios, session);
  return {
    queries: Queries(queriesInit, session),
    requests: requestInit,
  };
}
