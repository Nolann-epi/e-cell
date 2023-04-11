import React from "react";

const SingleItem = () => {
  return (
    <div className="md:h-[calc(70vh-78px)] h-[calc(100vh-78px)] w-full flex lg:flex-row-reverse flex-col-reverse justify-center items-center gap-8">
      <div className="flex flex-col lg:w-96 w-full lg:text-start gap-4 items-center lg:items-start text-center px-10 md:px-0">
        <h2 className="text-xl font-semibold">Samsung Galaxy S10</h2>
        <p className="text-base">
          Best Quality of Telephone bord in 2012. invented by a lot of people
        </p>
        <span className="text-xl font-medium">199$</span>
        <button className="bg-primal text-white px-4 py-2 rounded-xs font-bold w-fit ">
          Add to cart
        </button>
      </div>
      <div className="bg-red-500 w-[400px] lg:h-4/5 h-[60vh] bg-[url('/images/smartphone.jpg')] bg-fit bg-center"></div>
    </div>
  );
};

export default SingleItem;
