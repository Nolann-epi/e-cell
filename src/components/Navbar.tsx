import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ImHome } from "react-icons/im";

const Navbar = () => {
  return (
    <nav className="w-full relative h-fit  z-50">
      <div
        className={` w-full  transition duration-[0.8s] ease-in-out flex flex-row items-center py-5 px-10 md:px-14 lg:px-16 border-b-2 border-transparent bg z-40`}
      >
        <h1 className="font-extrabold text-xl md:text-3xl pr-16  text-black">
          E-CELL
        </h1>
        <div className="lg:flex hidden flex-row items-center h-full gap-16 "></div>
        <div className="ml-auto flex flex-row gap-8 items-center">
          <ImHome className="text-2xl hidden lg:flex text-primal" />
          <div className="">
            <FaShoppingCart className="text-2xl text-primal" />
            <div className="absolute top-3 ml-6 bg-red-500 rounded-full text-xs px-1 text-white text-center flex justify-center items-center font-bold">
              0
            </div>
          </div>
          <button className="bg-primal text-white px-4 py-1 rounded-md font-bold">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
