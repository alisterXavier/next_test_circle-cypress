import { useState, useEffect } from "react";
import { useSwrInstance } from "../swr/swrInit";
import { CustomerResponse } from "../types/responseTypes";

export const useGetUser = (id: string | undefined) => {
    const [data, setData] = useState<CustomerResponse>();
    const { queries } = useSwrInstance();
  
    const {
      data: customerGetData,
      error: customerError,
      isLoading: customerIsLoading,
    } = queries.useGetCustomerByCustomerId(id ?? null);
  
    useEffect(() => {
      if (!customerIsLoading) {
        if (customerError || !customerGetData) return;
        else setData(customerGetData);
      }
    }, [customerError, customerGetData, customerIsLoading]);
  
    return {
      data,
      customerError,
      customerIsLoading,
    };
  };