import { FC, ReactNode } from "react";
import clsx from "clsx";

interface BaseContainerProps {
  children?: ReactNode;
  extra?: string;
  size?: "base" | "small";
}

export const BaseContainer: FC<BaseContainerProps> = ({
  children,
  extra,
  size = "small",
}) => {
  return (
    <div
      className={clsx(
        "mx-auto flex h-full w-full  items-center justify-between px-10",
        { "max-w-5xl": size === "small", "max-w-7xl": size === "base" },
        extra,
      )}
    >
      {children}
    </div>
  );
};
