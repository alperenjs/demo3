import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ErrorPage1 } from "./ErrorPage1";
import { ErrorPage2 } from "./ErrorPage2";
import { ErrorPage3 } from "./ErrorPage3";
import { ErrorPage4 } from "./ErrorPage4";
import { ErrorPage5 } from "./ErrorPage5";
import { ErrorPage6 } from "./ErrorPage6";

export default function ErrorsPage() {
  return (
    <Routes>
      <Route
        element={<Navigate from="/error" exact={true} to="/error/error-v1" />}
      />

      <Route path="/error/error-v1" element={<ErrorPage1 />} />
      <Route path="/error/error-v2" element={<ErrorPage2 />} />
      <Route path="/error/error-v3" element={<ErrorPage3 />} />
      <Route path="/error/error-v4" element={<ErrorPage4 />} />
      <Route path="/error/error-v5" element={<ErrorPage5 />} />
      <Route path="/error/error-v6" element={<ErrorPage6 />} />
    </Routes>
  );
}
