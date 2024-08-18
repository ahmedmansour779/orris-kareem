"use client";
import { useEffect, useState } from "react";
import ImgsViewer from "react-images-viewer";
import SaudiHoverDevelopment from "../../public/headerBGImg.gif";

import ArrowLeft from "../../public/icons/arrow-left.png";
import ArrowRight from "../../public/icons/arrow-right.png";

import Image from "next/image";
import { projectsData } from "../data/projectsData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchDataProjects } from "../apis/getDataProjects";
import { projectsType } from "../types/apiTypes";

const WorkSection = () => {
  const [currImg, setCurrImg] = useState(0);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [data, setData] = useState<projectsType[] | null>(null);

  const dataPopUp: { src: string }[][] = [];

  const gotoPrevious = () => {
    setCurrImg((currImg) => Math.max(currImg - 1, 0));
  };

  const gotoNext = () => {
    setCurrImg((currImg) =>
      currImg === projectsData.length ? 0 : currImg + 1
    ); // Adjust the max value based on the number of images
  };

  const closeViewer = () => {
    setViewerIsOpen(false);
  };

  useEffect(() => {
    fetchDataProjects(setData)
  }, [])

  return (
    <div id="work" className="px-20 pb-32 max-md:px-5">
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="text-center text-white mb-10"
      >
        <h2 className="text-5xl font-semibold mb-4 max-md:text-4xl">
          Our Work
        </h2>
        <h3 className="text-4xl font-normal max-md:text-xl ">
          Showcasing Creativity in Action
        </h3>
      </div>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-work",
          prevEl: ".swiper-button-prev-work",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        data-aos="fade-up"
        data-aos-duration="1200"
        className="text-center  mb-10"
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1920: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {data?.map(
          ({ cover, title, images }, index) => {
            const imagesPopUp: { src: string }[] = [];
            images.forEach((image) => imagesPopUp.push({ src: image }))
            dataPopUp.push(imagesPopUp)
            return (
              <SwiperSlide
                className="!h-auto" key={index}>
                <div
                  key={index}
                  className="w-full bg-white rounded-[4px] px-2 pt-2 pb-6 grid grid-rows-4 gap-6 group cursor-pointer border-[1px] border-[#B0B0B0] h-full max-md:gap-2 max-md:pb-2"
                  onClick={() => {
                    setCurrImg(index);
                    setCurrentImg(index);
                    setViewerIsOpen(true);
                  }}
                >
                  <div className="w-full row-span-3 relative max-h-[300px]">
                    {" "}
                    <Image
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                      sizes="100vw"
                      src={cover}
                      alt=""
                    />
                    <Image
                      src={cover}
                      width={0}
                      height={100}
                      sizes="100vw"
                      className="opacity-0 absolute h-full w-full left-0 top-0 group-hover:opacity-100 duration-300 object-cover object-top"
                      alt=""
                    />
                  </div>

                  <div className="text-center row-span-1 flex justify-center items-center">
                    <p className="text-xl font-medium max-md:text-xs">
                      {title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          }
        )}
      </Swiper>
      <div className="flex justify-between items-center p-8 mt-6 max-md:p-3">
        <button className=" swiper-button-prev-work">
          <Image src={ArrowLeft} className="w-8 max-md:w-6" alt=""></Image>
        </button>
        <div className="swiper-pagination !static"></div>
        <button className=" swiper-button-next-work">
          <Image src={ArrowRight} className="w-8 max-md:w-6" alt=""></Image>
        </button>
      </div>

      <ImgsViewer
        imgs={dataPopUp.length > 0 ? dataPopUp[currentImg] : [
          ...projectsData.map((project) => {
            return { src: project.image };
          }),
          { src: SaudiHoverDevelopment.src },
        ]}
        currImg={currImg}
        showThumbnails={true}
        isOpen={viewerIsOpen}
        onClickPrev={gotoPrevious}
        onClickNext={gotoNext}
        onClose={closeViewer}
        onClickThumbnail={(id) => setCurrImg(id)}
        onClickImg={gotoNext}
        width={1200}
        theme={{
          arrow: {
            backgroundColor: "#fff",
            fill: "#000",
            borderRadius: 50,
            transition: "opacity 200ms",
          },
          arrow__size__medium: {
            height: 48,
            width: `48px !important`,
          },
          arrow__size__small: {
            marginTop: 0,
            height: `40px !important`,
            position: "inherit",
          },
          arrow__direction__left: {
            position: "initial",
            order: "-1",
            marginTop: 0,
          },
          arrow__direction__right: { position: "initial", marginTop: 0 },
          container: { gap: 20 },
        }}
      />
    </div>
  );
};

export default WorkSection;
