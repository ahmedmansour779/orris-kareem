"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchDataClients } from "../apis/getDataClients";
import { servicesData } from "../data/servicesData";
import { clientsType, servicesType } from "../types/apiTypes";

const ServicesSection = () => {
  const [growed, setGrowed] = useState(0);
  const [dataService, setDataService] = useState<servicesType[] | null>(null);
  const [dataClients, setDataClients] = useState<clientsType[]>(); // New state for client data
  // const widthScreen = window.innerWidth

  useEffect(() => {
    // Fetch client data and update the state
    fetchDataClients(setDataClients); // Use setDataClients to handle client data
    // if (widthScreen < 786) {
    //   setGrowed(5)
    // }
    // Uncomment the line below if you intend to fetch services data
    // fetchDataServices(setDataService);
  }, []);




  return (
    <div
      className="px-20 pb-32 max-md:px-5"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div
        id="service"
        className="text-center text-white mb-10 max-lg:mb-0"
      >
        <h2 className="text-5xl font-semibold max-md:text-4xl">
          Our Services
        </h2>
      </div>
      <div className="flex gap-5 max-lg:flex-col">
        <div className="flex flex-col gap-12 max-w-80 justify-between py-14 max-lg:max-w-full max-lg:text-center max-lg:gap-5 max-lg:py-4">
          <h2 className="text-4xl text-white font-normal max-md:text-xl">
            Transforming Ideas into <br className="max-md:hidden" /> Reality.
          </h2>
          <button className="button">
            <a href="#contact">Request a Service</a>
          </button>
        </div>
        <div className="flex gap-5 flex-1 max-md:flex-col">
          {servicesData.map((item, index) => {
            const { id, title, image, hoveringImage } = item;
            return (
              <div
                key={id}
                className={`${growed === index ? "flex-1" : "w-[150px]"} min-w-[150px] md:h-[360px] rounded-[1.25rem] border-[1px] border-[#B0B0B0] relative overflow-hidden duration-300 max-md:w-full max-md:h-full`}
                onMouseOver={() => {
                  // widthScreen > 786 ?
                  setGrowed(index)
                  // null
                }}
              >s
                <Image
                  src={hoveringImage}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%" }}
                  className="object-center"
                />
                <Image
                  src={image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%" }} // optional
                  className={`${growed === index ? "opacity-100" : "opacity-0"
                    } absolute h-full w-full left-0 top-0 duration-300 object-center`}
                  alt=""
                />
                <div className="absolute w-full top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000] to-[#00000000] z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
