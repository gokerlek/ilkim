import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer.tsx";
import { BaseContainer } from "@/components/containers/base-container.tsx";

export const Main: FC = () => {
  return (
    <div className="flex  flex-col bg-stone-50">
      <Header />
      <div className="flex h-fit min-h-[calc(100vh-542px)] flex-col  py-10 sm:py-40">
        <BaseContainer>
          <Outlet />
        </BaseContainer>
      </div>
      <Footer />
    </div>
  );
};
