import { Drawer } from "@/components/modals/drawer.tsx";
import { PlusIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { Navigation } from "@/components/navigation";
import { FC } from "react";
import { useHeaderScroll } from "@/hooks/useHeaderScroll.tsx";
import { useMenu } from "@/components/header/Menu.tsx";

export const MobileMenu: FC = () => {
  const { plus } = useHeaderScroll();

  const { open, setOpen, close, toggle } = useMenu();

  return (
    <Drawer open={open} setOpen={setOpen}>
      <PlusIcon
        style={{
          ...plus,
          transition: "0.5s",
        }}
        className={clsx(
          "absolute right-0 top-4 z-[100000]  rotate-45 cursor-pointer text-white opacity-0",
        )}
        onClick={toggle}
      />
      <div className="z-[100] flex  h-dvh items-center rounded bg-secondary p-4">
        <Navigation mode="mobile" close={close} />
      </div>
    </Drawer>
  );
};
