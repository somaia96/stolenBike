import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Layout from "../pages/Layout";
import React from "react";
const Home = React.lazy(() => import("../pages/Home"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<PageNotFound />} >
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
