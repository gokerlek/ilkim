import { FC } from "react";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";
import banner2 from "@/assets/banner2.jpg";

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto  space-y-5">
      <div className="title">{t("home_page_title")}</div>
      <Markdown className="paragraph space-y-5 hyphens-auto text-pretty text-justify">
        {t("home_page_description")}
      </Markdown>

      <img
        src={banner2}
        alt="placeholder"
        className="h-40 w-full rounded-lg object-cover shadow sm:h-96"
      />
    </div>
  );
};

export default Home;
