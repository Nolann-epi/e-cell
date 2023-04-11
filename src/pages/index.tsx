import Caroussel from "@/components/Caroussel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className=" w-screen h-full overflow-y-hidden flex flex-col">
        <Navbar />
        <Caroussel />
        <div className="w-full h-fit">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}
