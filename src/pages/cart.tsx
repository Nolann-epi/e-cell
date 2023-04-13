import CartMenu from "@/components/Cart/CartMenu";
import Navbar from "@/components/Navbar";
import PriceMenu from "@/components/Cart/PriceMenu";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useCallback, useState } from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

const Cart = ({ session }: any) => {
  return (
    <>
      <Navbar session={session} />
      <div className="h-fit w-screen bg-white lg:px-16 md:px-14 px-4 ">
        <div className="w-full h-fit lg:flex-row-reverse flex-col-reverse flex lg:justify-center lg:items-start lg:gap-16 min-w-[350px]">
          <div className="md:hidden h-10"></div>
          <PriceMenu />
          <CartMenu />
        </div>
      </div>
    </>
  );
};

export default Cart;
