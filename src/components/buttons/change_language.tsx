import { FC } from "react";
import i18n from "i18next";
import SVG from "react-inlinesvg";
import trFlag from "@/assets/icons/flag/tr.svg";
import enFlag from "@/assets/icons/flag/en.svg";

const ChangeLanguageButton: FC = () => {
  const isEnglish = i18n.language === "en";
  return (
    <SVG
      className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "tr" : "en")}
      src={isEnglish ? trFlag : enFlag}
    />
  );
};

export default ChangeLanguageButton;
