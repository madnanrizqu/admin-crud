import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Flex,
  Group,
  List,
  ListItem,
  NavLink,
  Popover,
  Text,
} from "@mantine/core";
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
        width: { base: 200, md: 300 },
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

          <Flex align="center" gap="sm">
            <Text size="xs">Hi, {authStore.user?.name}</Text>

            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Avatar radius="xl" style={{ cursor: "pointer" }} />
              </Popover.Target>
              <Popover.Dropdown>
                <Button
                  variant="subtle"
                  fullWidth
                  size="xs"
                  color="red"
                  onClick={() => authStore.clearState()}
                >
                  Logout
                </Button>
              </Popover.Dropdown>
            </Popover>
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Flex direction="column" justify="space-between" flex="1">
          <List className={classes.sidebarList} spacing="md">
            <ListItem w="100%" flex="1" className={classes.sidebarListItem}>
              <NavLink label="Dashboard" />
            </ListItem>
          </List>
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
