import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer.tsx";

export const Main: FC = () => {
  return (
    <div className="flex  flex-col bg-stone-50">
      <Header />
      <div className="flex h-fit min-h-screen flex-col ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
