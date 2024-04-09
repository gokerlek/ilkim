import { FC } from "react";
import { ContactForm } from "@/components/contact/contact-form.tsx";
import contact from "@/assets/contact.jpg";

const Contact: FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-10 md:flex-row">
      <div className="hidden flex-1 items-center justify-center md:flex">
        <img
          className="h-full max-h-[500px] w-full rounded-lg  object-cover shadow-lg"
          loading="lazy"
          src={contact}
          alt="contact"
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
