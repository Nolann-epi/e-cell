import React from "react";

const CardItemLarge = () => {
  const url = `url('/images/apple/apple-iphone-12-pro-max.webp')`;

  return (
    <div className="h-80 md:w-3/4 flex flex-row p-6 border-2 border-slate-300 shadow-md ">
      <div className="h-full w-1/2 flex flex-col gap-4 justify-center">
        <span className="text-2xl">Samsung S10 Mini</span>
        <span className="text-2xl font-semibold">119$</span>
        <p>
          Incroybale télépgone trop cool qui est trop sympa avec tous les petits
          bouttons
        </p>
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
