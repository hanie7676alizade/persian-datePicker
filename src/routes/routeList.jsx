import { lazy } from "react";

const HomePage = lazy(() => import("../screens/HomePage"));

const routeList = [
  {
    path: "/",
    element: <HomePage />,
    subRoute: [],
  },
];
export default routeList;
