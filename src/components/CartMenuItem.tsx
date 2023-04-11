import React from "react";

const CartMenuItem = () => {
  return (
    <>
      <div className="w-full flex flex-row text-lg mt-6 h-72 justify-around items-center">
        <div className="h-60 w-60 bg-blue-800"></div>
        <div className="h-fit w-60 rounded-lg flex flex-col justify-start items-start gap-4 p-4">
          <span className="font-medium text-xl">Samsung Galaxy S10</span>
          <span className=" text-xl">220$</span>
          <button className=" bg-red-500 text-white px-2 py-1 rounded-md text-sm border-white border-2">
            Remove
          </button>
        </div>
      </div>
      <div className="w-full h-1 bg-primal mt-6" />
    </>
  );
};

export default CartMenuItem;
