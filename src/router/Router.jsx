import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
