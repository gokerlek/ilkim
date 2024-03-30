import { useEffect, useState } from "react";
import { color, defaultStyle } from "@/constants.tsx";

const { primary, secondary } = color;

export const useHeaderScroll = () => {
  const [style, setStyle] = useState(defaultStyle);

  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 80) {
        setStyle({
          logo: { height: 64, color: primary },
          nav: {
            background: `linear-gradient(to right, white 25%, ${secondary} 75%)`,
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

  const { logo, nav, plus } = style ?? defaultStyle;

  return { logo, nav, plus };
};
