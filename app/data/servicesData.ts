import zakatImg from "../../public/images/services/items1-big.png";
import zakatHoverImg from "../../public/images/services/items1-smail.png";

import saberImg from "../../public/images/services/item2-big.png";
import saberHoverImage from "../../public/images/services/item2-smail.png";

import SaudiDevelopment from "../../public/images/services/item3-big.png";
import SaudiHoverDevelopment from "../../public/images/services/item3-smail.png";

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
