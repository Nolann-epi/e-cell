import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaArrowCircleLeft } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarousselItem from "./CarousselItem";

const Caroussel = () => {
  const indicatorStyle = {
    marginLeft: 20,
    color: "#15b7b9",
    cursor: "pointer",
    height: 12,
    width: 12,
    borderRadius: "50%",
    border: "1px solid #15b7b9",
    display: "inline-block",
  };

  const selectedIndicatorStyle = {
    ...indicatorStyle,
    color: "white",
    backgroundColor: "#15b7b9",
    border: "none",
  };

  const renderArrow = (
    direction: string,
    clickHandler: React.MouseEventHandler<HTMLDivElement> | any
  ) => (
    <div
      className={` hidden md:flex md:absolute md:bottom-0 md:top-0 ${direction}-0  flex justify-center items-center  z-20`}
    >
      <FaArrowCircleLeft
        className={`lg:w-12 lg:h-12 w-8 h-8 text-primal opacity-30  transform hover:opacity-100 cursor-pointer ${
          direction === "left" ? "" : "rotate-180"
        }`}
        onClick={clickHandler}
      />
    </div>
  );

  const renderIndicator = (
    onClickHandler: any,
    isSelected: boolean,
    index: number,
    label: string
  ) => {
    const style = isSelected ? selectedIndicatorStyle : indicatorStyle;
    return (
      <div
        style={style}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      className="md:h-[calc(90vh-78px)] h-[calc(100vh-78px)] w-full px-10 md:px-14 lg:px-16"
      renderArrowPrev={(clickHandler) => renderArrow("left", clickHandler)}
      renderArrowNext={(clickHandler) => renderArrow("right", clickHandler)}
      renderIndicator={renderIndicator}
    >
      <CarousselItem />
      <CarousselItem />
      <CarousselItem />
    </Carousel>
  );
};

export default Caroussel;
