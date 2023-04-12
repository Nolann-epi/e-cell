import React from "react";

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
interface CardItemLargeProps {
  item: ItemProps;
}

const CardItemLarge = ({ item }: CardItemLargeProps) => {
  const url = item.imageUrl;

  return (
    <div className="h-80 md:w-3/4 flex flex-row p-6 border-2 border-slate-300 shadow-md ">
      <div className="h-full w-1/2 flex flex-col gap-4 justify-center">
        <span className="text-2xl">{item.title}</span>
        <span className="text-2xl font-semibold">{item.price + " $"}</span>
        <p>{item.description.substring(0, 100) + "..."}</p>
        <button className="bg-primal text-white px-4 py-2 rounded-xs font-bold w-fit ">
          BUY NOW
        </button>
      </div>
      <div
        className={`h-full w-1/2 bg-contain bg-center bg-no-repeat`}
        style={{ backgroundImage: `${url}` }}
      ></div>
    </div>
  );
};

export default CardItemLarge;
