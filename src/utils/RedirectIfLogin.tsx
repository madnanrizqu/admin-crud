import { useAuthStore } from '@/store/auth'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: ReactNode;
};
export const RedirectIfLogin = ({ children }: ProtectedRouteProps) => {
  const authStore = useAuthStore();
  
  if (authStore.user) {
    return <Navigate to={"/dashboard"} />
  }
  
  return children
}
