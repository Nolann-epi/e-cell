/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import SingleItem from "@/components/SingleItem";
import Rating from "@/components/Rating";

const Item = () => {
  return (
    <div className=" w-screen h-full flex flex-col">
      <Navbar />
      <SingleItem />
      <Rating />
    </div>
  );
};

export default Item;
