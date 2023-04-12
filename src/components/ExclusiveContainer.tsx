import React from "react";
import CardItemLarge from "./CardItemLarge";
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
interface ExclusiveContainerProps {
  items: ItemProps[];
}

const ExclusiveContainer = ({ items }: ExclusiveContainerProps) => {
  const shuffledItems = items?.sort(() => Math.random() - 0.5);

  if (items === undefined)
    return (
      <div className="flex md:h-[calc(90vh-78px)] h-[calc(100vh-78px)] w-full justify-center items-center">
        <FaSpinner className="animate-spin text-5xl text-primal" />
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-semibold ">EXCLUSIVE :</h1>
      <div className="w-[80px] h-2 bg-primal mt-1" />
      <div className="w-full  lg:h-60 h-[60vh] md:mt-20 mt-32 flex lg:flex-row flex-col lg:justify-start justify-center md:items-center gap-16 lg:gap-32">
        <CardItemLarge item={shuffledItems[0]} />
        <CardItemLarge item={shuffledItems[1]} />
      </div>
    </div>
  );
};

export default ExclusiveContainer;
