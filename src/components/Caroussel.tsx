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
    clickHandler: React.MouseEventHandler<HTMLDivElement> | undefined
  ) => (
    <div
      className={`absolute top-0 bottom-0 ${direction}-0 flex justify-center items-center p-8 md:p-12 lg:p-16 opacity-30 hover:opacity-100 cursor-pointer z-20`}
      onClick={clickHandler}
    >
      <FaArrowCircleLeft
        className={`lg:w-12 lg:h-12 w-8 h-8 text-primal transform ${
          direction === "left" ? "" : "rotate-180"
        }`}
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
      className="h-[calc(100vh-78px)] w-full"
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
