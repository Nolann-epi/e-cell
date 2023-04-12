/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import SingleItem from "@/components/SingleItem";
import Rating from "@/components/Rating";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

const Item = ({ session }: any) => {
  return (
    <div className=" w-screen h-full flex flex-col">
      <Navbar session={session} />
      <SingleItem />
      <Rating />
    </div>
  );
};

export default Item;
