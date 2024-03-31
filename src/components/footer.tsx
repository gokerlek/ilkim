import { FC } from "react";
import SVG from "react-inlinesvg";
import logoIcon from "@/assets/icons/logo.svg";
import { BaseContainer } from "@/components/containers/base-container.tsx";
import { ContactInfo } from "@/components/contact/contact-info.tsx";

export const Footer: FC = () => {
  return (
    <div className=" h-48 w-full bg-secondary ">
      <BaseContainer size="base">
        <div className="flex w-full grow flex-col gap-5 text-sm text-gray-600 md:flex-row md:items-center md:justify-between md:text-base">
          <SVG src={logoIcon} className=" h-fit w-40  md:h-48" />

          <ContactInfo />
        </div>
      </BaseContainer>

      <div className=" mx-auto  bg-white py-2 text-center text-[10px] font-light">
        © 2024 Human in the Being
      </div>
    </div>
  );
};
