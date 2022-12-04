import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import About from "../pages/About/About";
import AdminLogin from "../pages/Auth/AdminLogin/AdminLogin";
import UserLogin from "../pages/Auth/UserLogin/UserLogin";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/adminlogin",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/userlogin",
        element: <UserLogin></UserLogin>,
      },
    ],
  },
]);
