import { createContext } from "react";

type IContext = {
    selectedId: number | string | null;
    setSelectedId: (
      value:
        | string
        | number
        | null
        | ((preVar: number | string | null) => number | string)
    ) => void;
  };
  
export const selectedProduct = createContext<IContext>({} as IContext);