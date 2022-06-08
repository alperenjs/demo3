import React, { lazy, Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Layout, LayoutSplashScreen } from "../_metronic/layout";
import ProtectedRoute from "./base/components/ProtectedRoute";
import { AuthPage } from "./pages/Auth";
import ErrorsPage from "./pages/ErrorsExamples/ErrorsPage";
import Unauthorized from "./pages/ErrorsExamples/Unauthorized";
import ExamplePage1 from "./pages/ExampleModule/ExamplePage1";
import Test from "./pages/Test/Test";
import AuthService from "./base/services/authentication.service";

const NestedPage = lazy(() => import("./pages/NestedPage/routes"));

export function Routess() {
  const [isAuthorized, setisAuth] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setisAuth(!AuthService.isTokenExpired());
  }, [location, setisAuth]);

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Routes>
        {!isAuthorized ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <Route path="/*" element={<AuthPage />} />
        ) : (
          /*Otherwise Navigate to root page (`/`)*/
          <Route element={<Layout />} /* Main Content with Layout */>
            <Route path="/*" element={<Navigate to="/module_1/dashboard" />} />
            <Route path="/module_1/dashboard" element={<Test />} />
            <Route path="/module_2/examplePage1" element={<ExamplePage1 />} />
            {/* module */}
            <Route element={<ProtectedRoute allowedRoles={[9]} />}>
              <Route
                path="/module_1/google-material/*"
                element={<NestedPage />}
              />
            </Route>
            {/* module */}
          </Route>
        )}

        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<ErrorsPage /> /* Catch All */} />
      </Routes>
    </Suspense>
  );
}
