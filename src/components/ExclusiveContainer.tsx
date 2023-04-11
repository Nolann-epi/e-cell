import React from "react";
import CardItemLarge from "./CardItemLarge";

const ExclusiveContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold ">EXCLUSIVE :</h1>
      <div className="w-[80px] h-2 bg-primal mt-1" />
      <div className="w-full  lg:h-60 h-[60vh] md:mt-20 mt-32 flex lg:flex-row flex-col lg:justify-start justify-center md:items-center gap-16 lg:gap-32">
        <CardItemLarge />
        <CardItemLarge />
      </div>
    </div>
  );
};

export default ExclusiveContainer;
