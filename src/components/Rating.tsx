import React, { useCallback, useEffect, useState } from "react";
import RatingItem from "./RatingItem";
import ratings from "../json/ratings.json";

const Rating = () => {
  interface RatingItemProps {
    name?: string;
    rating?: number;
    comment?: string;
  }

  const [randomNumbers, setRandomNumbers] = useState<number[]>([1, 2, 3]);

  const getRandomNumbers = useCallback(() => {
    const randomNumbers: number[] = [];
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * ratings.length);
      if (randomNumbers.includes(randomNumber)) {
        i--;
        continue;
      }
      randomNumbers.push(randomNumber);
    }
    setRandomNumbers(randomNumbers);
  }, []);

  useEffect(() => {
    getRandomNumbers();
  }, [getRandomNumbers]);

  return (
    <div className="w-full h-fit px-10 md:px-14 lg:px-16 pt-6">
      <h1 className="text-2xl font-semibold">LAST RATINGS :</h1>
      <div className="w-[80px] h-2 bg-primal mt-1" />
      <div className="w-full  lg:h-44 h-[60vh]  mt-4 grid lg:grid-cols-3 grid-cols-none grid-rows-3 lg:grid-rows-none lg:px-16 gap-6">
        <>
          <RatingItem item={ratings[randomNumbers[0]]} />
          <RatingItem item={ratings[randomNumbers[1]]} />
          <RatingItem item={ratings[randomNumbers[2]]} />
        </>
      </div>
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default Rating;
