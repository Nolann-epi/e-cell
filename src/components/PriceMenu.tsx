import React from "react";

const PriceMenu = () => {
  return (
    <div className="  w-[350x] h-fit flex flex-col px-6 py-3 mt-6 lg:mt-0 border shadow-xl min-w-[350px]">
      <div>
        <h1 className="text-black text-2xl font-semibold">PRICE DETAILS</h1>
        <div className="w-[80px] h-2 bg-primal mt-1"></div>
      </div>
      <div className="w-full flex flex-row text-lg mt-6">
        <div className="w-3/5 b h-fit flex flex-col gap-3 py-2 pb-6 border-b-2 border-primal">
          <span className="text-black"> Price</span>
          <span className="text-black"> Discount</span>
          <span className="text-black"> Delivery Charges</span>
        </div>
        <div className="w-2/5  h-fit flex flex-col text-lg py-2 pl-6  gap-3 pb-6  border-b-2 border-primal">
          <span className="text-black"> 0</span>
          <span className="text-black"> 10</span>
          <span className="text-green-500 "> Free</span>
        </div>
      </div>
      <div className="w-full flex flex-row text-xl font-medium mt-6">
        <div className="w-3/5 b h-fit flex flex-col">
          <span className="text-black"> Total</span>
        </div>
        <div className="w-2/5  h-fit flex flex-col pl-6 pb-3">
          <span className="text-black"> 0</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-2">
        <span className="text-green-500 w-full text-center text-sm">
          {" "}
          You saved 0$ on this order
        </span>
        <button className=" bg-primal text-white px-6 py-3 rounded-md font-bold border-white border-2 hover:bg-white hover:text-primal hover:scale-105 transform duration-500 ease-in-out">
          Place Order
        </button>
        <span className="text-red-500 font-medium w-full text-start text-base">
          {" "}
          Login to place order
        </span>
      </div>
    </div>
  );
};

export default PriceMenu;
