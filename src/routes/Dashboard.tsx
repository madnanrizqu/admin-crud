import { useAuthStore } from "@/store/auth";
import { Button } from "@mantine/core";

export const Dashboard = () => {
  const authStore = useAuthStore();

  return <>
  <div>Dashboard. Hi, {authStore.user?.name}!</div>
  <Button onClick={() => {authStore.clearState()}}>Logout</Button>
  </>;
};
