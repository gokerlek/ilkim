import { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import logoIcon from "@/assets/icons/logo.svg";
import banner from "@/assets/banner.png";
import { color } from "@/constants.tsx";
import { Navigation } from "@/components/navigation";
import { BaseContainer } from "@/components/containers/base-container.tsx";

const { primary, secondary } = color;
export const Header = () => {
  const [style, setStyle] = useState({
    logo: { height: 96, color: primary },
    nav: { backgroundColor: "transparent" },
  });

  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 80) {
        setStyle({
          logo: { height: 64, color: primary },
          nav: { backgroundColor: secondary },
        });
      } else {
        setStyle({
          logo: { height: 96, color: primary },
          nav: { backgroundColor: "transparent" },
        });
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const { logo, nav } = style;

  return (
    <>
      <div
        style={{ ...nav, transition: "0.5s" }}
        className="fixed top-0  z-50 w-full overflow-hidden  px-2.5 transition"
      >
        <BaseContainer>
          <SVG
            src={logoIcon}
            style={{ ...logo, transition: "0.5s" }}
            className="w-fit p-2"
          />

          <Navigation />
        </BaseContainer>
      </div>
      <div
        style={{
          backgroundImage: `url(${banner})`,
        }}
        className="relative flex  w-full  bg-cover  bg-center pt-24 "
      >
        <div className="z-10 flex h-52 w-full items-center justify-center text-[70px] uppercase text-gray-700"></div>
      </div>
    </>
  );
};
