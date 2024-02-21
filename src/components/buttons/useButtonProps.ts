import clsx from "clsx";
import {
  BUTTON_PURPOSE,
  ButtonPurpose,
  SIZE,
  Size,
  WIDTH,
  WidthType,
} from "@/constants.tsx";

interface ButtonProps {
  size?: Size;
  width?: WidthType;
  purpose?: ButtonPurpose;
  loading?: boolean;
  disabled?: boolean;
}

const sizeClassMap: Record<Size, string> = {
  [SIZE.S]: "px-2 py-1 text-sm",
  [SIZE.M]: "px-4 py-2 text-base",
  [SIZE.L]: "px-6 py-3 text-lg",
};

const widthClassMap: Record<WidthType, string> = {
  [WIDTH.FULL]: "w-full",
  [WIDTH.FIT]: "w-fit",
  [WIDTH.HALF]: "w-1/2",
};

const purposeClassMap: Record<ButtonPurpose, string> = {
  [BUTTON_PURPOSE.BLUE]: "bg-blue-500 hover:bg-blue-600",
  [BUTTON_PURPOSE.RED]: "bg-red-500 hover:bg-red-600",
  [BUTTON_PURPOSE.GREEN]: "bg-green-500 hover:bg-green-600",
  [BUTTON_PURPOSE.GRAY]: "bg-gray-500 hover:bg-gray-600",
  [BUTTON_PURPOSE.WARNING]: "bg-yellow-500 hover:bg-yellow-600",
  [BUTTON_PURPOSE.DELETE]: "bg-red-500 hover:bg-red-600",
};

const disabledPurposeClassMap: Record<ButtonPurpose, string> = {
  [BUTTON_PURPOSE.BLUE]: "bg-blue-300",
  [BUTTON_PURPOSE.RED]: "bg-red-300",
  [BUTTON_PURPOSE.GREEN]: "bg-green-300",
  [BUTTON_PURPOSE.GRAY]: "bg-gray-300",
  [BUTTON_PURPOSE.WARNING]: "bg-yellow-300",
  [BUTTON_PURPOSE.DELETE]: "bg-red-300",
};

export const useButtonProps = ({
  size = SIZE.M,
  width = WIDTH.FIT,
  purpose = BUTTON_PURPOSE.BLUE,
  loading,
  disabled,
}: ButtonProps) => {
  const baseClasses =
    "rounded-md text-white font-semibold inline-flex items-center justify-center gap-2 transition-colors duration-200";

  const sizeClasses = sizeClassMap[size] || "px-4 py-2 text-base";

  const widthClasses = widthClassMap[width];

  const purposeClasses =
    purposeClassMap[purpose] || "bg-blue-500 hover:bg-blue-600";

  const buttonClasses = clsx(baseClasses, sizeClasses, widthClasses, {
    [purposeClasses]: !disabled && !loading,
    [disabledPurposeClassMap[purpose]]: disabled || loading,
    "cursor-not-allowed": disabled || loading,
    "relative overflow-hidden": loading,
  });

  return { buttonClasses };
};
