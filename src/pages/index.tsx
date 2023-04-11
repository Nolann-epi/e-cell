import Caroussel from "@/components/Caroussel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className=" w-screen h-full flex flex-col">
        <Navbar />
        <Caroussel />
        <div className="w-full h-fit px-10 md:px-14 lg:px-16 pt-6">
          <h1 className="text-2xl font-semibold">NEW PRODUCTS :</h1>
          <div className="w-[80px] h-2 bg-primal mt-1" />
        </div>
      </div>
    </>
  );
}
