import { FC } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";

export const ContactInfo: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center space-x-2">
        <EnvelopeIcon className="h-6 w-6" />
        <span>humaninthebeing.therapy@gmail.com</span>
      </div>

      <div className="flex items-center space-x-2">
        <PhoneIcon className="h-6 w-6" />
        <span>+31 6 31217691 </span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="font-bold">NIP </span>
        <span className="hidden md:block">
          (Nederlands Instituut van Psychologen){" "}
        </span>
        <span className="font-bold"> Code:</span>
        <span>245024</span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="font-bold">KVK: </span>
        <span>8677907</span>
      </div>
    </div>
  );
};
