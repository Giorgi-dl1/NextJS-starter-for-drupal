"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import BurgerToggler from "./BurgerToggler";
import { useState } from "react";
import Link from "next/link";
import { MenuItem } from "@/types/Menu";
import LanguageSwricher from "./LanguageSwricher";
import { usePathname } from "next/navigation";

interface NavbarProps {
  menuItems: MenuItem[];
}

const Navbar = ({ menuItems }: NavbarProps) => {
  const [show, setShow] = useState(false);
  const locale = useLocale();
  const pathName = usePathname();

  return (
    <header className="z-50 md:px-[65px] md:pt-[7px] xl:px-[95px]">
      <div className="relative max-w-[1615px] mx-auto md:flex md:flex-col">
        <div className="flex items-center justify-between pl-[20px] pr-[25px] bg-white md:bg-[transparent] md:order-2 md:px-0 lg:-mt-[22px]">
          <Link
            className="relative font-bold w-max leading-[60px] md:text-[22px] md:leading-[50px]"
            href={`/${locale}`}
          >
            <strong>
              <span>ATELIER BRÜCKNER</span>
            </strong>
            <div className="absolute top-[10px] right-0 translate-x-full md:top-[5px]">
              <div className="relative w-[31px] h-[9px] overflow-hidden">
                <Image
                  className="absolute -top-[71px] -left-[10px] !max-w-none !w-[160px] !h-auto"
                  width={100}
                  height={100}
                  src="/assets/ui-elements/sprites.png"
                  alt="sprites"
                />
              </div>
            </div>
          </Link>
          <BurgerToggler show={show} setShow={setShow} />
          <div className="hidden text-[22px] md:flex gap-[25px] uppercase font-bold">
            {menuItems.map((item, index) => {
              return index <= 1 ? (
                <Link
                  className={`transition duration-300 hover:text-red [&.active]:text-red [&.active]:underline ${
                    pathName === item.attributes.url && "active"
                  }`}
                  href={item.attributes.url}
                  key={item.id}
                >
                  {item.attributes.title}
                </Link>
              ) : null;
            })}
          </div>
        </div>
        <div
          className={`flex flex-col text-white bg-red py-[25px] px-[30px] absolute left-[20px] right-[20px] -bottom-[20px] translate-y-full opacity-0 scale-90 pointer-events-none transition-all duration-300 ease-out
                    md:bg-[transparent] md:static md:flex-row md:justify-end md:items-center md:gap-[10px] md:text-gray-200 md:text-[12px] md:translate-y-0 md:!opacity-100 md:scale-100 md:pointer-events-auto md:order-1 md:py-0 md:px-0
                    lg:justify-start lg:ml-[266px] ${
                      show && "opacity-100 scale-100 pointer-events-auto"
                    }`}
        >
          {menuItems.map((item) => {
            return (
              <Link
                className={`uppercase hover:underline w-max py-[8px] leading-[1em] first:py-0 transition duration-300 first:text-[32px] first:leading-[1.5em] [&:nth-child(2)]:text-[32px] [&:nth-child(2)]:py-0 [&:nth-child(2)]:leading-[1.5em] [&:nth-child(2)]:mb-[20px] first:md:hidden [&:nth-child(2)]:md:hidden md:hover:no-underline md:hover:text-red hover:text-red [&.active]:text-red [&.active]:underline ${
                  pathName === item.attributes.url && "active"
                }`}
                href={item.attributes.url}
                key={item.id}
              >
                {item.attributes.title}
              </Link>
            );
          })}
          <div className="h-[17px] w-[1px] bg-gray-200 hidden md:block"></div>
          <LanguageSwricher />
        </div>
        <div
          className={`fixed top-0 bottom-0 left-0 right-0 bg-white -z-10 opacity-0 pointer-events-none transition duration-300 ${
            show && "!opacity-75 !pointer-events-auto"
          }`}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
