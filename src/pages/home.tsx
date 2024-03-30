import { FC } from "react";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto  space-y-5">
      <div className="title">{t("home_page_title")}</div>
      <Markdown className="paragraph space-y-5 text-justify">
        {t("home_page_description")}
      </Markdown>
    </div>
  );
};

export default Home;
