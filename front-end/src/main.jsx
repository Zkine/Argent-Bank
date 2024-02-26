import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/index";
import SignIn from "./pages/sign-in";
import "./styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
