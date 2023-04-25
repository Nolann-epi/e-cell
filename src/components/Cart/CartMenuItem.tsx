import { useCart } from "@/context/CartContext";
import useCurrentUser from "@/hooks/useCurrentUser";
import useItem from "@/hooks/useItem";
import axios from "axios";
import React, { useCallback } from "react";

interface CartMenuItemProps {
  key: number;
  item?: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    rating: number;
    type: string;
    brand: string;
  };
  itemID: string;
}

const CartMenuItem = ({ item, itemID }: CartMenuItemProps) => {
  const { data: unlog } = useItem(itemID);
  const cart = useCart();
  const { data: login } = useCurrentUser();

  const removeItem = useCallback(
    async (itemID: string) => {
      cart.setItemList(cart.itemList.filter((id: string) => id !== itemID));
      cart.setItemNumber(cart.itemNumber - 1);
      if (login) await axios.post("/api/favorite", { itemID });
    },
    [cart, login]
  );
  if (login && item) {
    const url = `${item.imageUrl}`;
    return (
      <>
        <div className="w-full flex flex-row text-lg mt-6 h-72 justify-around items-center">
          <div
            style={{ backgroundImage: `${url}` }}
            className={`h-60 w-60 bg-center bg-no-repeat bg-contain`}
          ></div>
          <div className="h-fit w-60 rounded-lg flex flex-col justify-start items-start gap-4 p-4">
            <span className="font-medium text-xl">{item.title}</span>
            <span className=" text-xl">{item.price} $</span>
            <button
              onClick={() => removeItem(item.id)}
              className=" bg-red-500 text-white px-2 py-1 rounded-md text-sm border-white border-2"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="w-full h-1 bg-primal mt-6" />
      </>
    );
  } else {
    if (!unlog) return <div></div>;
    const url = unlog.imageUrl;
    return (
      <>
        <div className="w-full flex flex-row text-lg mt-6 h-72 justify-around items-center">
          <div
            style={{ backgroundImage: `${url}` }}
            className={`h-60 w-60 bg-center bg-no-repeat bg-contain`}
          ></div>
          <div className="h-fit w-60 rounded-lg flex flex-col justify-start items-start gap-4 p-4">
            <span className="font-medium text-xl">{unlog.title}</span>
            <span className=" text-xl">{unlog.price} $</span>
            <button
              onClick={() => removeItem(itemID)}
              className=" bg-red-500 text-white px-2 py-1 rounded-md text-sm border-white border-2"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="w-full h-1 bg-primal mt-6" />
      </>
    );
  }
};

export default CartMenuItem;
