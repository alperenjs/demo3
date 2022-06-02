import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AutocompleteExamplesPage from "./inputs/AutocompleteExamplesPage";
import Duru from "./inputs/Duru";
import Test2 from "./inputs/Test2";

export default function nestedPage() {
  return (
    <Routes>
      <Route index element={<Navigate to="/google-material/inputs/autocomplete" />} />
      <Route path="/inputs/autocomplete" element={<AutocompleteExamplesPage />} />
      <Route path="/inputs/test2" element={<Test2 />} />
      <Route path="/inputs/duru" element={<Duru />} />
    </Routes>
  );
}
