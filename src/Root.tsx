import { createBrowserRouter, Navigate } from "react-router-dom";

import Register from "@/routes/Register";
import ErrorPage from "@/utils/ErrorPage";

import { AuthProvider } from "./providers/AuthProvider";
import Login from "./routes/Login";
import PublicLayout from "./routes/PublicLayout";
import { RootLayout } from "./routes/RootLayout";

const routeRoot = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <RootLayout />
      </AuthProvider>
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
                <Login />
            )
          },
          {
            path: "/register",
            element: (
                <Register />
            ),
          },
        ],
      },
    ],
  },
]);

export default routeRoot;
