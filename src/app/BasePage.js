import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ContentRoute, LayoutSplashScreen } from "../_metronic/layout";
import Test from "./modules/Test/Test";

const NestedPage = lazy(() => import("./modules/NestedPage/NestedPage"));

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Routes>
        {
          /* Redirect from root URL to /test. */
          <Route index element={<Navigate to="/testmest" replace={true} />} />
        }
        <Route path="/testmest" element={<Test />} />
        <Route path="/google-material/*" element={<NestedPage />} />
        <Route element={<Navigate to="error/error-v1" />} />
      </Routes>
    </Suspense>
  );
}
