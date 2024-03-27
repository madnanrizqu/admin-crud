import { Button, Container, Flex, Text } from "@mantine/core";
import { Outlet } from "react-router-dom";

import { useAuthStore } from "@/store/auth";

import classes from "./PublicLayout.module.css";

export default function PrivateLayout() {
  const authStore = useAuthStore();

  return (
    <Container>
      <header className={classes.navbar}>
        <Flex justify="space-between" align="center">
          <Text>CRUD Admin</Text>
          <Flex direction="column">
            <Text>Hi, {authStore.user?.name}</Text>
            <Button
              variant="outline"
              size="xs"
              onClick={() => authStore.clearState()}
            >
              Logout
            </Button>
          </Flex>
        </Flex>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
