import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Oders from "../Layouts/Dashboard/Oders/Oders";
import AllUsers from "../Layouts/Dashboard/Allusers/AllUsers";
import AddItems from "../Pages/AddItems/AddItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shop/:category",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/oders",
        element: <Oders />,
      },
      // admin routes
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/additems",
        element: <AddItems />,
      },
    ],
  },
]);
