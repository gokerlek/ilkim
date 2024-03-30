import { FC } from "react";
import Markdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { BaseContainer } from "@/components/containers/base-container.tsx";

const AboutMe: FC = () => {
  const { t } = useTranslation();

  const exampleList = t("example_list", { returnObjects: true }) as string[];
  const education_content = t("education_content", {
    returnObjects: true,
  }) as string[];

  const certifications_content = t("certifications_content", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <BaseContainer>
        <div className=" max-w-5xl space-y-5 pb-20 md:pb-40">
          <div className="title">{t("my_journey")}</div>
          <Markdown className="paragraph space-y-5 text-justify">
            {t("my_journey_content")}
          </Markdown>
        </div>
      </BaseContainer>

      <section className="bg-secondary/20 py-20 md:py-40">
        <BaseContainer>
          <div className=" max-w-5xl space-y-5">
            <div className="title">{t("my_therapy_approach")}</div>
            <Markdown className="paragraph space-y-5 text-justify">
              {t("my_therapy_approach_content")}
            </Markdown>
            <div className="subtitle">
              {t("some_examples_of_issues_i_work_with_include")}
            </div>
            <ul className="list max-w-2xl">
              {exampleList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </BaseContainer>
      </section>

      <section className=" pt-20 md:pt-40">
        <BaseContainer>
          <div className=" max-w-5xl space-y-5">
            <div className="subtitle">{t("education")}</div>
            <ul className="list max-w-2xl">
              {education_content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="subtitle">{t("certifications")}</div>
            <ul className="list max-w-2xl">
              {certifications_content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </BaseContainer>
      </section>
    </>
  );
};

export default AboutMe;
