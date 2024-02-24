import { FC, ReactNode } from "react";
import { ButtonPurpose, Size, WidthType } from "@/constants.tsx";
import { useButtonProps } from "@/components/buttons/useButtonProps.ts";
import SVG from "react-inlinesvg";
import loadingIcon from "@/assets/icons/loading.svg";

interface ButtonProps {
  children: ReactNode;
  size?: Size;
  purpose?: ButtonPurpose;
  width?: WidthType;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  size,
  width,
  purpose,
  disabled,
  loading,
}) => {
  const { buttonClasses } = useButtonProps({
    size,
    width,
    purpose,
    loading,
    disabled,
  });

  return (
    <button disabled={disabled} className={buttonClasses}>
      {loading && (
        <div className="absolute inset-0 bg-black/20 p-2">
          <SVG src={loadingIcon} />
        </div>
      )}
      {children}
    </button>
  );
};
