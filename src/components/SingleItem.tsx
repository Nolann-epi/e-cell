import React from "react";
import { FaSpinner } from "react-icons/fa";

interface ItemProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  type: string;
  brand: string;
}
interface SingleItemProps {
  item: ItemProps;
}
const SingleItem = ({ item }: SingleItemProps) => {
  const url = item?.imageUrl;
  if (item === undefined)
    return (
      <div className="flex md:h-[calc(70vh-78px)] h-[calc(100vh-78px)] w-full justify-center items-center">
        <FaSpinner className="animate-spin text-5xl text-primal" />
      </div>
    );
  return (
    <div className="md:h-[calc(70vh-78px)] h-[calc(100vh-78px)] w-full flex lg:flex-row-reverse flex-col-reverse justify-center items-center gap-8">
      <div className="flex flex-col lg:w-96 w-full lg:text-start gap-4 items-center lg:items-start text-center px-10 md:px-0">
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p className="text-base">{item.description}</p>
        <span className="text-xl font-medium">{item.price}$</span>
        <button className="bg-primal text-white px-4 py-2 rounded-xs font-bold w-fit ">
          Add to cart
        </button>
      </div>
      <div
        className=" w-[400px] lg:h-4/5 h-[60vh] bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `${url}` }}
      ></div>
    </div>
  );
};

export default SingleItem;
