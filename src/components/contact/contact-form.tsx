import { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/buttons/button.tsx";
import { BUTTON_PURPOSE } from "@/constants.tsx";
import { ErrorWrapper } from "@/components/contact/error-wrapper.tsx";
import { fromResolver } from "@/components/contact/from-resolver.ts";
import emailjs from "emailjs-com";

const label_class = "block text-sm font-medium leading-6 text-gray-900";
const input_class =
  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

const SERVICE_ID = "service_4r5w5ws";
const TEMPLATE_ID = "template_uh73yb3";
const USER_ID = "5AeG8Md_t1sd9fCDM";

export const ContactForm: FC = () => {
  const formRef = useRef<HTMLFormElement | string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: fromResolver,
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    const mail = formRef.current;
    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, mail, USER_ID)
      .then(
        (response) => {
          console.log("Email başarıyla gönderildi!", response);
        },
        (error) => {
          console.log("Email gönderme hatası:", error);
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const { name, email, subject, message } = errors ?? {};

  return (
    <div className="flex-1 space-y-5">
      <div className="title">Get in touch</div>
      <form
        ref={formRef as any}
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-2">
          <label className={label_class} htmlFor="name">
            Name
          </label>

          <ErrorWrapper message={name?.message}>
            <input
              className={input_class}
              type="text"
              id="name"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
          </ErrorWrapper>
        </div>

        <div className="flex flex-col space-y-2">
          <label className={label_class} htmlFor="email">
            Email
          </label>

          <ErrorWrapper message={email?.message}>
            <input
              className={input_class}
              type="email"
              id="email"
              placeholder="Your email"
              {...register("email", { required: true })}
            />
          </ErrorWrapper>
        </div>

        <div className="flex flex-col space-y-2">
          <label className={label_class} htmlFor="subject">
            Subject
          </label>

          <ErrorWrapper message={subject?.message}>
            <input
              className={input_class}
              type="text"
              id="subject"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />
          </ErrorWrapper>
        </div>

        <div className="flex flex-col space-y-2">
          <label className={label_class} htmlFor="message">
            Message
          </label>

          <ErrorWrapper message={message?.message}>
            <textarea
              className={input_class}
              id="message"
              placeholder="Your message"
              rows={4}
              {...register("message", { required: true })}
            />
          </ErrorWrapper>
        </div>

        <Button width="full" loading={loading} purpose={BUTTON_PURPOSE.GRAY}>
          Send
        </Button>
      </form>
    </div>
  );
};
