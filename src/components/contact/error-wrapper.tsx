import { isNotNil } from "ramda";
import { FC, ReactNode } from "react";

interface ErrorWrapperProps {
  message: string | undefined;
  children: ReactNode;
}
export const ErrorWrapper: FC<ErrorWrapperProps> = ({ message, children }) => {
  return (
    <div className="relative">
      {children}
      {isNotNil(message) && (
        <div className=" absolute -top-4 text-[10px] text-red-500">
          {message}
        </div>
      )}
    </div>
  );
};
