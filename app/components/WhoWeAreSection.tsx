"use client";

import { useEffect, useState } from "react";
import { fetchDataAboutUs } from "../apis/getDataAboutUs";
import { aboutUsType } from "../types/apiTypes";

const WhoWeAreSection = () => {
  const [data, setData] = useState<aboutUsType | null>(null);

  useEffect(() => {
    fetchDataAboutUs(setData);
  }, []);

  return (
    <div
      className="px-20 pb-32 max-md:px-5 max-md:pb-16"
      data-aos="fade-up"
      data-aos-duration="1200"
      id="about"
    >
      <div className="text-center text-white mb-10">
        <h2 className="text-5xl font-semibold  max-md:text-4xl mb-16 max-md:mb-8">
          {data?.title}
        </h2>
        <h3 className="text-[28px] text-start font-light  mx-auto max-md:text-lg">
          {data?.content}
        </h3>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
