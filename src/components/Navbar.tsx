import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { BsPhoneFlip } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface NavbarProps {
  session: any;
}

const Navbar = ({ session }: NavbarProps) => {
  const router = useRouter();

  return (
    <nav className="w-full relative h-fit  z-50">
      <div
        className={` w-full  transition duration-[0.8s] ease-in-out flex flex-row items-center py-5 px-10 md:px-14 lg:px-16 border-b-2 border-transparent bg z-40`}
      >
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer flex flex-row items-center gap-2 w-fit "
        >
          <BsPhoneFlip className="text-2xl text-primal" />
          <h1 className="font-extrabold text-xl md:text-3xl  text-primal w-fit">
            E-CELL
          </h1>
        </div>
        <div className="lg:flex hidden flex-row items-center h-full gap-16 "></div>
        <div className="ml-auto flex flex-row gap-8 items-center">
          <ImHome
            onClick={() => router.push("/")}
            className="text-2xl hidden lg:flex text-primal hover:scale-125 cursor-pointer transition duration-300 ease-in-out"
          />
          <div className="group">
            <FaShoppingCart
              onClick={() => router.push("/cart")}
              className="text-2xl text-primal  group-hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            />
            <div className="absolute top-3 ml-6 cursor-pointer transition duration-300 ease-in-out bg-red-500 rounded-full text-xs px-1 text-white text-center flex justify-center items-center font-bold">
              0
            </div>
          </div>
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-1 rounded-md font-bold"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/auth")}
              className="bg-primal text-white px-4 py-1 rounded-md font-bold"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
