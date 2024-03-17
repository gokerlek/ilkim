import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Provider from "@/context/provider.tsx";
import { BrowserRouter } from "react-router-dom";

import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
);
