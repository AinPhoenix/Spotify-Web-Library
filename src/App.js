import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingSection from "./components/Sections/Loading";
import LoadingPage from "./pages/Loading";
import LoginPage, { loader as loginLoader } from "./pages/Login";
// import Root from "./pages/Root";
// import SearchPage, { loader as searchLoader } from "./pages/Search";
import { checkAuthLoader } from "./utils/auth";
// import HomePage from "./pages/Home";

const Root = lazy(() => import("./pages/Root"));
const HomePage = lazy(() => import("./pages/Home"));
const SearchPage = lazy(() => import("./pages/Search"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Root />
      </Suspense>
    ),
    loader: (meta) =>
      import("./utils/auth").then((module) => module.checkAuthLoader()),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingSection />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "search/:searchId",
        element: (
          <Suspense fallback={<LoadingSection />}>
            <SearchPage />
          </Suspense>
        ),
        loader: (meta) =>
          import("./pages/Search").then((module) => module.loader(meta)),
      },
    ],
  },
  { path: "/login", element: <LoginPage />, loader: loginLoader },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
