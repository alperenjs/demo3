/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */
import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout, LayoutSplashScreen } from "../_metronic/layout";
import { AuthPage } from "./pages/Auth";
import ErrorsPage from "./pages/ErrorsExamples/ErrorsPage";
import Unauthorized from "./pages/ErrorsExamples/Unauthorized";
import ProtectedRoute from "./base/components/ProtectedRoute";

import Test from "./pages/Test/Test";
import ExamplePage1 from "./pages/ExampleModule/ExamplePage1";

const NestedPage = lazy(() => import("./pages/NestedPage/routes"));

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
          <Route path="/auth/*" element={<Navigate to="/module_1/dashboard" />} />
        )}

        {!isAuthorized ? (
          /*Navigate to `/auth` when user is not authorized*/
          <Route path="*" element={<Navigate to="/auth/login" />} />
        ) : (
          <Route element={<Layout />} /* Main Content with Layout */>
            <Route path="/" element={<Navigate to="/module_1/dashboard" />} />
            <Route path="/module_1/dashboard" element={<Test />} />
            <Route
              path="/module_2/examplePage1"
              element={<ExamplePage1 />}
            />
            <Route element={<ProtectedRoute allowedRoles={[1, 5, 6]} />}>
              <Route path="/module_1/google-material/*" element={<NestedPage />} />
            </Route>
          </Route>
        )}

        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<ErrorsPage /> /* Catch All */} />
      </Routes>
    </Suspense>
  );
}
