import { FC } from "react";
import { ContactForm } from "@/components/contact/contact-form.tsx";

const Contact: FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-10 md:flex-row">
      <div className="hidden flex-1 items-center justify-center md:flex">
        <img
          className="h-fit max-w-[450px]"
          src="/icons/envelope.svg"
          alt="contact"
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
