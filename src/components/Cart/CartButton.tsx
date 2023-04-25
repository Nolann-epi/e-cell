import { useCart } from "@/context/CartContext";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";

interface CartButtonProps {
  itemID: string;
}

const CartButton = ({ itemID }: CartButtonProps) => {
  const cart = useCart();
  const { data, isLoading } = useCurrentUser();

  const toggleFavorites = useCallback(async () => {
    let response;
    if (cart.isFavorite(itemID)) {
      cart.setItemList(cart.itemList.filter((id: string) => id !== itemID));
      cart.setItemNumber(cart.itemNumber - 1);
      response = await axios.post("/api/favorite", { itemID });
    } else {
      cart.setItemList([...cart.itemList, itemID]);
      cart.setItemNumber(cart.itemNumber + 1);
      response = await axios.put("/api/favorite", { itemID });
    }
  }, [cart, itemID]);

  if (data && !isLoading) {
    return (
      <button
        onClick={toggleFavorites}
        className={` text-white px-4 py-2 rounded-xs font-bold w-fit ${
          cart.isFavorite(itemID) ? "bg-red-500" : "bg-primal"
        }`}
      >
        {cart.isFavorite(itemID) ? "Remove from cart" : "Add to cart"}
      </button>
    );
  } else {
    return (
      <button
        className="bg-primal text-white px-4 py-2 rounded-xs font-bold w-fit "
        onClick={() => cart.setItemNumber(cart.itemNumber + 1)}
      >
        Add to cart
      </button>
    );
  }
};

export default CartButton;
