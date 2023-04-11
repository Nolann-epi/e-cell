import AllProductContainer from "@/components/AllProductContainer";
import CardItemLarge from "@/components/CardItemLarge";
import Caroussel from "@/components/Caroussel";
import ExclusiveContainer from "@/components/ExclusiveContainer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className=" w-screen h-full flex flex-col">
        <Navbar />
        <Caroussel />
        <div className="w-full h-fit px-10 md:px-14 lg:px-16 pt-6 flex flex-col">
          <ExclusiveContainer />
          <AllProductContainer />
        </div>
        <div className="h-20"></div>
      </div>
    </>
  );
}
