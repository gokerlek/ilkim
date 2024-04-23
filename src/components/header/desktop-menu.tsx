import { BaseContainer } from "@/components/containers/base-container.tsx";
import SVG from "react-inlinesvg";
import logoIcon from "@/assets/icons/logo.svg";
import clsx from "clsx";
import { Navigation } from "@/components/navigation";
import { PlusIcon } from "@heroicons/react/16/solid";
import { FC } from "react";
import { useHeaderScroll } from "@/hooks/useHeaderScroll.tsx";
import { useMenu } from "@/components/header/Menu.tsx";
import ChangeLanguageButton from "@/components/buttons/change_language.tsx";

export const DesktopMenu: FC = () => {
  const { logo, nav, plus } = useHeaderScroll();

  const { open, toggle } = useMenu();

  return (
    <div
      style={{ ...nav, transition: "0.5s" }}
      className="fixed top-0  z-50 w-full   overflow-hidden px-0 transition  ease-in-out md:px-2.5"
    >
      <BaseContainer size="base" extra="space-x-3 relative px-0 ">
        <SVG
          src={logoIcon}
          style={{ ...logo, transition: "0.5s" }}
          className={clsx("w-fit max-w-[200px] p-2", {
            "opacity-0": open,
          })}
        />

        <div className="hidden items-center gap-5 md:flex">
          <Navigation mode="desktop" />
          <ChangeLanguageButton />
        </div>

        <PlusIcon
          style={{
            ...plus,
            transition: "0.5s",
          }}
          className={clsx(
            "absolute inset-y-0 right-0 z-[100] my-auto cursor-pointer text-white transition duration-300 ease-in-out md:hidden",
            {
              "rotate-45": open,
            },
          )}
          onClick={toggle}
        />
      </BaseContainer>
    </div>
  );
};
