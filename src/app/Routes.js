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
          <Route element={<Layout />}>
            {/* <Route path="/*" element={<BasePage />} /> */}
            {
              /* Redirect from root URL to /test. */
              <Route
                index
                element={<Navigate to="/testmest" replace={true} />}
              />
            }
            <Route path="/testmest" element={<Test />} />
            <Route path="/google-material/*" element={<NestedPage />} />
          </Route>
        )}

        <Route path="*" element={<ErrorsPage />} />
      </Routes>
    </Suspense>
  );
}
