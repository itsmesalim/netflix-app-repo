import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";

export default function PrivateRoute({
  component,
}: {
  component: ReactElement;
}) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;
  return component;
}
