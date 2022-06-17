import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Survey from "./Survey/Survey";

export default function SurveyRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="/module1/page1" />} />
      <Route path="/surveydetail/:surveyId" element={<Survey />} />
    </Routes>
  );
}
