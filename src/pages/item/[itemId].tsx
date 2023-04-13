/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import SingleItem from "@/components/SingleItem";
import Rating from "@/components/Rating";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useItem from "@/hooks/useItem";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

const Item = ({ session }: any) => {
  const router = useRouter();
  const { itemId } = router.query;
  const { data } = useItem(itemId as string);
  return (
    <div className=" w-screen h-full flex flex-col">
      <Navbar session={session} />
      <SingleItem item={data} />
      <Rating />
    </div>
  );
};

export default Item;
