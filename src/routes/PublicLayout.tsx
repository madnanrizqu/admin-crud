import { Center, Container, Stack } from "@mantine/core";
import { Outlet } from "react-router-dom";

import { ThemeToggler } from "@/ui/ThemeToggler";

const PublicLayout = () => {
  return (
    <Container pt="xl">
      <Center>
        <div>
          <Stack gap="sm">
            <ThemeToggler />
            <Outlet />
          </Stack>
        </div>
      </Center>
    </Container>
  );
};

export default PublicLayout;
