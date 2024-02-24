import { FC } from "react";
import { navigationItems } from "@/constants.tsx";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const Navigation: FC = () => {
  return (
    <div className=" space-x-5 ">
      {navigationItems.map((item) => {
        const { name, path } = item;
        return (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              clsx(
                "text-lg capitalize",
                { "font-bold text-primary": isActive },
                { "capitalize text-gray-800": !isActive },
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
