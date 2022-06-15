import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../services/authentication.service";

function ProtectedRoute({ allowedRoles }) {
  const user = AuthService.getUser();

  return AuthService.isAuthorized(allowedRoles) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="/auth/login" replace />
  );
}

export default ProtectedRoute;
