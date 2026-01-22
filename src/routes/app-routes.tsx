import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./private-route";
import NetflixSeries from "../views/netflix-sereis";

const routes = [
  // {
  //   path: "/home",
  //   Component: Home,
  //   isPrivate: false,
  // },
  {
    path: "/netflix-series",
    Component: NetflixSeries,
    isPrivate: false,
  },
];

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, Component, isPrivate }) => (
        <Route
          key={path}
          path={path}
          element={
            isPrivate ? (
              <PrivateRoute component={<Component />} />
            ) : (
              <Component />
            )
          }
        />
      ))}

      <Route path="*" element={<Navigate to="/netflix-series" />} />
    </Routes>
  );
}
