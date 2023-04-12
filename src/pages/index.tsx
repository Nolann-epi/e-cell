import AllProductContainer from "@/components/AllProductContainer";
import Caroussel from "@/components/Caroussel";
import ExclusiveContainer from "@/components/ExclusiveContainer";
import Navbar from "@/components/Navbar";
import useItems from "@/hooks/useItems";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

export default function Home({ session }: any) {
  const { data: items } = useItems();

  return (
    <>
      <Navbar session={session} />
      <div className=" w-screen h-full flex flex-col">
        <Caroussel items={items} />
        <div className="w-full h-fit px-10 md:px-14 lg:px-16 pt-6 flex flex-col">
          <ExclusiveContainer />
          <AllProductContainer />
        </div>
        <div className="h-20"></div>
      </div>
    </>
  );
}
