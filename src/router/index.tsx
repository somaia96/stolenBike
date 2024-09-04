import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Layout from "../pages/Layout";
import React, { Suspense } from "react";
import Loading from "../components/Loading";
const Home = React.lazy(() => import("../pages/Home"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<PageNotFound />} >
        <Route index element={<>
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        </>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
