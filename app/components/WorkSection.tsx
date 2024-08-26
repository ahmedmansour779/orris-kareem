/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

import ArrowLeft from "../../public/icons/arrow-left.png";
import ArrowRight from "../../public/icons/arrow-right.png";

import Image from "next/image";

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
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const [src, setSrc] = useState<string>("");
  const [prev, setPrev] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const [indexOne, setIndexOne] = useState<number>(0);
  const [indexTwo, setIndexTwo] = useState<number>(0);

  const dataPopUp: { src: string, isVideo?: boolean }[][] = [];

  const gotoPrevious = (index: number) => {
    // console.log("Nextprev",index-1)
    if (index - 1 >= 0) {
      setNext(false)
      setIndexTwo(prev => prev - 1)
      const mySrc = dataPopUp[indexOne][index - 1].src
      const video: any = dataPopUp[indexOne][index - 1].isVideo
      // console.log(mySrc)
      // console.log(video)
      setIsVideo(video)
      setSrc(mySrc)
    }
    else {
      setPrev(true)
      setNext(false)
    }
  };

  const gotoNext = (index: number) => {
    // console.log("next",index+1)
    if (index + 1 < dataPopUp[indexOne].length) {
      setPrev(false)
      setIndexTwo(prev => prev + 1)
      const mySrc = dataPopUp[indexOne][index + 1].src
      const video: any = dataPopUp[indexOne][index + 1].isVideo
      // console.log(mySrc)
      // console.log(video)
      setIsVideo(video)
      setSrc(mySrc)
    }
    else {
      setNext(true)
      setPrev(false)
    }
    // setCurrImg((currImg) =>
    //   currImg === projectsData.length ? 0 : currImg + 1
    // ); // Adjust the max value based on the number of images
  };

  const closeViewer = () => {
    setViewerIsOpen(false);
    setIsVideo(false); // Reset video state
  };

  useEffect(() => {
    fetchDataProjects(setData);
  }, []);

  // console.log(data)
  // Helper function to determine media type
  const isImage = (url: string) => /\.(jpg|jpeg|png|gif|svg)$/i.test(url);

  const handleClickSlide = (index: number) => {
    const isCurrSlideVideo = !isImage(dataPopUp[index][0].src);
    // console.log(dataPopUp[index])
    setSrc(dataPopUp[index][0].src)
    setIndexOne(index)
    setIsVideo(isCurrSlideVideo);
    setCurrImg(0); // Always start from the first image/video in the set
    setCurrentImg(index);
    setViewerIsOpen(true);
  };

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
        {data?.map(({ cover, title, images }, index) => {
          const imagesPopUp: { src: string, isVideo?: boolean }[] = [];
          images.forEach((image) => imagesPopUp.push({ src: image, isVideo: !isImage(image) }));
          dataPopUp.push(imagesPopUp);
          return (
            <SwiperSlide className="!h-auto" key={index}>
              <div
                key={index}
                className="w-full bg-[#00FF9D] rounded-3xl overflow-hidden grid gap-1 group cursor-pointer border-[1px] border-[#B0B0B0] h-full max-md:gap-2 max-md:pb-2 "
                onClick={() => handleClickSlide(index)}
              >
                <div className="w-full relative max-h-[220px]">
                  {isImage(cover) ? (
                    <Image
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                      sizes="100vw"
                      src={cover}
                      alt=""
                    />
                  ) : (
                    <video className="w-full h-full object-cover" controls>
                      <source src={cover} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                <div className="text-center h-fit my-auto flex justify-center items-center">
                  <p className=" m-0 font-medium max-md:text-xs">
                    {title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-between items-center p-8 mt-6 max-md:p-3">
        <button className="swiper-button-prev-work">
          <Image src={ArrowLeft} className="w-8 max-md:w-6" alt="" />
        </button>
        <div className="swiper-pagination !static"></div>
        <button className="swiper-button-next-work">
          <Image src={ArrowRight} className="w-8 max-md:w-6" alt="" />
        </button>
      </div>

      {viewerIsOpen && (
        <div className="fixed inset-0 px-3 sm:px-10 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeViewer}
          >
            &times;
          </button>
          <button disabled={prev} onClick={() => {
            gotoPrevious(indexTwo)
          }} className="w-14 sm:w-auto">
            <Image src={ArrowLeft} className="w-full max-md:w-6" alt="" />
          </button>
          {isVideo ? (
            <video
              className="w-[80%] sm:w-[65%] h-auto mx-2 sm:mx-5"
              controls
              autoPlay
            >
              <source
                src={src}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={src} alt="Image" className="w-[80%] sm:w-[65%] h-auto mx-2 sm:mx-5" />
          )}
          <button disabled={next} onClick={() => {
            gotoNext(indexTwo)
          }} className="w-14 sm:w-auto">
            <Image src={ArrowRight} className="w-full max-md:w-6" alt="" />
          </button>
          <div className="flex gap-2 absolute bottom-1 left-1/2 -translate-x-1/2">
            {
              dataPopUp[indexOne].map((image, index) => (
                image.isVideo ?
                  <div key={index} className="cursor-pointer w-12 sm:w-16" onClick={() => {
                    setIsVideo(true)
                    setSrc(image.src)
                    setIndexTwo(index)
                  }}>
                    <video
                      className="w-full h-auto"
                    >
                      <source
                        src={image.src}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  : <div key={index} className="cursor-pointer w-12 sm:w-16" onClick={() => {
                    setIsVideo(false)
                    setSrc(image.src)
                    setIndexTwo(index)
                  }}>
                    <img src={image.src} alt="Image" className="w-full h-auto" />
                  </div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSection;



// <ImgsViewer
//   imgs={dataPopUp[currentImg]}
//   currImg={currImg}
//   showThumbnails={true}
//   isOpen={viewerIsOpen}
//   onClickPrev={gotoPrevious}
//   onClickNext={gotoNext}
//   onClose={closeViewer}
//   onClickThumbnail={(id) => setCurrImg(id)}
//   onClickImg={gotoNext}
//   width={1200}
//   theme={{
//     arrow: {
//       backgroundColor: "#fff",
//       fill: "#000",
//       borderRadius: 50,
//       transition: "opacity 200ms",
//     },
//     arrow__size__medium: {
//       height: 48,
//       width: `48px !important`,
//     },
//     arrow__size__small: {
//       marginTop: 0,
//       height: `40px !important`,
//       position: "inherit",
//     },
//     arrow__direction__left: {
//       position: "initial",
//       order: "-1",
//       marginTop: 0,
//     },
//     arrow__direction__right: { position: "initial", marginTop: 0 },
//     container: { gap: 20 },
//   }}
// />