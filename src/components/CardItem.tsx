import React from "react";
import { AiFillStar } from "react-icons/ai";

interface CardItemProps {
  element?: string;
  key: number;
}
const CardItem: React.FC<CardItemProps> = ({ element, key }) => {
  const url = `url('/images/apple/iphone-14-plus-yellow-spring2023.webp')`;
  return (
    <div
      key={element}
      className="w-96 h-96 flex flex-col  p-4 border-2 border-slate-300 shadow-md hover:scale-105 transition duration-300  ease-in-out"
    >
      <div
        className={`w-full h-2/3  bg-contain bg-center bg-no-repeat`}
        style={{ backgroundImage: `${url}` }}
      ></div>
      <div className="w-full h-1/3 flex-col flex gap-2 mt-4">
        <span className="text-2xl">Samsung S10 Mini</span>

        <span className="text-2xl font-semibold ">119$</span>
        <div className="flex flex-row self-center  h-10 w-fit gap-1 w-13 items-center text-center bg-primal px-2 rounded-lg">
          <span className="text-white">4.8</span>
          <AiFillStar className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
