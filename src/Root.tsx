import { createBrowserRouter, Navigate } from "react-router-dom";

import Register from "@/routes/Register";
import ErrorPage from "@/utils/ErrorPage";

import { Dashboard } from "./routes/dashboard";
import Login from "./routes/Login";
import PrivateLayout from "./routes/PrivateLayout";
import PublicLayout from "./routes/PublicLayout";
import { RootLayout } from "./routes/RootLayout";
import ProtectedRoute from "./utils/ProtectedRoute";
import { RedirectIfLogin } from "./utils/RedirectIfLogin";

const routeRoot = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to="/login"></Navigate>,
          },
          {
            path: "/login",
            element: (
              <RedirectIfLogin>
                <Login />
              </RedirectIfLogin>
            ),
          },
          {
            path: "/register",
            element: (
              <RedirectIfLogin>
                <Register />
              </RedirectIfLogin>
            ),
          },
        ],
      },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: "/dashboard",
            element: (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default routeRoot;
