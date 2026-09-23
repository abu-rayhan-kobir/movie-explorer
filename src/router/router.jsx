import { createBrowserRouter } from "react-router";
import App from "../App";
import Movies from "../pages/Movies";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "*",
        element: <NotFound />, 
      },
    ],
  },
];

export const router = createBrowserRouter (routes);