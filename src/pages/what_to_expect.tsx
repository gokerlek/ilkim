import { FC } from "react";
import { BaseContainer } from "@/components/containers/base-container.tsx";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import Markdown from "react-markdown";

const WhatToExpect: FC = () => {
  const { t } = useTranslation();
  const what_to_expect_content = t("what_to_expect_content", {
    returnObjects: true,
  }) as string[];
  return (
    <>
      <BaseContainer>
        <div className=" max-w-5xl space-y-5 pb-20 md:pb-40">
          <div className="title">{t("session_flow")}</div>
          <div className="flex flex-col gap-5">
            {what_to_expect_content.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "paragraph flex  items-center gap-5 hyphens-auto rounded-lg bg-secondary/20 p-5 text-justify md:gap-8 md:p-8",
                  {
                    "flex-row-reverse": index % 2 !== 0,
                    "flex-row": index % 2 === 0,
                  },
                )}
              >
                <div className="text-6xl font-black text-black/10 md:text-8xl">
                  {index + 1}
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </BaseContainer>

      <section className="bg-secondary/20 py-20 md:py-40">
        <BaseContainer>
          <div className=" max-w-5xl space-y-5">
            <div className="title">{t("what_do_i_not_work_with")}</div>
            <div className="paragraph space-y-5 hyphens-auto text-justify">
              {t("what_do_i_not_work_with_content")}
            </div>

            <div className="space-y-5 hyphens-auto text-pretty text-justify text-base font-semibold text-gray-700 md:text-lg">
              {t("i_do_not_have_a_waitlist_at_the_moment")}
            </div>

            <div className="subtitle">{t("fees")}</div>

            <Markdown className="paragraph space-y-5 text-justify prose-strong:font-semibold">
              {t("fees_content")}
            </Markdown>

            <div className="subtitle space-y-5 hyphens-auto text-justify">
              {t("i_do_not_work_with_insurances")}
            </div>

            <div className="paragraph space-y-5 hyphens-auto text-justify">
              {t("i_do_not_work_with_insurances_content")}
            </div>
          </div>
        </BaseContainer>
      </section>
    </>
  );
};

export default WhatToExpect;
