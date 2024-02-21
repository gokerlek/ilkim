export type AuthRoutes = {
  login: string;
  forgot_password: string;
};

export type DashboardRoutes = {
  main: string;
};

export type Routes = AuthRoutes &
  DashboardRoutes & {
    access_denied: string;
  };

export const auth: AuthRoutes = {
  login: "/login",
  forgot_password: "/forgot-password",
};

export const dashboard: DashboardRoutes = {
  main: "/",
};

export const paths: Routes = {
  ...auth,
  ...dashboard,
  access_denied: "/access-denied",
};
