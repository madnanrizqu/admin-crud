import { createBrowserRouter, Navigate } from "react-router-dom";

import Register from "@/routes/Register";
import ErrorPage from "@/utils/ErrorPage";

import Login from "./routes/Login";
import PublicLayout from "./routes/PublicLayout";
import { RootLayout } from "./routes/RootLayout";
import PrivateLayout from "./routes/PrivateLayout";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Dashboard } from "./routes/Dashboard";
import { RedirectIfLogin } from "./utils/RedirectIfLogin";

const routeRoot = createBrowserRouter([
  {
    element: (
        <RootLayout />
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to="/login"></Navigate>
          },
          {
            path: "/login",
            element: (
                <RedirectIfLogin><Login /></RedirectIfLogin>
            )
          },
          {
            path: "/register",
            element: (
                <RedirectIfLogin><Register /></RedirectIfLogin>
            ),
          },
        ],
      },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: "/dashboard",
            element: <ProtectedRoute><Dashboard /></ProtectedRoute>
          }
        ]
      }
    ],
  },
]);

export default routeRoot;
