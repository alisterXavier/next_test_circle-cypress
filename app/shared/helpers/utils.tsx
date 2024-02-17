export const calculateDiscountedPrice = (price: number, discount: number) => {
  const final = (price - price * ((discount ?? 0) / 100)).toFixed(2);
  return final;
};
