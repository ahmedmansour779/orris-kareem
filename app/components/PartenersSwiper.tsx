"use client";

import ArrowLeft from "../../public/icons/arrow-left.png";
import ArrowRight from "../../public/icons/arrow-right.png";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { clientsType } from "../types/apiTypes";

const PartenersSwiper = ({
  parteners,
}: {
  parteners: clientsType[] | undefined;
}) => {
  let all = parteners?.concat(parteners).concat(parteners).concat(parteners)
  // all = all?.concat(all)
  console.log("all",all)
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-parteners",
          prevEl: ".swiper-button-prev-parteners",
        }}
        autoplay={{ delay: 1500, pauseOnMouseEnter: true }}
        loop={true}
        modules={[Autoplay, Navigation]}
        slidesPerView={"auto"}
        // centeredSlides
        breakpoints={{
          300: { spaceBetween: 20 },
          640: { spaceBetween: 30 },
          768: { spaceBetween: 40 },
        }}
      >
        {parteners && all?.map(({ id, image }) => (
            <SwiperSlide className="!h-32 !w-fit max-md:!h-16" key={id}>
              <Image
                width={0}
                height={0}
                className=" h-full cover w-auto"
                sizes="100vw"
                src={image}
                alt=""
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className=" absolute top-0 left-0 h-full w-full z-20 flex justify-between items-center p-8  max-md:p-3">
        <button className=" swiper-button-prev-parteners">
          <Image src={ArrowLeft} className="w-8 max-md:w-6" alt=""></Image>
        </button>

        <button className=" swiper-button-next-parteners">
          <Image src={ArrowRight} className="w-8 max-md:w-6" alt=""></Image>
        </button>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-full z-10 "
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 90%",
        }}
      />
    </div>
  );
};

export default PartenersSwiper;
