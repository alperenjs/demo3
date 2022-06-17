import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Module1 = lazy(() => import("./Module1/routes"));
const SurveyList = lazy(() => import("./SurveyList/routes"));

export default function workspace() {
  return (
    <Routes>
      <Route index element={<Navigate to="/module1/page1" />} />
      <Route path="/module1/*" element={<Module1 />} />
      <Route path="/surveylist/*" element={<SurveyList />} />
    </Routes>
  );
}
