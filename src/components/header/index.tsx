import sea from "@/assets/sea.png";
import { BaseContainer } from "@/components/containers/base-container.tsx";
import { useTranslation } from "react-i18next";

import { MobileMenu } from "@/components/header/mobile-menu.tsx";
import { DesktopMenu } from "@/components/header/desktop-menu.tsx";
import { Menu } from "@/components/header/Menu.tsx";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Menu>
        <MobileMenu />
        <DesktopMenu />
      </Menu>

      <div
        style={{
          backgroundImage: `url(${sea})`,
        }}
        className="relative flex  w-full  bg-cover  bg-center md:pt-24 "
      >
        <BaseContainer size="base">
          <div className="z-10 flex h-dvh w-full max-w-4xl flex-col justify-center gap-2  text-white  md:h-[542px]">
            <span className="text-5xl font-bold uppercase text-gray-800 md:text-7xl">
              {t("human_in_the_being")}
            </span>
            <span className="text-balance text-2xl font-light text-gray-800 md:text-4xl">
              {t("we_are_all_humans")}
            </span>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};
