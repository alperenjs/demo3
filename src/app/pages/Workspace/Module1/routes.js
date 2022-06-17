import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";

export default function Module1() {
  return (
    <Routes>
      <Route index element={<Navigate to="/module1/page1" />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/division/page2" element={<Page2 />} />
      <Route path="/division/division2/page3" element={<Page3 />} />
      <Route path="/division/division2/page4" element={<Page4 />} />
    </Routes>
  );
}
