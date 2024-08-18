import zakatImg from "../../public/images/zakat.png";
import zakatHoverImg from "../../public/images/zakatHoverImg.png";

import SaudiDevelopment from "../../public/images/SaudiDevelopment.png";
import SaudiHoverDevelopment from "../../public/headerBGImg.gif";

import saberImg from "../../public/images/saber.gif";
import saberHoverImage from "../../public/images/saberHoverImage.png";

import ImruImg from "../../public/images/ImruImg.png";
import ImruHoverImg from "../../public/images/Imru-qais.gif";

type projectType = {
  id: number;
  title?: string;
  description: string;
  image: string;
  hoveringImage: string;
};

export const projectsData: projectType[] = [
  {
    id: 1,
    description: "Zakat, Tax and Customs Authority Pavilions-2024",
    image: zakatImg.src,
    hoveringImage: zakatHoverImg.src,
  },
  {
    id: 2,
    description: "Saber Logo | Brand Identity 2023",
    image: saberImg.src,
    hoveringImage: saberHoverImage.src,
  },
  {
    id: 3,
    description: "The Saudi Development & Reconstruction Program for Yemen.",
    image: SaudiDevelopment.src,
    hoveringImage: SaudiHoverDevelopment.src,
  },
  {
    id: 4,
    description: "The Saudi Development & Reconstruction Program for Yemen.",
    image: SaudiDevelopment.src,
    hoveringImage: SaudiHoverDevelopment.src,
  },
  {
    id: 5,
    description: "Zakat, Tax and Customs Authority Pavilions-2024",
    image: zakatImg.src,
    hoveringImage: zakatHoverImg.src,
  },
  {
    id: 6,
    title: "Imru Al Qais",
    description: "3D Character Modeling",
    image: ImruImg.src,
    hoveringImage: ImruHoverImg.src,
  },
];
