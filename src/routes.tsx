import { ReactElement } from "react";
import { paths } from "./paths";

import Home from "./pages/Home";
import { Main } from "@/layouts/main.tsx";

interface Route {
  path: string;
  element: ReactElement | ReactElement[];
}

interface NestedRoute {
  element: ReactElement | ReactElement[];
  children: Route[];
}

const routes: (Route | NestedRoute)[] = [
  {
    element: <Main />,
    children: [
      {
        path: paths.main,
        element: <Home />,
      },
    ],
  },

  // {
  //   path: paths.access_denied,
  //   element: <AccessDenied />,
  // },
  //
  // {
  //   path: "*",
  //   element: <NoMatch />,
  // },
];

export default routes;
