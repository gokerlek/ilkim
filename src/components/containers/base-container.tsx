import { FC, ReactNode } from "react";
import clsx from "clsx";

interface BaseContainerProps {
  children?: ReactNode;
  extra?: string;
}

export const BaseContainer: FC<BaseContainerProps> = ({ children, extra }) => {
  return (
    <div
      className={clsx(
        "mx-auto flex h-full w-full  max-w-7xl items-center justify-between px-10",
        extra,
      )}
    >
      {children}
    </div>
  );
};
