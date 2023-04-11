import React, { useState } from "react";
import CardItem from "./CardItem";

const AllProductContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = {
    elements: [
      "Element 1",
      "Element 2",
      "Element 3",
      "Element 4",
      "Element 5",
      "Element 6",
      "Element 7",
      "Element 8",
      "Element 9",
      "Element 10",
      "Element 11",
      "Element 12",
      "Element 13",
      "Element 14",
      "Element 15",
      "Element 16",
      "Element 17",
      "Element 18",
      "Element 19",
      "Element 20",
      "Element 21",
      "Element 22",
      "Element 23",
      "Element 24",
      "Element 25",
    ],
  };

  const elementsPerPage = 9;
  const pagesCount = Math.ceil(data.elements.length / elementsPerPage);

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
    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    return data.elements
      .slice(startIndex, endIndex)
      .map((element, key) => <CardItem element={element} key={key} />);
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
