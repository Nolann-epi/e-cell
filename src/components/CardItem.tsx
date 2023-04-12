import React from "react";
import { AiFillStar } from "react-icons/ai";

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
interface CardItemProps {
  item: ItemProps;
  key: number;
}

const CardItem = ({ item, key }: CardItemProps) => {
  const url = item.imageUrl;
  return (
    <div
      key={key}
      className="w-96 h-96 flex flex-col  p-4 border-2 border-slate-300 shadow-md hover:scale-105 transition duration-300  ease-in-out"
    >
      <div
        className={`w-full h-2/3  bg-contain bg-center bg-no-repeat`}
        style={{ backgroundImage: `${url}` }}
      ></div>
      <div className="w-full h-1/3 flex-col flex gap-2 mt-4">
        <span className="text-2xl">{item.title}</span>
        <span className="text-2xl font-semibold ">{item.price}$</span>
        <div className="flex flex-row self-center  h-10 w-fit gap-1 w-13 items-center text-center bg-primal px-2 rounded-lg">
          <span className="text-white">{item.rating}</span>
          <AiFillStar className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
