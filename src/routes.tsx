import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./views/dashboard";
import Splash from "./views/splash";
import { RouteTypes } from "./routes.types";

const Routes: React.FC = () => {
  const routes: RouteTypes = [
    {
      path: "/admin",
      element: <Layout />,
      children: [{ path: "dashboard", element: <Dashboard /> }],
    },
    {
      path: "/",
      children: [{ path: "", element: <Splash /> }],
    },
    { path: "*", element: <Navigate to="/admin/dashboard" replace /> },
  ];

  return useRoutes(routes);
};

export default Routes;
