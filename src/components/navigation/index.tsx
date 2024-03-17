import { FC } from "react";
import { navigationItems } from "@/constants.tsx";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface NavigationProps {
  mode: "mobile" | "desktop";
  close?: () => void;
}
export const Navigation: FC<NavigationProps> = ({
  mode = "desktop",
  close,
}) => {
  return (
    <div
      className={clsx(" min-w-fit ", {
        "hidden space-x-5 md:block": mode === "desktop",
        "flex flex-col gap-5 pl-10 md:hidden": mode === "mobile",
      })}
    >
      {navigationItems.map((item) => {
        const { name, path } = item;
        return (
          <NavLink
            to={path}
            onClick={close}
            key={name}
            className={({ isActive }) =>
              clsx(
                "hover:text-text-primary focus-visible:none text-lg capitalize transition-all  duration-300 ease-in-out focus:outline-none",
                { " font-bold text-gray-800": isActive },
                { "capitalize text-white": !isActive },
              )
            }
          >
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};
