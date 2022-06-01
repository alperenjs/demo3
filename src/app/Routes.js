/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";

export function Routess() {
  const isAuthorized = true;

  return (
    <Routes>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route path="/*" element={<AuthPage />} />
      ) : (
        /*Otherwise Navigate to root page (`/`)*/
        <Route path="/auth/*" element={<Navigate to="/" />} />
      )}

      <Route path="/error" element={<ErrorsPage />} />
      <Route path="/logout" element={<Logout />} />

      {!isAuthorized ? (
        /*Navigate to `/auth` when user is not authorized*/
        <Route path="*" element={<Navigate to="/auth/login" />} />
      ) : (
        <Route element={<Layout />}>
          <Route path="/*" element={<BasePage />} />
        </Route>
      )}
    </Routes>
  );
}
