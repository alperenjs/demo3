/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */
import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout, LayoutSplashScreen } from "../_metronic/layout";
import { AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import Unauthorized from "./modules/ErrorsExamples/Unauthorized";
import ProtectedRoute from "./base/ProtectedRoute";

import Test from "./modules/Test/Test";

const NestedPage = lazy(() => import("./modules/NestedPage/routes"));

export function Routess() {
  const isAuthorized = true;

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Routes>
        {!isAuthorized ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <Route path="/*" element={<AuthPage />} />
        ) : (
          /*Otherwise Navigate to root page (`/`)*/
          <Route path="/auth/*" element={<Navigate to="/" />} />
        )}

        {!isAuthorized ? (
          /*Navigate to `/auth` when user is not authorized*/
          <Route path="*" element={<Navigate to="/auth/login" />} />
        ) : (
          <Route element={<Layout />} /* Main Content with Layout */>
            <Route path="/" element={<Test />} />
            <Route element={<ProtectedRoute allowedRoles={[4, 5, 6]} />}>
              <Route path="/google-material/*" element={<NestedPage />} />
            </Route>
          </Route>
        )}

        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<ErrorsPage /> /* Catch All */} />
      </Routes>
    </Suspense>
  );
}
