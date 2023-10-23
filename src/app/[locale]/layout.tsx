import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import "../globals.css";
import { GlobalConfig, MenuResponse } from "@/types";
import api from "../../../api";
import { MenuItem } from "@/types/Menu";

export const metadata: Metadata = {
  title: "ATELIER BRÜCKNER |",
  description: "ATELIER BRÜCKNER",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const activeLocale = locale ? locale : "de";

  const lng = activeLocale === "en" ? "" : `/${locale}`;

  const { data: menuItems } = (
    await api.get<MenuResponse>(`${lng}/jsonapi/menu_items/main`)
  ).data;
  const { data: footerMenuItems } = (
    await api.get<MenuResponse>(`${lng}/jsonapi/menu_items/footer`)
  ).data;
  const { data: globalConfig } = await api.get<any>(
    `${lng}/jsonapi/config_pages/global`
  );

  let messages;
  try {
    messages = (await import(`../../messages/${activeLocale}.json`)).default;
  } catch (error) {
    console.log(error);
  }

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider locale={activeLocale} messages={messages}>
          <div>
            <header>
              <Navbar menuItems={menuItems} />
            </header>
            {children}
          </div>
          <Footer menuItems={footerMenuItems} globalConfig={globalConfig} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
