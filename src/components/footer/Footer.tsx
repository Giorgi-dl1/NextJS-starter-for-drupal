"use client";

import { GlobalConfig } from "@/types";
import { MenuItem } from "@/types/Menu";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import SubscribeForm from "../form/SubscribeForm";
import { usePathname } from "next/navigation";

interface FooterProps {
  menuItems: MenuItem[];
  globalConfig: GlobalConfig;
}
const Footer = ({ menuItems, globalConfig }: FooterProps) => {
  const locale = useLocale();
  const pathName = usePathname();

  const tConfig = globalConfig.data.filter((item) =>
    item.attributes.context.includes(locale)
  )[0];

  return (
    <footer className="px pt-[70px] pb-[40px]">
      <div className="lg:flex lg:gap-[155px] lg:justify-between max-w-[1620px] mx-auto">
        <div className="mb-[30px] md:mb-[10px] md:flex md:gap-[130px] lg:gap-[105px]">
          <div className="mb-[40px] md:order-2">
            <div className="flex flex-col mb-[10px]">
              {menuItems.map((item) => {
                return (
                  <Link
                    className={`leading-[1.333em] uppercase font-bold transition duration-300 [&.active]:text-red [&.active]:underline hover:text-red ${
                      pathName === item.attributes.url && "active"
                    }`}
                    href={item.attributes.url}
                    key={item.id}
                  >
                    {item.attributes.title}
                  </Link>
                );
              })}
            </div>
            <div>
              <Link
                className="group/link hover:text-red flex gap-[10px] items-center w-max underline font-bold"
                href={tConfig.attributes.field_facebook_link.uri}
              >
                <div className="w-[14.5px] h-[14.5px] relative overflow-hidden">
                  <Image
                    className="absolute right-0 -top-[119.5px] !max-w-none !h-auto !w-[184px] group-hover/link:-top-[31px]"
                    width={100}
                    height={100}
                    src="/assets/ui-elements/sprites.png"
                    alt="sprites"
                  />
                </div>
                facebook
              </Link>
              <Link
                className="group/link hover:text-red flex gap-[10px] items-center w-max underline font-bold"
                href={tConfig.attributes.field_vimeo_link.uri}
              >
                <div className="w-[14.5px] h-[14.5px] relative overflow-hidden">
                  <Image
                    className="absolute right-0 -top-[60.5px] !max-w-none !h-auto !w-[184px] group-hover/link:-top-[45.7px]"
                    width={100}
                    height={100}
                    src="/assets/ui-elements/sprites.png"
                    alt="sprites"
                  />
                </div>
                vimeo
              </Link>
              <Link
                className="group/link hover:text-red flex gap-[10px] items-center w-max underline font-bold"
                href={tConfig.attributes.field_vimeo_link.uri}
              >
                <div className="w-[14.5px] h-[14.5px] relative overflow-hidden">
                  <Image
                    className="absolute right-0 -top-[134.5px] !max-w-none !h-auto !w-[184px] group-hover/link:-top-[75.5px]"
                    width={100}
                    height={100}
                    src="/assets/ui-elements/sprites.png"
                    alt="sprites"
                  />
                </div>
                twitter
              </Link>
              <Link
                className="group/link hover:text-red flex gap-[10px] items-center w-max underline font-bold"
                href={tConfig.attributes.field_linkedin_link.uri}
              >
                <div className="w-[14.5px] h-[14.5px] relative overflow-hidden">
                  <Image
                    className="absolute right-0 bottom-0 !max-w-none !h-auto !w-[14.5px] group-hover/link:top-0"
                    width={100}
                    height={100}
                    src="/assets/ui-elements/linkedin.png"
                    alt="sprites"
                  />
                </div>
                linkedin
              </Link>
              <Link
                className="group/link hover:text-red flex gap-[10px] items-center w-max underline font-bold"
                href={tConfig.attributes.field_pinterest_link.uri}
              >
                <div className="w-[14.5px] h-[14.5px] relative overflow-hidden">
                  <Image
                    className="absolute right-0 -top-[89.5px] !max-w-none !h-auto !w-[184px] group-hover/link:-top-[104.2px]"
                    width={100}
                    height={100}
                    src="/assets/ui-elements/sprites.png"
                    alt="sprites"
                  />
                </div>
                pinterest
              </Link>
              <Link
                className="group/link hover:text-red flex gap-[10px] items-center w-max underline font-bold"
                href={tConfig.attributes.field_instagram_link.uri}
              >
                <div className="w-[14.5px] h-[14.5px] relative overflow-hidden">
                  <Image
                    className="absolute right-0 bottom-0 !max-w-none !h-auto !w-[14.5px] group-hover/link:top-0"
                    width={100}
                    height={100}
                    src="/assets/ui-elements/instagram.png"
                    alt="sprites"
                  />
                </div>
                instagram
              </Link>
              <Link
                className="group/link hover:text-red flex gap-[10px] items-center w-max underline font-bold"
                href={tConfig.attributes.field_youtube_link_.uri}
              >
                <div className="w-[14.5px] h-[14.5px] relative overflow-hidden">
                  <Image
                    className="absolute right-0 bottom-0 !max-w-none !h-auto !w-[14.5px] group-hover/link:top-0"
                    width={100}
                    height={100}
                    src="/assets/ui-elements/youtube.png"
                    alt="sprites"
                  />
                </div>
                youtube
              </Link>
            </div>
          </div>
          <div className="md:order-1">
            <div className="relative font-bold w-max md:text-[22px] leading-[1.15em]">
              <strong>
                <span>ATELIER BRÜCKNER</span>
              </strong>
              <div className="absolute -top-[10px] right-0 translate-x-full">
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
            </div>
            <div
              className="[&>*:first-child]:md:text-[22px] [&>*:first-child]:leading-[1.15em] [&>*:last-child]:mb-0 [&>*]:mb-[10px] [&>*>a]:underline [&>*>a]:w-max [&>*>a]:inline-block [&>*>a:hover]:text-red"
              dangerouslySetInnerHTML={{
                __html: tConfig.attributes.field_footer_adresse.processed,
              }}
            />
          </div>
        </div>
        <div>
          <div
            className="mb-[1.5em] [&>*:last-child]:mb-0 [&>*]:mb-[10px] [&>*>a]:underline [&>*>a]:w-max [&>*>a]:inline-block [&>*>a:hover]:text-red"
            dangerouslySetInnerHTML={{
              __html: tConfig.attributes.field_footer_newsletter_text.processed,
            }}
          />
          <SubscribeForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
