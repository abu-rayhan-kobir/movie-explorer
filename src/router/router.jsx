import { createBrowserRouter } from "react-router";
import App from "../App";
import Movies from "../pages/Movies";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";



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
        path: "movies/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />, 
      },
    ],
  },
];

export const router = createBrowserRouter (routes);