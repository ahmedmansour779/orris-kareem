"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../public/Logo.png";
import Behance from "../../public/icons/Behance.svg";
import Instagram from "../../public/icons/Instagram.svg";
import LinkedIn from "../../public/icons/LinkedIn.svg";
import Venmo from "../../public/icons/Venmo.svg";
import BurgerMenu from "../../public/icons/burger_menu.svg";
import { fetchDataSetting } from "../apis/getDataSetting";
import { settingType } from "../types/apiTypes";
import MenuNavBar from "./MenuNavBar";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [data, setData] = useState<settingType | null>(null);
  const [show, setShow] = useState<boolean>(false)

  const { InstagramLink, LinkedInLink, BehanceLink, ViemoLink } = {
    InstagramLink: "https://www.instagram.com/orriscreativearena/",
    LinkedInLink: "https://sa.linkedin.com/company/orris-creativearena",
    BehanceLink: "https://www.behance.net/orriscreativ",
    ViemoLink: "https://vimeo.com/orriscreative"
  }

  useEffect(() => {
    fetchDataSetting('settings', setData)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center py-10 fixed top-0 left-0 right-0 px-20 max-lg:px-4 transition-all duration-300 z-50 ${scrollY > 0 ? "bg-[#000000c4] shadow-md py-6" : "bg-transparent"
        }`}
    >
      <Image src={data ? data.logo : Logo} width={175} height={100} alt="Logo" className={`w-44 max-lg:w-28 h-auto`} />

      <div className="max-lg:hidden">
        <ul className="flex gap-16">
          <a href="#work" className="text-white font-normal text-xl">
            <li>Work</li>
          </a>
          <a href="#about" className="text-white font-normal text-xl">
            <li>About</li>
          </a>
        </ul>
      </div>
      <div className="max-lg:hidden flex gap-4">
        <a href={ViemoLink} className="">
          <Image width={100} height={100} className="size-auto" src={Venmo} alt="" />
        </a>
        <a href={BehanceLink} className="">
          <Image width={100} height={100} className="size-auto" src={Behance} alt="" />
        </a>
        <a href={InstagramLink} className="">
          <Image width={100} height={100} className="size-auto" src={Instagram} alt="" />
        </a>
        <a href={LinkedInLink} className="">
          <Image width={100} height={100} className="size-auto" src={LinkedIn} alt="" />
        </a>
      </div>

      <button
        className="hidden relative max-lg:flex h-auto px-4 py-4  shadow-none"
        onClick={() => setShow(!show)}
      >
        <Image src={BurgerMenu} width={30} alt="" />
        <MenuNavBar setShow={setShow} show={show} />
      </button>
    </div>
  );
};

export default Navbar;
