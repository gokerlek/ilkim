export type DashboardRoutes = {
  main: string;
  about_me: string;
  what_to_expect: string;
  contact: string;
};

export type Routes = DashboardRoutes & {
  access_denied: string;
};

export const dashboard: DashboardRoutes = {
  main: "/",
  about_me: "/about-me",
  what_to_expect: "/what-to-expect",
  contact: "/contact",
};

export const paths: Routes = {
  ...dashboard,
  access_denied: "/access-denied",
};
