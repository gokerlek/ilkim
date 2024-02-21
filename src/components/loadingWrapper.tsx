import { FC, ReactNode } from "react";
import { Transition } from "@headlessui/react";
import { Loading } from "./loading.tsx";

interface LoadingWrapperProps {
  loading: boolean;
  children: ReactNode;
}

const LoadingWrapper: FC<LoadingWrapperProps> = ({ loading, children }) => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <Loading loading={loading} />

      <Transition
        show={!loading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="h-full w-full"
      >
        {children}
      </Transition>
    </div>
  );
};

export default LoadingWrapper;
