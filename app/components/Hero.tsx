"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DisableSound from "../../public/images/disable-sound.png";
import EnableSound from "../../public/images/enable-sound.png";
import { fetchDataMainBanner } from "../apis/getDataMainBanner";
import { mainBannerType } from "../types/apiTypes";
import Navbar from "./Navbar";
// import SaudiDevelopmentVideo from "../../public/video/The_Saudi_Development.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [dataMainBanner, setDataMainBanner] = useState<mainBannerType | null>(null);
  const [showVideo, setShowVideo] = useState<boolean>(false)
  const [hiddenText, setHiddenText] = useState<boolean>(false)
  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // setVideo(dataMainBanner?.video_link? true : false)
  useEffect(() => {
    fetchDataMainBanner(setDataMainBanner)
    // videoRef.current?.play()
  }, [])

  console.log(dataMainBanner)
  setTimeout(() => {
    dataMainBanner?.video_link ?
      setShowVideo(true) :
      setShowVideo(false)
  },
    3800)
  setTimeout(() => {
    dataMainBanner?.video_link ?
      setHiddenText(true) :
      setHiddenText(false)
  },
    4000)
  return (
    <>
      <Navbar video={hiddenText} />
      <div className="pt-14 h-screen bg-center bg-cover relative max-md:h-[384px]">
        <div className={`${hiddenText ? "opacity-0" : "opacity-100"} absolute top-0 left-0 right-0 bottom-0 bg-[#00000099] h-full w-full flex justify-center items-center transition-all ease-in-out duration-1000`}>
          <div className="text-center w-full max-md:px-6 max-md:pt-12">
            <h2 className="text-[5rem] font-bold leading-[120px] text-white max-md:text-[2.25rem] max-md:leading-[44px] whitespace-nowrap">
              Where Creativity
            </h2>
            <h2 className="text-[5rem] font-bold leading-[120px] text-white max-md:text-[2.25rem] max-md:leading-[44px] whitespace-nowrap">
              Knows No Bounds
            </h2>
            <button className="button w-full max-w-[244px] mt-14 max-md:max-w-full">
              <a href="#service">
                Get Started!
              </a>
            </button>
          </div>
        </div>
        <video
          className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10 object-cover transition-all ease-in-out duration-1000 ${showVideo ? "opacity-100" : "opacity-0"}`}
          ref={videoRef}
          controls={false}
          autoPlay
          loop
          muted={isMuted}
          src={dataMainBanner ? `${dataMainBanner?.video_link}` : "/video/video.mp4"}
        >
          {/* {
            dataMainBanner ?
            <source src={`${dataMainBanner.video_link}`} type="video/mp4" />
            :<source src={"/video/video.mp4"} type="video/mp4" />
          } */}
          {/* <source src={dataMainBanner?.video_link ? `${dataMainBanner.video_link}` : "/video/video.mp4"} type="video/mp4" /> */}
          {/* Your browser does not support the video tag. */}
        </video>
        <div
          onClick={handleMuteUnmute}
          className="absolute bottom-4 left-4 bg-[#00000099] cursor-pointer w-12 h-12 rounded-full flex justify-center items-center p-3 max-md:bottom-2 max-md:left-2 max-md:w-8 max-md:h-8 max-md:p-2"
        >
          <Image
            src={isMuted ? DisableSound : EnableSound}
            className="opacity-50"
            alt="sound"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
