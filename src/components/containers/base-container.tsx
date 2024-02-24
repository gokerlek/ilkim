import { FC, ReactNode } from "react";

interface BaseContainerProps {
  children?: ReactNode;
}

export const BaseContainer: FC<BaseContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto flex  w-full max-w-7xl items-center justify-between">
      {children}
    </div>
  );
};
