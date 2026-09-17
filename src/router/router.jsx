import { createBrowserRouter } from "react-router";

import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "movies",
        Component: Movies,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
