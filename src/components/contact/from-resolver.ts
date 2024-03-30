import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const fromResolver = yupResolver(
  yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Enter an email address like example@mysite.com")
      .required("Please enter your email"),
    subject: yup.string().required("please enter a subject"),
    message: yup.string().required("Please enter a message"),
  }),
);
