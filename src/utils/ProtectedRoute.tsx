import { useAuthStore } from "@/store/auth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const authStore = useAuthStore();

  if (!authStore?.token) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;
