import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export const Main: FC = () => {
  return (
    <div className="flex h-screen min-h-screen flex-col bg-stone-50">
      <Header />
      <div className="flex flex-1 flex-row overflow-y-hidden">
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>

        <Sidebar />
      </div>
    </div>
  );
};
