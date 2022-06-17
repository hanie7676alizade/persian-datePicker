import React, { ReactNode } from "react";

const HomePage: React.FC = React.lazy(() => import("../screens/HomePage"));
interface IRoute {
  path: string;
  element: ReactNode;
  subRoute: TRouteList;
}

type TRouteList = IRoute[];
const routeList: TRouteList = [
  {
    path: "/",
    element: <HomePage />,
    subRoute: [],
  },
];
export default routeList;
