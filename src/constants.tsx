import { paths } from "./paths.ts";

// SIDEBAR ITEMS
type navigationItems = {
  id: number;
  name: string;
  path: string;
};

export const navigationItems: navigationItems[] = [
  {
    id: 1,
    name: "Home",
    path: paths.main,
  },
  {
    id: 2,
    name: "About me",
    path: paths.about_me,
  },
  {
    id: 3,
    name: "What to expect",
    path: paths.what_to_expect,
  },
  {
    id: 4,
    name: "Contact",
    path: paths.contact,
  },
];

// ENDPOINTS
export const END_POINT = {
  // Auth
  LOGIN: "login",
  FORGOT_PASSWORD: "forgot_password",
  RESET_PASSWORD: "reset_password",

  // Users
  GET_USER: "user",
};

export const SIZE = {
  S: "S",
  M: "M",
  L: "L",
} as const;

export const WIDTH = {
  FULL: "full",
  FIT: "fit",
  HALF: "half",
} as const;

export const BUTTON_PURPOSE = {
  BLUE: "blue",
  GRAY: "gray",
  RED: "red",
  GREEN: "green",
  WARNING: "warning",
  DELETE: "delete",
} as const;

export type ButtonPurpose =
  (typeof BUTTON_PURPOSE)[keyof typeof BUTTON_PURPOSE];

export type Size = (typeof SIZE)[keyof typeof SIZE];

export type WidthType = (typeof WIDTH)[keyof typeof WIDTH];

export const color = {
  primary: "#009193",
  secondary: "#b2cbe3",
};
