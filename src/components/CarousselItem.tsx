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
interface CarousselItemProps {
  item: ItemProps;
}

const CarousselItem = ({ item }: CarousselItemProps) => {
  const url = item.imageUrl;
  return (
    <div className="md:h-[calc(90vh-78px)] h-[calc(100vh-78px)] w-full flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
      <div className="flex flex-col lg:w-96 w-full text-start gap-4">
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p className="text-base">
          {item.description.substring(0, 100) + "..."}
        </p>
        <span className="text-xl font-medium">{item.price + " $"}</span>
        <button className="bg-primal text-white px-4 py-2 rounded-xs font-bold w-fit ">
          BUY NOW
        </button>
      </div>
      <div
        style={{ backgroundImage: `${url}` }}
        className={` w-[400px]  lg:h-3/5 h-[60vh] bg-contain bg-center bg-no-repeat`}
      ></div>
    </div>
  );
};

export default CarousselItem;
