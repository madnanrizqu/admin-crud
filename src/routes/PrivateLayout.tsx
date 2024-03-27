import { AppShell, Burger, Button, Flex, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";

import { useAuthStore } from "@/store/auth";

import classes from "./PrivateLayout.module.css";

export default function ResponsiveSizes() {
  const [opened, { toggle }] = useDisclosure();
  const authStore = useAuthStore();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex justify="space-between" align="center" h="100%" px="md">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text>Admin CRUD</Text>
          </Group>

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
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <nav>
          <ul className={classes.sidebarList}>
            <li>Home</li>
          </ul>
        </nav>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
