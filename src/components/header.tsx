import { useState, useEffect, useCallback } from "react";
import SVG from "react-inlinesvg";
import logoIcon from "@/assets/icons/logo.svg";
import balina from "@/assets/balina.png";
import { color } from "@/constants.tsx";
import { Navigation } from "@/components/navigation";
import { BaseContainer } from "@/components/containers/base-container.tsx";
import { useTranslation } from "react-i18next";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Drawer } from "@/components/modals/Drawer.tsx";
import clsx from "clsx";

const { primary, secondary } = color;
export const Header = () => {
  const { t } = useTranslation();

  const default_nav = { backgroundColor: "transparent", boxShadow: "none" };
  const defaultStyle = {
    logo: { height: 96, color: "white" },
    nav: default_nav,
    plus: { height: 64 },
  };

  const [style, setStyle] = useState(defaultStyle);

  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 80) {
        setStyle({
          logo: { height: 64, color: primary },
          nav: {
            backgroundColor: secondary,
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          },
          plus: { height: 48 },
        });
      } else {
        setStyle(defaultStyle);
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const { logo, nav, plus } = style;

  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const toggle = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Drawer open={open} setOpen={setOpen}>
        <PlusIcon
          style={{
            ...plus,
            transition: "0.5s",
          }}
          className={clsx(
            "absolute right-0 top-4 z-[100000]  rotate-45 cursor-pointer text-white opacity-0",
          )}
          onClick={toggle}
        />
        <div className="z-[100] flex  h-dvh items-center rounded bg-secondary p-4">
          <Navigation mode="mobile" close={close} />
        </div>
      </Drawer>
      <div
        style={{ ...nav, transition: "0.5s" }}
        className="fixed top-0  z-50 w-full   overflow-hidden px-0 transition  ease-in-out md:px-2.5"
      >
        <BaseContainer extra="space-x-3 relative px-0 ">
          <SVG
            src={logoIcon}
            style={{ ...logo, transition: "0.5s" }}
            className={clsx("w-fit max-w-[200px] p-2", {
              "opacity-0": open,
            })}
          />

          <Navigation mode="desktop" />
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

      <div
        style={{
          backgroundImage: `url(${balina})`,
        }}
        className="relative flex  w-full  bg-cover  bg-center md:pt-24 "
      >
        <BaseContainer>
          <div className="z-10 flex h-dvh w-full max-w-4xl flex-col justify-center gap-2  text-white  md:h-[542px]">
            <span className="text-5xl font-bold uppercase text-gray-800 md:text-7xl">
              {t("human_in_the_being")}
            </span>
            <span className="text-2xl font-light text-gray-800 md:text-4xl">
              {t("we_are_all_humans")}
            </span>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};
