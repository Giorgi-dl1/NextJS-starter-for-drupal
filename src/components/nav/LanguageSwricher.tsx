"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const LanguageSwricher = () => {
  const pathName = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const translateLinks = [
    {
      locale: "en",
      name: "english",
    },
    {
      locale: "de",
      name: "DEUTSCH",
    },
    {
      locale: "zh",
      name: "简体中文",
    },
    {
      locale: "ko",
      name: "한국어",
    },
  ];

  const changeLocale = (locale: string) => {
    let newPath: string | string[] = pathName.split("/");

    newPath[1] = locale;
    newPath = newPath.join("/");

    router.push(newPath, undefined);
  };

  return (
    <>
      {translateLinks.map((item) => {
        const active = locale === item.locale;
        return !active ? (
          <div
            onClick={() => changeLocale(item.locale)}
            className="uppercase cursor-pointer hover:underline transition duration-300 w-max py-[8px] leading-[1em] first:py-0 first:text-[32px] first:leading-[1.5em] [&:nth-child(2)]:text-[32px] [&:nth-child(2)]:py-0 [&:nth-child(2)]:leading-[1.5em] [&:nth-child(2)]:mb-[20px] md:hover:no-underline md:hover:text-red"
            key={item.locale}
          >
            {item.name}
          </div>
        ) : null;
      })}
    </>
  );
};

export default LanguageSwricher;
