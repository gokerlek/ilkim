import { ReactElement } from "react";
import { paths } from "./paths";

import Home from "./pages/home.tsx";
import { Main } from "@/layouts/main.tsx";
import AboutMe from "@/pages/about-me.tsx";
import WhatToExpect from "@/pages/what_to_expect.tsx";
import Contact from "@/pages/contact.tsx";

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
      {
        path: paths.about_me,
        element: <AboutMe />,
      },
      {
        path: paths.what_to_expect,
        element: <WhatToExpect />,
      },
      {
        path: paths.contact,
        element: <Contact />,
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
