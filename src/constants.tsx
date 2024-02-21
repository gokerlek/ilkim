import { paths } from "./paths.ts";
import { component_permissions } from "./permissions.ts";

// SIDEBAR ITEMS
type sidebarItems = {
  id: number;
  name: string;
  path: string;
  icon: string;
  icon_active: string;
  permissions?: number[];
};

export const sidebarItems: sidebarItems[] = [
  {
    id: 1,
    name: "home",
    path: paths.main,
    icon: "home",
    icon_active: "home active",
    permissions: component_permissions.home,
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
