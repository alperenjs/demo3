import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";

export default function adminPage() {
  return (
    <Routes>
      <Route index element={<Navigate to="/admin/page1" />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/module1/page3" element={<Page3 />} />
      <Route path="/module1/module2/page4" element={<Page4 />} />
    </Routes>
  );
}
