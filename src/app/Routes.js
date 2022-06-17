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
import { AdminLayout } from "../_metronic/layout/components/AdminLayout";

const AdminPages = lazy(() => import("./pages/Admin/routes"));
const WorkspacePages = lazy(() => import("./pages/Workspace/routes"));

export function Routess() {
  const [isAuthenticated, setisAuth] = useState(() =>
    AuthService.isAuthenticated()
  );

  const location = useLocation();

  useEffect(() => {
    setisAuth(AuthService.isAuthenticated());
  }, [location, setisAuth]);

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Routes>
        {!isAuthenticated ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <Route path="/*" element={<AuthPage />} />
        ) : (
          /*Otherwise Navigate to root page (`/`)*/
          <>
            <Route element={<Layout />} /* Main Content with Layout */>
              {/* <Route path="/*" element={<Navigate to="/module1/page1" />} /> */}
              {/* module */}
              <Route element={<ProtectedRoute allowedRoles={[1]} />}>
                <Route path="/*" element={<WorkspacePages />} />
              </Route>
              {/* module */}
            </Route>
            <Route element={<AdminLayout />}>
              <Route path="/admin/*" element={<AdminPages />} />
            </Route>
          </>
        )}
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<ErrorsPage /> /* Catch All */} />
      </Routes>
    </Suspense>
  );
}
