import Image from "next/image";
import Parteners from "../../public/images/parteners.png";
import partenersData from "../data/parteners";
import PartenersSwiper from "./PartenersSwiper";

const PartenersSection = () => {
  return (
    <div
      className="px-20 pb-32 max-md:px-5"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {" "}
      <div className="text-center text-white mb-14 max-md:mb-8">
        <h2 className="text-5xl font-semibold mb-4 max-md:text-4xl">
          Who Trusted Us
        </h2>
      </div>
      <PartenersSwiper parteners={partenersData} />
      {/* <div className="  h-32  my-14 overflow-x-hidden max-md:h-24 ">
        <div className="h-full max-w-fit min-w-fit relative">
          <Image
            src={Parteners}
            height={0}
            sizes="100vw"
            className="h-full max-w-fit w-fit invisible "
            alt="Partners"
          />
          <Image
            src={Parteners}
            className="h-full w-full  absolute top-0 left-0 partener-anim"
            alt="Partners"
          />
        </div>
      </div> */}
    </div>
  );
};

export default PartenersSection;
