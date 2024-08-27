"use client";
import { useEffect, useState } from "react";
import { fetchDataStats } from "../apis/getDataStats";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { statsType } from "../types/apiTypes";
import CounterComponent from "./CounterComponent";

const CountersSection = () => {
  const [isInit, setIsInit] = useState(false);
  const [data, setData] = useState<statsType | null>(null);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.5, // Adjust as needed
  });
  useEffect(() => {
    if (!isInit && isIntersecting) {
      setIsInit(true);
    }
  }, [isIntersecting, isInit]);

  useEffect(() => {
    fetchDataStats(setData)
  }, [])

  return (
    <div className=" pt-14 pb-32">
      <div
        ref={ref}
        className="flex justify-around items-center gap-2"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        {(isIntersecting || isInit) && (
          <>
            <CounterComponent count={data ? data.countries : 10} title="Countries" />
            <CounterComponent count={data ? +data.clients : 25} title="Clients" />
            <CounterComponent count={data ? +data.projects : 72} title="Projects" />
          </>
        )}
      </div>
    </div>
  );
};

export default CountersSection;
