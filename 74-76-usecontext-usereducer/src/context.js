import { createContext } from "react";

export const ShopContext = createContext();

export const ContextProvider = ({ clildren }) => {
  const value = {
    example: "hello from context",
  };

  return <ShopContext.Provider value={value}>{clildren}</ShopContext.Provider>;
};
