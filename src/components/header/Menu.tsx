import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
interface MenuCtx {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  close: () => void;
  toggle: () => void;
}

interface MenuProps {
  children: ReactNode;
}

const DefaultMenuCtx: MenuCtx = {
  open: false,
  setOpen: () => {},
  close: () => {},
  toggle: () => {},
};

const MenuContext = createContext<MenuCtx>(DefaultMenuCtx);

export const useMenu = () => useContext(MenuContext);
export const Menu: FC<MenuProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const toggle = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpen((prev) => !prev);
  }, []);

  const values: MenuCtx = {
    open,
    setOpen,
    close,
    toggle,
  };

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
};
