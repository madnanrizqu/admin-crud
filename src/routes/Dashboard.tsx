import { useAuthStore } from "@/store/auth";

export const Dashboard = () => {
  const authStore = useAuthStore();

  return <div>Dashboard. Hi, {authStore.user?.name}!</div>;
};
