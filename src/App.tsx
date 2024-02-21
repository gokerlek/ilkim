import "./App.css";
import routes from "./routes.tsx";
import { useRoutes } from "react-router-dom";

const App = () => {
  return useRoutes(routes);
};

export default App;
