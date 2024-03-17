import { FC } from "react";
import SVG from "react-inlinesvg";
import logoIcon from "@/assets/icons/logo.svg";
import { BaseContainer } from "@/components/containers/base-container.tsx";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";

export const Footer: FC = () => {
  return (
    <div className=" h-48 w-full bg-secondary ">
      <BaseContainer>
        <div className="flex w-full grow flex-col items-center space-y-2 text-sm text-gray-600 md:flex-row md:justify-between md:text-base">
          <SVG src={logoIcon} className="h-16 w-fit  md:h-20" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-6 w-6" />
              <span>humaninthebeing.therapy@gmail.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6" />
              <span>+31 6 27369941 </span>
            </div>
          </div>
        </div>
      </BaseContainer>

      <div className=" mx-auto  bg-white py-2 text-center text-[10px] font-light">
        © 2024 Human in the Being
      </div>
    </div>
  );
};
