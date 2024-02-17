export type CartUpdate = {
  id?: string;
  customerId?: string;
  products: {
    id: string;
    quantity: number;
  }[];
  total: number;
};
