import zakatImg from "../../public/images/zakat.png";
import zakatHoverImg from "../../public/images/zakatHoverImg.png";

import saberImg from "../../public/images/saber.gif";
import saberHoverImage from "../../public/images/saberHoverImage.png";

import SaudiHoverDevelopment from "../../public/headerBGImg.gif";
import SaudiDevelopment from "../../public/images/SaudiDevelopment.png";

type servicesType = {
  id: number;
  title: string;
  image: string;
  hoveringImage: string;
};

export const servicesData: servicesType[] = [
  {
    id: 1,
    title: "2D&3D",
    image: zakatImg.src,
    hoveringImage: zakatHoverImg.src,
  },
  {
    id: 2,
    title: "MARKETING",
    image: saberImg.src,
    hoveringImage: saberHoverImage.src,
  },
  {
    id: 3,
    title: "Film Production",
    image: SaudiDevelopment.src,
    hoveringImage: SaudiHoverDevelopment.src,
  },
];
