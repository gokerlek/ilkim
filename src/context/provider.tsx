import { FC, ReactNode } from "react";

import { AuthProvider } from "./authProvider.tsx";

interface ProviderProps {
  children: ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
  const components = [AuthProvider];

  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

export default Provider;
