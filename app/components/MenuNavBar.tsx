"use client";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Behance from "../../public/icons/Behance.svg";
import Instagram from "../../public/icons/Instagram.svg";
import LinkedIn from "../../public/icons/LinkedIn.svg";
import Venmo from "../../public/icons/Venmo.svg";

interface MenuNavBarType {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>
}

const MenuNavBar = ({ show, setShow }: MenuNavBarType) => {
  const links = {
    InstagramLink: "https://www.instagram.com/orriscreativearena/",
    LinkedInLink: "https://sa.linkedin.com/company/orris-creativearena",
    BehanceLink: "https://www.behance.net/orriscreativ",
    ViemoLink: "https://vimeo.com/orriscreative"
  }

  const { InstagramLink, LinkedInLink, BehanceLink, ViemoLink } = links

  return (
    <div className={`absolute w-full flex flex-col gap-2 top-14 right-1 bg-black rounded-lg overflow-hidden transition-all duration-300 ease-linear ${show ? "h-fit p-2" : "h-0 p-0"}`} >
      <a href={BehanceLink} target="_blank" onClick={() => setShow(false)}>
        <Image src={Behance} alt="Behance" />
      </a>
      <a href={InstagramLink} target="_blank" onClick={() => setShow(false)}>
        <Image src={Instagram} alt="Instagram" />
      </a>
      <a href={LinkedInLink} target="_blank" onClick={() => setShow(false)}>
        <Image src={LinkedIn} alt="LinkedIn" />
      </a>
      <a href={ViemoLink} target="_blank" onClick={() => setShow(false)}>
        <Image src={Venmo} alt="Venmo" />
      </a>
    </div>
  )
}

export default MenuNavBar;

