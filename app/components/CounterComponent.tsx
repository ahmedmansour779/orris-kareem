"use client";
import { useEffect, useState } from "react";
import { numbersCoords } from "../data/counterNumbers";

const CounterComponent = ({
  count,
  title,
}: {
  count: number;
  title: string;
}) => {
  const [currentNumberInQueue, setCurrentNumberInQueue] = useState<number>(0);
  const numArray = currentNumberInQueue.toString().split("").map(Number);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined; // Type inference for interval

    if (currentNumberInQueue !== count) {
      const duration = (index: number) => {
        const x = index > count / 2 ? index / count : 1 - index / count;
        return (4000 / count) * x;
      };

      interval = setInterval(() => {
        setCurrentNumberInQueue((prev) => prev + 1);
      }, duration(currentNumberInQueue));
    }

    return () => {
      if (interval) clearInterval(interval); // Check if interval is defined before clearing it
    };
  }, [currentNumberInQueue, count]); // Add currentNumberInQueue and count as dependencies
  return (
    <div className={`flex flex-col  items-center gap-4`}>
      {/* <div className="flex justify-end w-full">
        <h2 className="text-white text-7xl font-normal text-end">+</h2>
      </div> */}

      <div className=" gap-4 items-center  ">
        <div className="flex gap-4 max-md:gap-2">
          {numArray.map((num, index) => {
            const { coordinates } = numbersCoords[num];
            return (
              <div key={index} className="grid grid-cols-5">
                {new Array(35).fill(0).map((_, index) => {
                  const isCoordinated = coordinates.includes(index);
                  return (
                    <div
                      key={index}
                      className={`w-3 h-3 max-md:w-2 max-md:h-2 rounded-full ${
                        isCoordinated ? "bg-[#00FF9D]" : "bg-[#616161]"
                      }`}
                    />
                  );
                })}
              </div>
            );
          })}
          {numArray.length === 1 && (
            <div className="grid grid-cols-5">
              {new Array(35).fill(0).map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`w-3 h-3 max-md:w-2 max-md:h-2 rounded-full bg-[#616161]`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <h2 className="text-[#00FF9D] text-3xl font-normal   text-center max-md:text-lg">
        {title}
      </h2>
    </div>
  );
};

export default CounterComponent;
