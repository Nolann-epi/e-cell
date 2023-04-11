/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

interface RatingItemProps {
  name?: string;
  rating?: number;
  comment?: string;
}

const RatingItem = () => {
  return (
    <div className=" flex flex-col p-4 border-primal border-4 rounded-xl w-full">
      <div className="flex flex-row gap-2 text-center w-full justify-around">
        <FaUserFriends className="text-4xl text-primal" />
        <span className="text-primal self-center text-lg">Thomas</span>
        <div className="flex flex-row h-10 gap-1 w-13 items-center text-center bg-primal px-1 rounded-lg">
          <span className="text-white">4.8</span>
          <AiFillStar className="text-white" />
        </div>
      </div>
      <div className="w-full justify-center flex mt-6">
        <p className="text-primal text-lg self-center text-center">
          "Best phone ever used, never had problems with it"
        </p>
      </div>
    </div>
  );
};

export default RatingItem;
