import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HOME_ROUTE,
  HOME_ROUTE2,
} from "../../../data/router/utils/utils__publicRoutes";
import Home from "../pages/Home";
import Home2 from "../pages/Home2";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={HOME_ROUTE2} element={<Home2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
