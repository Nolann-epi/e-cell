import React, { useEffect } from "react";
import CartMenuItem from "./CartMenuItem";
import { useCart } from "@/context/CartContext";
import useFavorites from "@/hooks/useFavorites";

const CartMenu = () => {
  const { data: favorites, isLoading, mutate } = useFavorites();
  const { itemList } = useCart();

  useEffect(() => {
    if (itemList.length !== favorites?.length) {
    }
    console.log(favorites?.length);
  }, [favorites, itemList.length, mutate]);

  return (
    <div className=" w-full mb-2 h-fit min-h-[110px] px-6 py-3 border shadow-xl max-w-[850px] min-w-[350px]">
      <h1 className="text-black text-2xl w-[110px] text-center font-semibold">
        MY CART
      </h1>
      <div className="w-[80px] h-2 bg-primal mt-1" />
      {itemList.map((item: any, key: number) => (
        <CartMenuItem key={key} itemID={item} />
      ))}
    </div>
  );
};

export default CartMenu;
