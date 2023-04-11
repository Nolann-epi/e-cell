import React from "react";
import RatingItem from "./RatingItem";

const Rating = () => {
  return (
    <div className="w-full h-fit px-10 md:px-14 lg:px-16 pt-6">
      <h1 className="text-2xl font-semibold">RATINGS :</h1>
      <div className="w-[80px] h-2 bg-primal mt-1" />
      <div className="w-full  lg:h-44 h-[60vh]  mt-4 grid lg:grid-cols-3 grid-cols-none grid-rows-3 lg:grid-rows-none lg:px-16 gap-6">
        <RatingItem />
        <RatingItem />
        <RatingItem />
      </div>
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default Rating;
