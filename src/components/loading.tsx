import { FC } from "react";
import { Transition } from "@headlessui/react";

interface LoadingProps {
  loading: boolean;
}

export const Loading: FC<LoadingProps> = ({ loading }) => {
  return (
    <Transition
      show={loading}
      enter="transition-opacity duration-300 cubic-bezier(0.4, 0, 0.2, 1)"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300 cubic-bezier(0.4, 0, 0.2, 1)"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-10 h-10 text-gray-600">
        <div className="animate-pulse">loading...</div>
      </div>
    </Transition>
  );
};
