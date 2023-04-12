import React, { useState } from "react";
import CardItem from "./CardItem";

interface ItemProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  type: string;
  brand: string;
}

interface AllProductContainerProps {
  items: ItemProps[];
}

const AllProductContainer = ({ items }: AllProductContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const elementsPerPage = 9;
  const pagesCount = Math.ceil(items?.length / elementsPerPage);

  const handleClick = (page: any) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(
        <div
          className={`w-8 h-8 ${
            currentPage === i ? "bg-primal text-white" : "bg-white"
          } flex justify-center items-center cursor-pointer mt-3`}
          key={i}
          onClick={() => handleClick(i)}
        >
          {i}
        </div>
      );
    }
    return <div className="flex justify-center mt-4">{pages}</div>;
  };

  const renderCards = () => {
    if (!items) {
      return <div className="text-2xl font-semibold">No items found</div>;
    }
    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    const shuffledItems = items?.sort(() => Math.random() - 0.5);

    return shuffledItems
      .slice(startIndex, endIndex)
      .map((item, index) => <CardItem item={item} key={index} />);
  };

  return (
    <>
      <h1 className="text-2xl font-semibold lg:mt-16 mt-32 md:mt-20">
        ALL PRODUCTS :
      </h1>

      <div className="w-[80px] h-2 bg-primal mt-1" />
      <div className="w-full h-fit mt-16">
        <div className="flex flex-wrap justify-center lg:gap-32 md:gap-28 gap-16">
          {renderCards()}
        </div>
        {renderPagination()}
      </div>
    </>
  );
};

export default AllProductContainer;
