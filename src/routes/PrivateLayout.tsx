import { Button, Flex, Text } from "@mantine/core";
import { Outlet } from "react-router-dom";

import { useAuthStore } from "@/store/auth";

import classes from "./PrivateLayout.module.css";

export default function PrivateLayout() {
  const authStore = useAuthStore();

  return (
    <Flex direction="column" className={classes.root}>
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

      <Flex gap="24px" flex="1" className={classes.mainSidebarContainer}>
        <aside className={classes.sidebar}>
          <nav>
            <ul>
              <li>
                <li>Home</li>
              </li>
            </ul>
          </nav>
        </aside>
        <main className={classes.main}>
          <Outlet />
        </main>
      </Flex>
    </Flex>
  );
}
