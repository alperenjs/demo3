import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ allowedRoles }) {
  const auth = { user: { name: "alperen" }, roles: [1, 2, 3] }; //getfrom store

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="/auth/login" replace />
  );
}

export default ProtectedRoute;
