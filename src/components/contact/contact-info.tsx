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
        <span>+31 6 27369941 </span>
      </div>
    </div>
  );
};
