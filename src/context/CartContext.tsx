import useCurrentUser from "@/hooks/useCurrentUser";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ApiWrapperInterface {
  children: React.ReactNode;
}

const CartContext = createContext({});

export const CartContextWrapper = ({ children }: ApiWrapperInterface) => {
  const [itemNumber, setItemNumber] = useState(0);
  const [itemList, setItemList] = useState<string[]>([]);
  const { data } = useCurrentUser();

  useEffect(() => {
    if (data) {
      setItemNumber(data?.favoritesItems?.length || 0);
      setItemList(data?.favoritesItems || []);
    }
  }, [data]);

  const isFavorite = (itemID: string) => {
    return itemList?.includes(itemID);
  };

  return (
    <CartContext.Provider
      value={{
        setItemNumber,
        itemNumber,
        itemList,
        setItemList,
        isFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextWrapper;

export function useCart(): any {
  return useContext(CartContext);
}
